<script lang="ts">
    import Icon from "@iconify/svelte"

    export let text: string
    export let ariaLabel = ""
    export let width: number = 32
    export let height: number = 32

    let copied: boolean | null = null

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(text)
            // toast.success({ title: "Copied the card", timer: 2500 })
            copied = true
        } catch {
            // toast.error({ title: "Couldn't copy the card id", timer: 2500 })
            copied = false
        }

        setTimeout(() => {
            copied = null
        }, 2500)
    }
</script>

<button
    on:click={copy}
    disabled={copied !== null}
    aria-label={ariaLabel}
    class="rounded-xl iconbtnclr duration-300"
>
    <Icon
        icon={copied === null
            ? "solar:clipboard-bold"
            : copied === true
              ? "solar:clipboard-check-bold"
              : "solar:clipboard-remove-bold"}
        {width}
        {height}
    />
</button>
