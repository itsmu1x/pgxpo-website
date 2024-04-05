<script lang="ts">
    import type { SubmitFunction } from "@sveltejs/kit"
    import { enhance } from "$app/forms"
    import outside from "$lib/outside"
    import Btn from "./Btn.svelte"
    import Icon from "@iconify/svelte"
    import cn from "$lib/cn"

    let loading: boolean = false
    const enhanceHandler: SubmitFunction = async () => {
        loading = true
        return async (opt) => {
            loading = false
            await opt.update()
        }
    }

    export let show: boolean
    export let hasOpenedTicket: boolean
    export let close: () => void
    export let categories: { name: string }[]
</script>

<div
    class={cn(
        "fixed top-0 start-0 p-4 z-50 w-full min-h-dvh grid place-items-center bg-black/40 backdrop-blur-sm",
        {
            hidden: !show,
        }
    )}
>
    <div
        class="sidebg p-6 rounded-xl w-full max-w-xl text-black dark:text-white"
        use:outside
        on:outside={close}
    >
        <div class="flex justify-between">
            <h1 class="text-xl">Create ticket</h1>

            <button class="text-red-600" aria-label="Close" on:click={close}>
                <Icon icon="mingcute:close-fill" width="24" height="24" />
            </button>
        </div>

        <hr class="my-4 sideborder" />

        <form
            method="POST"
            action="?/create_ticket"
            class="flex flex-col gap-6"
            use:enhance={enhanceHandler}
        >
            <div>
                <label class="mb-1 block text-lg" for="ticket_title">
                    Title
                </label>
                <input
                    id="ticket_title"
                    class="w-full py-2 px-4 bg-black/20 focus:bg-black/40 rounded-lg outline-none"
                    name="title"
                    placeholder="Ticket Title"
                    type="text"
                />
            </div>

            <div>
                <label class="mb-1 block text-lg" for="ticket_category">
                    Ticket Category
                </label>
                <select
                    id="ticket_category"
                    class="py-3 px-4 pe-9 block bg-black/20 focus:bg-black/40 w-full rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
                    name="category"
                >
                    <option selected value="">Select a category</option>
                    {#each categories as category (category.name)}
                        <option value={category.name}>{category.name}</option>
                    {/each}
                </select>
            </div>

            <div>
                <label class="mb-1 block text-lg" for="ticket_message">
                    Ticket Message
                </label>
                <textarea
                    class="w-full py-2 px-4 bg-black/20 focus:bg-black/40 rounded-lg outline-none"
                    name="message"
                    id="ticket_message"
                    cols="30"
                    rows="10"
                />
            </div>

            <div>
                <Btn
                    disabled={loading || hasOpenedTicket}
                    class="w-full disabled:cursor-not-allowed"
                    text="Create Ticket"
                >
                    {#if loading}
                        <Icon
                            icon="eos-icons:bubble-loading"
                            width="24"
                            height="24"
                            class="mx-auto"
                        />
                    {:else}
                        Create Ticket
                    {/if}
                </Btn>
            </div>
        </form>
    </div>
</div>
