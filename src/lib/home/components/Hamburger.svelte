<script lang="ts">
    import cn from "$lib/cn"

    let className: string = ""

    export let clicked: () => any = () => {}
    export { className as class }
</script>

<button
    on:click={clicked}
    aria-label="Hamburger menu"
    class={cn(
        "md:hidden border-2 border-darkbody/80 dark:border-lightwhite/80 p-1.5 py-1 rounded-lg",
        className
    )}
>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-8 h-8 fill-darkbody/80 text-darkbody/80 dark:fill-lightwhite/80 dark:text-lightwhite/80"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
        />
    </svg>
</button>
