<script>
    import Icon from "@iconify/svelte"
</script>

<div class="border bg-lightbody dark:bg-darkerblue py-4 rounded-xl w-48">
    <ul class="flex flex-col">
        <li>
            <a
                class="flex p-2 px-4 items-center gap-2 text-md font-semibold duration-300 hover:bg-darkbody/25 hover:dark:bg-lightbody/25 hover:text-lightyellow"
                href="/dashboard"
            >
                <Icon icon="fluent:person-24-filled" width="24" height="24" />
                Dashboard
            </a>
        </li>

        <li>
            <a
                class="flex p-2 px-4 items-center gap-2 text-md font-semibold duration-300 hover:bg-darkbody/25 hover:dark:bg-lightbody/25 hover:text-lightyellow"
                href="/dashboard/store"
            >
                <Icon icon="fa6-solid:store" width="24" height="24" />
                Store
            </a>
        </li>

        <li>
            <a
                class="flex p-2 px-4 text-red-500 items-center gap-2 text-md font-semibold duration-300 hover:bg-darkbody/25 hover:dark:bg-lightbody/25"
                href="/auth/logout"
            >
                <Icon icon="solar:logout-2-bold" width="24" height="24" />
                Logout
            </a>
        </li>
    </ul>
</div>
