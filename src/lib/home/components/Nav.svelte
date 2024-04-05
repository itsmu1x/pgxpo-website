<script lang="ts">
    export let name: string
    export let href: string = "#"
    export let active: boolean = false
</script>

<li>
    <a
        class="text-lg font-medium duration-300 hover:text-lightblue hover:dark:text-lightyellow"
        class:dark:text-lightyellow={active}
        class:text-lightblue={active}
        aria-label={name}
        {href}
    >
        {name}
    </a>
</li>
