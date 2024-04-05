<script lang="ts">
    import type { PageData } from "./$types"
    import Icon from "@iconify/svelte"

    export let data: PageData
</script>

<div class="flex gap-4 justify-center">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {#each data.cards as card (card.px)}
            <div class="p-5 rounded-2xl sidebg">
                <img
                    class="w-full h-auto mb-2"
                    width="313"
                    height="206"
                    src={card.image}
                    alt={`${card.px} px card`}
                />

                <div class="flex justify-between items-center">
                    <h1
                        class="title text-start uppercase text-lg lg:text-xl text-darkbody dark:text-white/75 font-semibold"
                    >
                        {card.px} px card
                    </h1>
                    <h1
                        class="title text-start uppercase text-md lg:text-lg text-darkbody dark:text-white/75 font-semibold"
                    >
                        ${card.cost.toFixed(2)}
                    </h1>
                </div>

                <hr class="sideborder my-4" />

                <a
                    href="/dashboard/store/{card.px}"
                    aria-label="{card.px} px card"
                >
                    <button
                        class="w-full relative uppercase before:top-0 before:absolute before:h-full before:w-0 before:bg-lighterblue before:duration-300 overflow-hidden before:start-0 hover:before:w-full font-semibold rounded-full px-4 py-2.5 bg-lightblue"
                    >
                        <span
                            class="relative flex items-center gap-1 justify-center"
                        >
                            <Icon
                                icon="ph:shopping-cart-simple-fill"
                                width="16"
                                height="16"
                            />
                            checkout
                        </span>
                    </button>
                </a>
            </div>
        {/each}
    </div>
</div>
