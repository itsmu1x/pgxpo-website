function bytestohex(bytes: Uint8Array) {
    var hexstring = "",
        h
    for (var i = 0; i < bytes.length; i++) {
        h = bytes[i].toString(16)
        if (h.length == 1) {
            h = "0" + h
        }
        hexstring += h
    }
    return hexstring
}

export function randomString(range: number = 24) {
    return bytestohex(crypto.getRandomValues(new Uint8Array(range)))
}

export function paginate<T>(
    array: T[],
    page_size: number,
    page_number: number
) {
    return array.slice((page_number - 1) * page_size, page_number * page_size)
}

export function scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight)
}

export const textize = (value: FormDataEntryValue | null) => {
    if (!value || typeof value !== "string") return false
    const match = /^[\s\S]{4,512}$/.test(value)
    return match
        ? value.replaceAll(/[\r\n|\n]{8,}/gm, "\n").replaceAll(/[ ]+/g, " ")
        : null
}
