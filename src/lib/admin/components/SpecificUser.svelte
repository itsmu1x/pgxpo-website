<script lang="ts">
    import outside from "$lib/outside"
    import Icon from "@iconify/svelte"
    import cn from "$lib/cn"
    import Btn from "./Btn.svelte"

    export let show: boolean
    export let close: () => void
    export let submit: (this: HTMLFormElement) => any
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
            <h1 class="text-xl">Select a user</h1>

            <button class="text-red-600" aria-label="Close" on:click={close}>
                <Icon icon="mingcute:close-fill" width="24" height="24" />
            </button>
        </div>

        <hr class="my-4 sideborder" />

        <form on:submit|preventDefault={submit} class="flex flex-col gap-6">
            <div>
                <label class="mb-1 block text-lg" for="discord_id">
                    IGN / DiscordID
                </label>

                <input
                    id="discord_id"
                    class="w-full py-2 px-4 bg-black/20 focus:bg-black/40 rounded-lg outline-none"
                    name="term"
                    placeholder="IGN / DiscordID"
                    type="text"
                    required
                />
            </div>

            <div>
                <Btn class="w-full disabled:cursor-not-allowed" text="Select">
                    Select
                </Btn>
            </div>
        </form>
    </div>
</div>
