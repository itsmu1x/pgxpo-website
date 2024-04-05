<script lang="ts">
    import cn from "$lib/cn"

    export let text: string = ""
    export let onClick: () => any = () => {}
    export let disabled: boolean = false
    let className: string = ""

    export { className as class }
</script>

<button
    {disabled}
    on:click={onClick}
    class={cn(
        "px-4 py-2 rounded-lg outline-none text-sm font-semibold border border-lightblue hover:bg-lightblue dark:border-orange-400 dark:hover:bg-orange-400 hover:text-white duration-300",
        className
    )}
    aria-label={text}
>
    <slot />
</button>
