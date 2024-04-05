import Swal, {
    type SweetAlertIcon,
    type SweetAlertOptions,
    type SweetAlertResult,
} from "sweetalert2"

function makeToast(this: SweetAlertIcon, options: SweetAlertOptions = {}) {
    return Swal.mixin({
        toast: true,
        iconColor: "white",
        position: "top-right",
        icon: this,
        customClass: {
            popup: "colored-toast",
        },
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3123,
        ...options,
    }).fire({ ...options })
}

export const toast: Record<
    SweetAlertIcon,
    (options?: SweetAlertOptions) => Promise<SweetAlertResult<any>>
> = {
    error: makeToast.bind("error"),
    info: makeToast.bind("info"),
    question: makeToast.bind("question"),
    success: makeToast.bind("success"),
    warning: makeToast.bind("warning"),
}
