<script lang="ts">
    import cn from "$lib/cn"
    import Icon from "@iconify/svelte"

    let className: string = ""
    export { className as class }
</script>

<a href="/auth" aria-label="Discord Login">
    <button
        class={cn(
            "flex gap-1 items-center px-4 py-2 rounded-full bg-lighterblue text-white",
            className
        )}
    >
        Login
        <Icon icon="mingcute:discord-fill" width="24" height="24" />
    </button>
</a>
