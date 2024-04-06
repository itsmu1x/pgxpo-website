import type { PageServerLoad } from "./$types"
import UAParser from "ua-parser-js"

export const load: PageServerLoad = async ({ request, getClientAddress }) => {
    const parse = new UAParser(
        request.headers.get("User-Agent") ?? undefined
    )
    const os = parse.getOS()
    const ip = getClientAddress()

    const sessions: {
        isCurrent: boolean
        os: string
        browser: string
        location: string | null
    }[] = [
            {
                isCurrent: true,
                os: [os.name, os.version].filter(Boolean).join(" "),
                browser: parse.getBrowser().name!,
                location: await getLocationFromIP(ip)
            }
        ]

    return {
        sessions,
    }
}

async function getLocationFromIP(ip: string) {
    try {
        const response = await fetch(`https://ipapi.co/${ip}/json/`)
        const data = await response.json()
        if (data.error) throw data.error
        return `${data.country_name} (${data.city})`
    } catch {
        return null
    }
}