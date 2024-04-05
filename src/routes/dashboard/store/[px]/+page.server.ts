import type { PageServerLoad } from "./$types"
import { redirect } from "@sveltejs/kit"
import { cards } from "$lib/cards.server"

export const load: PageServerLoad = async ({ params }) => {
    const card = cards.find(c => c.px == parseInt(params.px))

    if (!card) throw redirect(302, "/dashboard/store")
    return {
        card,
    }
}

// export const actions: Actions = {
//     checkout: async (event) => {
//         const db = await getConnection()

//         try {
//             if (!event.locals?.user)
//                 return fail(401, { message: "You're not authorized" })

//             const data = await event.request.formData()
//             if (!data.has("px")) return fail(400, { message: "Invalid data" })

//             const [cards] = await db.query<RowDataPacket[]>(
//                 "SELECT * FROM cards_shop WHERE px=?",
//                 [data.get("px")]
//             )
//             if (!cards.length)
//                 return fail(404, { message: "Could not find the card" })

//             const card = cards[0] as Card
//             const amount = {
//                 currency_code: "USD",
//                 value: `${(card.tax * card.cost + card.cost).toFixed(2)}`,
//             }

//             const paypal = new Paypal()
//             const order = await paypal.createOrder({
//                 intent: "CAPTURE",
//                 payment_source: {
//                     paypal: {
//                         experience_context: {
//                             brand_name: "PGxPO",
//                             cancel_url: `${ORIGIN}/checkout`,
//                             return_url: `${ORIGIN}/checkout`,
//                             landing_page: "LOGIN",
//                             shipping_preference: "NO_SHIPPING",
//                             user_action: "PAY_NOW",
//                         },
//                     },
//                 },
//                 purchase_units: [
//                     {
//                         amount: {
//                             ...amount,
//                             breakdown: {
//                                 item_total: amount,
//                             },
//                         },
//                         items: [
//                             {
//                                 name: `${card.px} PX Card`,
//                                 quantity: 1,
//                                 unit_amount: amount,
//                                 description: `${card.px} PX Card`,
//                                 url: `${ORIGIN}/dashboard/store/${card.px}`,
//                                 category: "DIGITAL_GOODS",
//                                 sku: `${card.px} PX Card`,
//                             },
//                         ],
//                         description: `PAYPAL AUTOMATIC PAYMENT - PGxPO Purchase for a PX Card`,
//                     },
//                 ],
//             })
//             if (!order?.id) return fail(404)

//             const [insertion] = await db.query<ResultSetHeader>(
//                 "INSERT INTO cards_checkout (px, order_id, user_id) VALUES (?, ?, ?)",
//                 [card.px, order.id, event.locals.user.id]
//             )

//             if (!insertion?.affectedRows)
//                 return fail(500, { message: "Couldn't register your payment" })

//             return redirect(
//                 302,
//                 order
//                     ? order.links.find((d) => d.rel === "payer-action")?.href ??
//                           "/dashboard/store"
//                     : "/dashboard/store"
//             )
//         } catch (err) {
//             if (isRedirect(err)) {
//                 throw err
//             }
//             return fail(500)
//         } finally {
//             db.release()
//         }
//     },
// }