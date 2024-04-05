<script lang="ts">
    import type { PageData } from "./$types"
    import { tooltip } from "@svelte-plugins/tooltips"
    import Icon from "@iconify/svelte"
    import { paginate } from "$lib/utilities"
    import Pagination from "$lib/admin/components/Pagination.svelte"

    export let data: PageData
    let page = 1

    const ROWS = 6
    $: pages = Math.ceil(data.sessions.length / ROWS)
    $: trimmed = paginate(data.sessions, ROWS, page)

    const go = (newPage: number) => {
        if (newPage <= pages && newPage > 0) {
            page = newPage
        }
    }

    const style = { backgroundColor: "green" } as any as undefined // ik weird, cuz the tooltip lib sucks
</script>

<div class="flex gap-4 justify-center">
    <div
        class="w-full lg:w-8/12 mx-auto sidebg shadow-lg rounded-xl border sideborder text overflow-hidden"
    >
        <header class="px-5 py-4 flex justify-between border-b sideborder">
            <h2 class="text-xl font-semibold">Account login activity</h2>
        </header>
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
                                OperatingSystem
                            </div>
                        </th>
                        <th class="p-2.5 whitespace-nowrap">
                            <div
                                class="flex gap-2 items-center font-semibold text-start"
                            >
                                Browser
                            </div>
                        </th>

                        <th class="p-2.5 whitespace-nowrap">
                            <div
                                class="flex gap-2 items-center font-semibold text-start"
                            >
                                Location
                            </div>
                        </th>

                        <th
                            class="p-2.5 whitespace-nowrap rounded-be-lg rounded-te-lg"
                        >
                            <div
                                class="flex gap-2 items-center font-semibold text-start"
                            >
                                Actions
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody class="text-md divide-y sidedivide">
                    {#each trimmed as session}
                        <tr>
                            <td
                                class="flex items-center gap-2 p-4 px-2 whitespace-nowrap font-medium"
                            >
                                {#if session.isCurrent}
                                    <span
                                        aria-label="Active Session"
                                        title="Active Session"
                                        use:tooltip={{
                                            action: "hover",
                                            style,
                                        }}
                                    >
                                        <Icon
                                            class="text-green-700 dark:text-green-500"
                                            icon="svg-spinners:wifi-fade"
                                            width="16"
                                            height="16"
                                        />
                                    </span>
                                {/if}
                                {session.os}
                            </td>
                            <td class="p-4 px-2 whitespace-nowrap font-medium">
                                {session.browser}
                            </td>
                            <td class="p-4 px-2 whitespace-nowrap font-medium">
                                {session.location ?? "Unknown"}
                            </td>

                            <td class="p-4 px-2 whitespace-nowrap font-medium">
                                <button
                                    aria-label="Logout"
                                    class="px-4 py-2 rounded-lg text-sm duration-300 font-semibold border border-red-500 hover:text-white hover:bg-red-500"
                                >
                                    Logout
                                </button>
                            </td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>
        <footer class="p-3 flex justify-between border-t sideborder">
            <Pagination
                next={() => go(page + 1)}
                previous={() => go(page - 1)}
                {page}
                {pages}
            />

            <button
                class="px-4 py-2 outline-none rounded-lg text-sm font-semibold border border-red-500 hover:bg-red-500 hover:text-white duration-300"
                aria-label="Logout from all sessions"
            >
                Logout from all
            </button>
        </footer>
    </div>
</div>
