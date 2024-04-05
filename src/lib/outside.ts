export default function outside(node: HTMLElement) {
    const onClick = (event: MouseEvent) => {
        if (
            node &&
            !node.contains(event.target as HTMLElement) &&
            !event.defaultPrevented
        ) {
            node.dispatchEvent(new CustomEvent("outside"))
        }
    }

    document.addEventListener("click", onClick, true)
    return {
        destroy() {
            document.removeEventListener("click", onClick, true)
        },
    }
}
