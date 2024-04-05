<script lang="ts">
    import outside from "$lib/outside"
    import Icon from "@iconify/svelte"
    import cn from "$lib/cn"
    import Btn from "./Btn.svelte"
    import { enhance } from "$app/forms"
    import type { SubmitFunction } from "@sveltejs/kit"

    export let show: boolean
    export let close: () => void

    const uwu: SubmitFunction = async () => {
        return async (ctx) => {
            close()
            await ctx.update()
        }
    }
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
        use:outside
        on:outside={close}
        class="sidebg p-6 rounded-xl w-full max-w-xl text-black dark:text-white"
    >
        <div class="flex justify-between">
            <h1 class="text-xl">Create Category</h1>

            <button class="text-red-600" aria-label="Close" on:click={close}>
                <Icon icon="mingcute:close-fill" width="24" height="24" />
            </button>
        </div>

        <hr class="my-4 sideborder" />

        <form
            method="POST"
            action="/dashboard/tickets?/create_category"
            class="flex flex-col gap-6"
            use:enhance={uwu}
        >
            <div>
                <label class="mb-1 block text-lg" for="ticket_category">
                    Category
                </label>

                <input
                    id="ticket_category"
                    class="w-full py-2 px-4 bg-black/20 focus:bg-black/40 rounded-lg outline-none"
                    name="category"
                    placeholder="Ticket category"
                    type="text"
                    required
                />
            </div>

            <div>
                <label class="mb-1 block text-lg" for="ticket_permission">
                    Permission
                </label>

                <input
                    id="ticket_permission"
                    class="w-full py-2 px-4 bg-black/20 focus:bg-black/40 rounded-lg outline-none"
                    name="permission"
                    placeholder="Ticket permission"
                    type="text"
                />
            </div>

            <div>
                <Btn
                    class="w-full disabled:cursor-not-allowed"
                    text="Create Category"
                >
                    Create Category
                </Btn>
            </div>
        </form>
    </div>
</div>
