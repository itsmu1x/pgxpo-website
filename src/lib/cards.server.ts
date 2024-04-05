import card200 from "$lib/home/assets/cards/200.png"
import card600 from "$lib/home/assets/cards/600.png"
import card1200 from "$lib/home/assets/cards/1200.png"
import card2000 from "$lib/home/assets/cards/2000.png"
import card4350 from "$lib/home/assets/cards/4350.png"
import card13050 from "$lib/home/assets/cards/13050.png"

export const cards = [
    // btw, better to do the costs and prices with cents as there's a tax here. cuz javascript sucks.
    // but that's for demo purposes.
    {
        px: 200,
        image: card200,
        tax: 0.15,
        cost: 6.0,
    },
    {
        px: 600,
        image: card600,
        tax: 0.15,
        cost: 18.0,
    },
    {
        px: 1200,
        image: card1200,
        tax: 0.15,
        cost: 36.0,
    },
    {
        px: 2000,
        image: card2000,
        tax: 0.15,
        cost: 69.0,
    },
    {
        px: 4350,
        image: card4350,
        tax: 0.15,
        cost: 128.0,
    },
    {
        px: 13050,
        image: card13050,
        tax: 0.15,
        cost: 329.0,
    },
]