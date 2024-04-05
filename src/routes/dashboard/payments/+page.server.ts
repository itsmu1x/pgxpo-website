import type { PageServerLoad } from "./$types"

type Payment = {
    order_id: string
    px: number
    completed: boolean
    created_at: Date
}

export const load: PageServerLoad = async () => {
    return {
        payments: [
            {
                order_id: "IX7A-SOI9-69XU",
                px: 2500,
                completed: true,
                created_at: new Date(),
            }
        ] as Payment[]
    }
}