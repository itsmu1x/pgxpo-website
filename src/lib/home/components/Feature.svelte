<script lang="ts">
    import Icon from "@iconify/svelte"

    export let title: string
    export let description: string
    export let icon: string
</script>

<div
    class="bg-lightbody dark:bg-darkerblue rounded-xl shadow-lg border muborder p-5 px-6"
>
    <div class="flex flex-col gap-5">
        <span class="mx-auto p-4 rounded-lg bg-lightblue">
            <Icon class="fill-white text-white" {icon} width="48" height="48" />
        </span>
        <h1 class="text-xl font-bold text-center txt">{title}</h1>
        <p class="text-md font-medium text-center txt">{description}</p>
    </div>
</div>
