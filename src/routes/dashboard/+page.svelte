<script lang="ts">
    import Icon from "@iconify/svelte"
    import Copy from "$lib/components/Copy.svelte"
    import { charge, requestCharge } from "$lib/admin/charge"
    import Btn from "$lib/admin/components/Btn.svelte"
    import { paginate } from "$lib/utilities"
    import Pagination from "$lib/admin/components/Pagination.svelte"
    import { user } from "$lib/utils"

    type Card = {
        id: string
        px: number
        sold_by: number
        used_by: number
        used_at: Date
        created_at: Date
    }

    const cards: Card[] = [
        {
            id: "S0IQ-AM69-AXI1",
            px: 1500,
            sold_by: 0,
            used_by: 0,
            used_at: new Date(),
            created_at: new Date(),
        },
    ]

    let show: boolean = true
    const ROWS = 5
    let page = 1
    $: pages = Math.ceil(cards.length / ROWS)
    $: trimmed = paginate(cards, ROWS, page)

    const go = (newPage: number) => {
        if (newPage <= pages && newPage > 0) {
            page = newPage
        }
    }
</script>

<div
    class="grid lg:w-9/12 mx-auto place-items-center gap-6 grid-cols-1 md:grid-cols-2 mb-6"
>
    <div class="w-full p-4 sidebg shadow-lg rounded-xl border sideborder text">
        <span class="font-semibold text-lg"> Your PX </span>
        <span class="title text-xl float-end font-semibold">{user.px} PX</span>
    </div>
    <div class="w-full p-4 sidebg shadow-lg rounded-xl border sideborder text">
        <span class="font-semibold text-lg"> Your Payments </span>
        <span class="title text-xl float-end font-semibold"> 12 </span>
    </div>
</div>

<div class="flex justify-center gap-4">
    <div
        class="w-full lg:w-9/12 mx-auto sidebg shadow-lg rounded-xl border sideborder text overflow-hidden"
    >
        <header class="px-5 py-4 flex justify-between border-b sideborder">
            <h2 class="text-xl font-semibold">Your cards</h2>
            <h2 class="font-semibold">{cards.length} Card(s)</h2>
        </header>
        {#if trimmed.length > 0}
            <div class="overflow-x-auto p-3">
                <table class="table-auto w-full">
                    <thead
                        class="text-xs font-semibold uppercase text-lightbody bg-lighterblue dark:bg-lighterblue/40"
                    >
                        <tr>
                            <th
                                class="p-2.5 whitespace-nowrap rounded-bs-lg rounded-ts-lg"
                            >
                                <div
                                    class="flex gap-2 items-center font-semibold text-start"
                                >
                                    <Icon
                                        icon="solar:card-2-bold"
                                        width="20"
                                        height="20"
                                    />

                                    card id
                                </div>
                            </th>
                            <th class="p-2.5 whitespace-nowrap">
                                <div
                                    class="flex gap-2 items-center font-semibold text-start"
                                >
                                    <Icon
                                        icon="fa6-solid:sack-dollar"
                                        width="20"
                                        height="20"
                                    />

                                    PX
                                </div>
                            </th>

                            <th class="p-2.5 whitespace-nowrap">
                                <div
                                    class="flex gap-2 items-center font-semibold text-start"
                                >
                                    <Icon
                                        icon="mdi:shop-time"
                                        width="20"
                                        height="20"
                                    />

                                    used
                                </div>
                            </th>

                            <th
                                class="p-2.5 whitespace-nowrap rounded-be-lg rounded-te-lg"
                            >
                                <div
                                    class="flex gap-2 items-center font-semibold text-start"
                                >
                                    <Icon
                                        icon="fluent-mdl2:set-action"
                                        width="20"
                                        height="20"
                                    />

                                    Actions
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody class="text-md divide-y sidedivide">
                        {#each trimmed as card (card.id)}
                            <tr>
                                <td
                                    class="p-4 px-2 whitespace-nowrap font-medium"
                                >
                                    {show
                                        ? card.id
                                        : card.id
                                              .split("")
                                              .map((d) => (d === "-" ? d : "X"))
                                              .join("")}
                                </td>
                                <td class="p-4 px-2 whitespace-nowrap">
                                    <div
                                        class="text-start font-semibold text-lightblue dark:text-orange-400"
                                    >
                                        {card.px} PX
                                    </div>
                                </td>
                                <td class="p-4 px-2 whitespace-nowrap">
                                    <div class="text-start font-medium">
                                        {card.used_at
                                            ? "Used at " +
                                              new Intl.DateTimeFormat("en-US", {
                                                  timeStyle: "medium",
                                                  dateStyle: "short",
                                              }).format(card.used_at)
                                            : "Not Used"}
                                    </div>
                                </td>
                                <td
                                    class="p-4 px-2 whitespace-nowrap font-medium text-white"
                                >
                                    <Copy
                                        text={card.id}
                                        ariaLabel="Copy Card ID"
                                    />

                                    <button
                                        aria-label="Charge"
                                        on:click={() => charge(card.id)}
                                        disabled={card.used_by != null}
                                        class="rounded-xl iconbtnclr duration-300"
                                    >
                                        <Icon
                                            icon="solar:airbuds-case-charge-bold"
                                            width="32"
                                            height="32"
                                        />
                                    </button>
                                </td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
        {:else}
            <h2 class="font-semibold text-center mt-2 text-lg md:text-xl">
                It looks like you haven't charged any cards yet.
            </h2>
        {/if}

        {#if cards.length > 0}
            <footer
                class="p-3 flex justify-between gap-4 items-center border-t sideborder overflow-hidden overflow-x-auto"
            >
                <Pagination
                    {page}
                    {pages}
                    next={() => go(page + 1)}
                    previous={() => go(page - 1)}
                />

                <div class="flex gap-4">
                    <button
                        on:click={() => (show = !show)}
                        aria-label={show ? "Hide" : "Show"}
                        class="iconbtnclr duration-300"
                    >
                        <Icon
                            icon={show ? "bi:eye-slash-fill" : "bi:eye-fill"}
                            width="32"
                            height="32"
                        />
                    </button>

                    <Btn onClick={requestCharge} text="Charge PX Card">
                        Charge PX
                    </Btn>
                </div>
            </footer>
        {/if}
    </div>
</div>
