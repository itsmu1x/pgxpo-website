<script lang="ts">
    import Icon from "@iconify/svelte"
    import Btn from "./Btn.svelte"

    export let previous: () => any
    export let next: () => any
    export let page: number
    export let pages: number
</script>

<div class="flex items-center gap-2">
    <Btn onClick={previous} class="p-1" text="Previous">
        <Icon icon="eva:arrow-left-fill" width="24" height="24" />
    </Btn>

    <span class="title font-semibold">
        {page}/{pages}
    </span>

    <Btn onClick={next} class="p-1" text="Next">
        <Icon icon="eva:arrow-right-fill" width="24" height="24" />
    </Btn>
</div>
