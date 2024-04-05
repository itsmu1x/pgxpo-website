<script lang="ts">
    import { paginate } from "$lib/utils/utilities"

    export let rows: number = 10
    export let head: string[]
    export let body: string[][]

    let page: number = 1
    $: pages = Math.ceil(body.length / rows)
    $: trimmed = paginate(body, rows, page)
</script>

<div class="flex gap-4 md:p-4 justify-center">
    <div
        class="w-full lg:w-8/12 mx-auto sidebg shadow-lg rounded-xl border sideborder text overflow-hidden"
    >
        <slot name="header" />
        {#if trimmed.length > 0}
            <div class="overflow-x-auto p-3">
                <table class="table-auto w-full">
                    <thead
                        class="text-xs font-semibold uppercase text-lightbody bg-lighterblue dark:bg-lighterblue/40"
                    >
                        <tr class="select-none">
                            {#each head as element}
                                <th
                                    class="p-2.5 whitespace-nowrap rounded-bs-lg rounded-ts-lg"
                                >
                                    {element}
                                </th>
                            {/each}
                        </tr>
                    </thead>
                    <tbody class="text-md divide-y sidedivide">
                        {#each trimmed as arr}
                            <tr class="select-none">
                                {#each arr as element}
                                    <td
                                        class="p-4 px-2 whitespace-nowrap font-medium"
                                    >
                                        {element}
                                    </td>
                                {/each}
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
        {:else}
            <h1 class="title text-2xl text-center font-semibold py-4">
                No Data Yet
            </h1>
        {/if}
        <slot name="footer" />
    </div>
</div>
