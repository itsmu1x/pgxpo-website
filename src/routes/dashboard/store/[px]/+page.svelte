<script lang="ts">
    import type { PageData } from "./$types"

    import { toast } from "$lib/toast"
    import Icon from "@iconify/svelte"

    export let data: PageData

    async function submit(
        event: SubmitEvent & {
            currentTarget: EventTarget & HTMLFormElement
        }
    ) {
        // cuz this is for demo purposes.. ig?
        event.preventDefault()
        toast.error({ title: "you have been redirected to paypal.. wow" })

        // const data = new FormData(event.currentTarget)

        // const response = await fetch(event.currentTarget.action, {
        //     method: "POST",
        //     body: data,
        // })

        // const result = deserialize(await response.text()) as ActionResult

        // if (result.type === "failure") {
        //     toast.error({
        //         title: result.data?.message ?? "Could not create the payment",
        //     })
        // }

        // applyAction(result)
    }
</script>

<div
    class="flex flex-col items-center md:items-start md:flex-row gap-4 md:justify-center text-darkbody dark:text-lightbody"
>
    <div class="sidebg p-4 rounded-lg w-full lg:w-80">
        <img
            class="w-72 lg:w-full h-auto mb-2 mx-auto"
            width="313"
            height="206"
            src={data.card.image}
            alt={`${data.card.px} px card`}
        />

        <h1
            class="title text-center uppercase text-orange-400 text-xl lg:text-2xl font-semibold"
        >
            {data.card.px} PX Card
        </h1>

        <hr class="my-4 sideborder" />

        <div
            class="text-start mx-auto space-y-2 text-sm text-darkbody/60 dark:text-lightbody/60 font-medium"
        >
            <p>
                <strong>●</strong> The <strong>amount</strong>{" "}
                cannot be <strong>refunded</strong> if the purchase has been
                <strong>made</strong>
            </p>
            <p>
                <strong>●</strong> <strong>Chargebacks</strong>{" "}
                result in a network <strong>blacklist</strong>.
            </p>
            <p>
                <strong>●</strong> If you{" "}
                <strong>encounter</strong> any problem, you can contact the
                <strong>administrators</strong>
                via our <strong>discord</strong>
            </p>
            <p>
                <strong>●</strong> <strong>NOTE</strong>: We will send you the
                card <strong>code</strong> via{" "}
                <strong>email</strong>.
            </p>
        </div>
    </div>

    <div class="sidebg p-4 rounded-lg w-full lg:w-5/12">
        <div class="flex items-center justify-between">
            <h1
                class="title text-start uppercase text-xl lg:text-2xl text-orange-400 font-semibold"
            >
                Checkout
            </h1>

            <a
                href="/dashboard/store"
                aria-label="Go back"
                class="title text-start uppercase text-lg lg:text-xl font-semibold"
            >
                <Icon
                    class="text-red-500"
                    icon="icon-park-outline:close-small"
                    width="24"
                    height="24"
                />
            </a>
        </div>

        <div class="flex flex-col gap-2 mt-6 uppercase font-semibold text-sm">
            <div class="flex items-center justify-between">
                <span> Item </span>
                <span>{data.card.px} PX Card</span>
            </div>

            <div class="flex items-center justify-between">
                <span> Subtotal </span>
                <span>${data.card.cost.toFixed(2)}</span>
            </div>

            <div class="flex items-center justify-between">
                <span> Shipping </span>
                <span>no shipping</span>
            </div>

            <div class="flex items-center justify-between">
                <span> Tax </span>
                <span>{data.card.tax * 100}%</span>
            </div>
        </div>

        <hr class="sideborder my-4" />

        <div
            class="flex items-center justify-between uppercase text-md mb-4 font-semibold"
        >
            <span> total </span>
            <span
                >${(data.card.tax * data.card.cost + data.card.cost).toFixed(
                    2
                )}</span
            >
        </div>

        <form
            method="POST"
            action="?/checkout"
            on:submit|preventDefault={submit}
        >
            <input
                name="px"
                type="number"
                value={data.card.px}
                class="hidden"
            />

            <button
                class="w-full relative uppercase before:top-0 before:absolute before:h-full before:w-0 before:bg-lighterblue before:duration-300 overflow-hidden before:start-0 hover:before:w-full font-semibold rounded-full px-4 py-2.5 bg-lightblue"
            >
                <span
                    class="relative flex items-center gap-1 justify-center text-white"
                >
                    <Icon icon="fa:paypal" width="16" height="16" />

                    Purchase
                </span>
            </button>
        </form>
    </div>
</div>
