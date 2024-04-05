<script lang="ts">
    import { onMount } from "svelte"
    import { slide } from "svelte/transition"
    import { page } from "$app/stores"
    import Nav from "./Nav.svelte"
    import cn from "$lib/cn"
    import Icon from "@iconify/svelte"
    import Hamburger from "./Hamburger.svelte"
    import Login from "./Login.svelte"
    import MyProfile from "./MyProfile.svelte"
    import outside from "$lib/outside"
    import DashNav from "./DashNav.svelte"

    let sticky: boolean = false
    let opened: boolean = false
    let dash: boolean = false
    let dashmobile: boolean = false

    const NAVS = [
        {
            name: "Home",
            href: "/",
        },
        {
            name: "Rules",
            href: "/rules",
        },
        {
            name: "Leaderboard",
            href: "/leaderboard",
        },
    ]

    const darkmodize = async () => {
        try {
            // const { data } = await axios.patch("/auth/darkmode")
            // if (data && "mode" in data && typeof data.mode === "boolean") {
            //     $darkmode = data.mode
            //     document.documentElement.classList.toggle("light", !data.mode)
            //     document.documentElement.classList.toggle("dark", data.mode)
            // }
        } catch {}
    }

    onMount(() => {
        const handler = () => {
            sticky = window.scrollY >= 32
        }

        sticky = window.scrollY >= 32
        document.addEventListener("scroll", handler)
        return () => document.removeEventListener("scroll", handler)
    })
</script>

<header class="fixed top-0 w-full z-10 shadow-lg">
    <nav
        class={cn(
            "py-2 duration-300 dark:bg-darkblue md:dark:bg-darkbody bg-lightbody border-b border-gray-200 dark:border-gray-800",
            {
                "md:dark:bg-darkblue": sticky,
            }
        )}
    >
        <div
            class="container px-6 mx-auto h-full flex justify-between p-2 items-center"
        >
            <div class="flex gap-12">
                <a href="/" aria-label="PGxPO">
                    <img
                        width="48"
                        height="48"
                        class="aspect-square"
                        src="https://cdn.discordapp.com/avatars/1039647323111829504/12be9304822c2a7e0775da178abd12d1.png?size=48&ignore=true"
                        alt="PGxPO"
                    />
                </a>

                <ul class="hidden md:flex gap-8 items-center">
                    {#each NAVS as nav (nav.name)}
                        <Nav
                            {...nav}
                            active={$page.url.pathname === nav.href}
                        />
                    {/each}
                </ul>
            </div>

            <div
                class="relative flex gap-4 items-center"
                use:outside
                on:outside={() => (dash = false)}
            >
                <button
                    class="hidden md:inline"
                    on:click={darkmodize}
                    aria-label="DarkMode Change"
                >
                    <Icon
                        icon="material-symbols-light:clear-night"
                        width="32"
                        height="32"
                    />
                </button>

                <MyProfile
                    profileClick={() => (dash = !dash)}
                    class="hidden md:inline"
                />

                <Hamburger clicked={() => (opened = !opened)} />

                {#if dash}
                    <div class="hidden md:block absolute top-14 -end-4">
                        <DashNav />
                    </div>
                {/if}
            </div>
        </div>

        {#if opened}
            <div
                class={cn(
                    "md:hidden dark:bg-darkblue md:dark:bg-darkbody bg-lightbody duration-300",
                    {
                        "dark:bg-darkblue": sticky,
                    }
                )}
            >
                <div transition:slide class="container mx-auto p-6">
                    <ul class="flex flex-col gap-4">
                        {#each NAVS as nav (nav.name)}
                            <Nav
                                {...nav}
                                active={$page.url.pathname === nav.href}
                            />
                        {/each}
                    </ul>

                    <div
                        class="mt-6 relative flex items-center gap-4"
                        use:outside
                        on:outside={() => (dashmobile = false)}
                    >
                        <MyProfile
                            profileClick={() => (dashmobile = !dashmobile)}
                        />

                        <button
                            class="md:hidden"
                            aria-label="DarkMode Change"
                            on:click={darkmodize}
                        >
                            <Icon
                                icon="material-symbols-light:clear-night"
                                width="32"
                                height="32"
                            />
                        </button>

                        {#if dashmobile}
                            <div
                                class="block md:hidden absolute top-14 -start-4"
                            >
                                <DashNav />
                            </div>
                        {/if}
                    </div>
                </div>
            </div>
        {/if}
    </nav>
</header>
