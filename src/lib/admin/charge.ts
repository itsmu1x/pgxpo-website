import { invalidateAll } from "$app/navigation"
import { toast } from "$lib/toast"
import Swal from "sweetalert2"

export const charge = async (cardId: string) => {
    toast.success({ title: "You've charged 1500 PX" })
}

export const requestCharge = async () => {
    const x = await Swal.fire({
        title: "Recharge",
        input: "text",
        inputPlaceholder: "Put the card id",
        allowEnterKey: true,
        allowEscapeKey: true,
        allowOutsideClick: true,
        confirmButtonText: "Charge",
        showCancelButton: true,
        background: "#0C153B",
        customClass: {
            input: "outline-none text-white shadow-none",
            inputLabel: "title text-xl font-semibold text-darkbody text-white",
            title: "text-darkbody text-white",
        },
    })

    if (!x.isConfirmed || x.isDenied || x.isDismissed) return

    const text = x.value as string
    if (text.trim().length < 16)
        return toast.error({ title: "Invalid card id" })

    await charge(text)
}
