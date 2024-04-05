<script lang="ts">
    import "../app.css"
    import type { LayoutServerData } from "./$types"
    import darkmode from "$lib/contexts/darkmode"

    export let data: LayoutServerData
    $: $darkmode = data.mode
</script>

<svelte:head>
    <title>PGxPO</title>
    <meta name="keywords" content="pgxpo, minecraft, pvp, server, gaming" />
    <meta name="description" content="PGxPO Minecraft Server" />
    <meta name="theme-color" content="#4c246e" />
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
</svelte:head>

<slot />
