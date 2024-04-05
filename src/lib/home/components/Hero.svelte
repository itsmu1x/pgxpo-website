<script lang="ts">
    import hero from "$lib/home/assets/imgs/hero.png"
    import hero400 from "$lib/home/assets/imgs/hero/hero-400w.avif"
    import hero600 from "$lib/home/assets/imgs/hero/hero-600w.avif"
    import hero800 from "$lib/home/assets/imgs/hero/hero-800w.avif"
    import hero1000 from "$lib/home/assets/imgs/hero/hero-1000w.avif"

    export let longText: string
    export let shortText: string
</script>

<div class="flex flex-col lg:flex-row items-center justify-center gap-5">
    <div class="w-full md:w-10/12 lg:w-1/2">
        <h1
            class="txt text-2xl lg:text-6xl md:text-4xl font-bold lg:leading-[72px] mb-4"
        >
            {longText}
        </h1>
        <p class="txt">{shortText}</p>
    </div>
    <div class="w-full md:w-9/12 lg:w-1/2">
        <img
            class="aspect-video"
            srcset="{hero400} 400w, {hero600} 600w, {hero800} 800w, {hero1000} 1000w"
            sizes="(max-width: 400px) 400px, (max-width: 600px) 600px, (max-width: 800px) 800px, (min-width: 801px) 1000px"
            src={hero}
            alt="Hero"
            width="600"
            height="300"
        />
    </div>
</div>
