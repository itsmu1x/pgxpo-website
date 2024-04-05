<script lang="ts">
    import Pagination from "$lib/admin/components/Pagination.svelte"
    import cn from "$lib/cn"
    import type { PageData } from "./$types"
    import { paginate } from "$lib/utilities"

    export let data: PageData
    let page = 1

    const ROWS = 6
    $: pages = Math.ceil(data.payments.length / ROWS)
    $: trimmed = paginate(
        data.payments.sort(
            (a, b) => b.created_at.getTime() - a.created_at.getTime()
        ),
        ROWS,
        page
    )

    const go = (newPage: number) => {
        if (newPage <= pages && newPage > 0) {
            page = newPage
        }
    }
</script>

<div class="flex gap-4 justify-center">
    <div
        class="w-full lg:w-8/12 mx-auto sidebg shadow-lg rounded-xl border sideborder text overflow-hidden"
    >
        <header class="px-5 py-4 flex justify-between border-b sideborder">
            <h2 class="text-xl font-semibold">Payments history</h2>
        </header>
        {#if trimmed.length > 0}
            <div class="overflow-x-auto p-3">
                <table class="table-auto w-full">
                    <thead
                        class="text-xs font-semibold uppercase text-lightbody bg-lighterblue dark:bg-lighterblue/40"
                    >
                        <tr class="select-none">
                            <th
                                class="p-2.5 whitespace-nowrap rounded-bs-lg rounded-ts-lg"
                            >
                                <div
                                    class="flex gap-2 items-center font-semibold text-start"
                                >
                                    Order ID
                                </div>
                            </th>

                            <th class="p-2.5 whitespace-nowrap">
                                <div
                                    class="flex gap-2 items-center font-semibold text-start"
                                >
                                    Item
                                </div>
                            </th>

                            <th
                                class="p-2.5 whitespace-nowrap rounded-be-lg rounded-te-lg"
                            >
                                <div
                                    class="flex gap-2 items-center font-semibold text-start"
                                >
                                    Completed
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody class="text-md divide-y sidedivide">
                        {#each trimmed as payment (payment.order_id)}
                            <tr>
                                <td
                                    class="flex items-center gap-2 p-4 px-2 whitespace-nowrap font-medium"
                                >
                                    {payment.order_id}
                                </td>

                                <td
                                    class="p-4 px-2 whitespace-nowrap font-medium"
                                >
                                    {payment.px} PX Card
                                </td>

                                <td
                                    class={cn(
                                        "p-4 px-2 whitespace-nowrap font-medium text-lightbody",
                                        {
                                            "text-green-700 dark:text-green-500":
                                                payment.completed,
                                            "text-yellow-700 dark:text-yellow-500":
                                                !payment.completed,
                                        }
                                    )}
                                >
                                    {payment.completed
                                        ? "Completed"
                                        : "Pending"}
                                </td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
        {:else}
            <h1 class="title text-2xl text-center font-semibold py-4">
                No Payments Yet
            </h1>
        {/if}
        {#if pages > 0}
            <footer class="p-3 flex justify-end border-t sideborder">
                <Pagination
                    next={() => go(page + 1)}
                    previous={() => go(page - 1)}
                    {page}
                    {pages}
                />
            </footer>
        {/if}
    </div>
</div>