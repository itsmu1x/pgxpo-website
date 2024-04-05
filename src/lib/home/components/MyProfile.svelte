<script lang="ts">
    import userIcon from "$lib/home/assets/imgs/user.png"
    import cn from "$lib/cn"

    export let profileClick: () => void

    let className: string = ""
    export { className as class }
</script>

<button
    on:click={profileClick}
    class={cn("p-2.5 rounded-lg bg-darkerblue", className)}
>
    <img
        src={userIcon}
        alt="Profile"
        width="24"
        height="24"
        class="aspect-square w-6 h-auto"
    />
</button>
