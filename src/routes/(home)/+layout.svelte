<script lang="ts">
    import "$lib/home/styles.css"
    import Footer from "$lib/home/components/Footer.svelte"
    import Header from "$lib/home/components/Header.svelte"
</script>

<div
    class="min-h-[100dvh] bg-lightbody text-darkbody dark:text-white dark:bg-darkbody transition-colors duration-300"
>
    <Header />
    <div class="container mx-auto px-6 pt-32 md:pt-48">
        <slot />
    </div>
    <Footer />
</div>
