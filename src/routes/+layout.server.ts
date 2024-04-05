import type { LayoutServerLoad } from "./$types"

export const load: LayoutServerLoad = async ({ cookies }) => {
    const darkmodeCookie = cookies.get("__pgxpo_theme")
    const mode = darkmodeCookie === undefined || darkmodeCookie === "dark"

    return {
        mode,
    }
}