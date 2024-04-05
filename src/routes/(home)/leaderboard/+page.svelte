<script lang="ts">
    import { SKIN_IMAGE } from "$lib/utils"

    const a = ["OnlineTime", "Kills", "Deaths"]
</script>

<ul
    class="flex gap-5 mx-auto md:justify-center px-2 overflow-x-auto whitespace-nowrap mb-20 no-scrollbar"
>
    {#each a as tab (tab)}
        {@const active = tab === "OnlineTime"}
        <li aria-label="Tab">
            <button
                aria-label="Tab"
                class="text-xl font-medium hover:text-lightblue hover:dark:text-lightyellow"
                class:dark:text-lightyellow={active}
                class:text-lightblue={active}
                class:font-semibold={active}
            >
                {tab}
            </button>
        </li>
    {/each}
</ul>

<main class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {#each [1, 2, 3] as x (x)}
        <div
            class="relative rounded-3xl bg-[#efeffd] dark:bg-darkblue overflow-hidden"
        >
            <img
                class="w-full h-auto aspect-square"
                src={SKIN_IMAGE}
                alt="itsMU1X"
                width="128"
                height="128"
            />

            <div class="p-5">
                <h3
                    class="text-md font-semibold text-darkbody/85 dark:text-lightbody/85"
                >
                    @itsmu1x
                </h3>
            </div>

            <span
                class="absolute top-4 start-4 p-2 text-xs bg-lighterblue text-white rounded-full"
            >
                102.8$
            </span>
        </div>
    {/each}
</main>
