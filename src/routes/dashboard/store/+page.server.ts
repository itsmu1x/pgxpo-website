import type { PageServerLoad } from "./$types"
import { cards } from "$lib/cards.server"

export const load: PageServerLoad = async () => {
    return {
        cards,
    }
}
