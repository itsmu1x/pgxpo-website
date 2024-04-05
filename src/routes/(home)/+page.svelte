<script lang="ts">
    import Feature from "$lib/home/components/Feature.svelte"
    import Hero from "$lib/home/components/Hero.svelte"
</script>

<Hero
    longText="A new beginning, and a new look to the future to become the best"
    shortText="Minecraft Server (original version) 1.8 » 1.18"
/>

<div
    class="grid divider gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
>
    <Feature
        icon="basil:lightning-solid"
        title="Performance"
        description="The server is fast and has low ping, better than before!"
    />

    <Feature
        icon="bi:shield-lock-fill"
        title="Security"
        description="There will be no chance to cheat, hack, or sabotage."
    />

    <Feature
        icon="material-symbols:headset-mic-rounded"
        title="Staff"
        description="Improving the management staff, dealing with members."
    />

    <Feature
        icon="dashicons:games"
        title="Games"
        description="Unique games have been added, games improved."
    />
</div>

<div
    class="flex flex-wrap flex-row justify-center gap-6 divider p-12 border muborder rounded-xl"
>
    <div class="w-5/12 md:w-3/12 text-center">
        <p class="text-2xl md:text-4xl font-semibold">0</p>
        <span class="text-md font-medium">Monthly Players</span>
    </div>

    <div class="w-5/12 md:w-3/12 text-center">
        <p class="text-2xl md:text-4xl font-semibold">0</p>
        <span class="text-md font-medium">Online now</span>
    </div>

    <div class="w-5/12 md:w-3/12 text-center">
        <p class="text-2xl md:text-4xl font-semibold">12</p>
        <span class="text-md font-medium">Games</span>
    </div>
</div>

<div
    class="flex flex-col md:flex-row md:items-center gap-6 divider p-8 md:p-16 justify-between rounded-3xl bg-lighterblue"
>
    <h2 class="text-2xl md:text-4xl font-semibold text-lightbody">
        Browse the leaderboards
    </h2>
    <button
        class="py-4 w-fit px-8 rounded-full bg-lightyellow font-semibold text-darkbody"
    >
        Browse
    </button>
</div>
