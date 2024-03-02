<script lang="ts">
    import { onMount } from "svelte";
    import { Point, delay} from "$lib/bganim";
    let points: Point[] = []
    Point.height = window.innerHeight
    Point.width = window.innerHeight

    onMount(async () => {
        points = new Array(256).fill(new Point())

        for(;;) {
            for (let point of points) {
                point.cycle()
            }
            await delay(16)
        }
    })

</script>

<div id="container">
    <svg id="background" width="{window.innerWidth}" height="{window.innerHeight}">
        {#each points as point}
            <circle r="2" cx="{point.x}" cy="{point.y}" fill="orange"/>
        {/each}
    </svg>
</div>

<style>
    #container {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }

    #background {
        background-color: black;
        width: 100%;
        height: 100%;
    }
</style>
