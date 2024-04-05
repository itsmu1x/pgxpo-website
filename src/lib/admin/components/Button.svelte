<script lang="ts">
    import cn from "$lib/cn"
    import type { ClassValue } from "clsx"

    import type { HTMLButtonAttributes } from "svelte/elements"

    interface $$Props extends HTMLButtonAttributes {
        variant?: "success" | "primary" | "error"
        style?: "block" | "icon" | "normal"
        outline?: boolean
        rounded?: boolean
        onclick?: () => any
    }

    export let variant: "success" | "primary" | "error" = "success"
    export let style: "block" | "icon" | "normal" = "normal"
    export let outline = false
    export let rounded = true
    export let onclick: () => any = () => {}

    const color: Record<typeof variant, ClassValue> = {
        error: {
            "border border-red-500 hover:bg-red-500 hover:text-white": outline,
            "bg-red-500 hover:bg-red-600 disabled:bg-red-600/75": !outline,
        },
        primary: {
            "border border-lighterblue hover:bg-lightblue hover:text-white":
                outline,
            "bg-lighterblue hover:bg-lightblue disabled:bg-lightblue/75":
                !outline,
        },
        success: {
            "border border-green-600 hover:bg-green-500 hover:border-green-500 hover:text-white":
                outline,
            "bg-green-600 hover:bg-green-500 disabled:bg-green-500/75":
                !outline,
        },
    }
</script>

<button
    {...$$restProps}
    on:click={onclick}
    class={cn(
        "duration-300 py-2 text-white font-semibold disabled:text-white/75 disabled:pointer-events-none",
        color[variant],
        {
            "rounded-lg": rounded,
            "px-4": style === "normal",
            "w-full": style === "block",
            "px-2": style === "icon",
            "text-black dark:text-white": outline,
        },
        $$restProps.class
    )}
>
    <slot />
</button>
