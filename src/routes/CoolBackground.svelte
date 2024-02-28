<script lang="ts">
    import { onMount } from "svelte";
    import { Point, delay, drawEveryPoint } from "$lib/bganim";
    let canvas: HTMLCanvasElement

    onMount(async () => {
        const canvasCtx = canvas.getContext("2d")!

        canvasCtx.fillStyle = "#000"
        canvasCtx.fillRect(0, 0, canvas.width, canvas.height)

        let points: Point[] = []
        for(let i = 0; i < 256; i++) {
            points.push(new Point())
        }

        for(;;) {
            canvasCtx.fillStyle = "#000"
            canvasCtx.fillRect(0, 0, canvas.width, canvas.height)
            canvasCtx.fillStyle = "#ff8000"
            drawEveryPoint(points, canvasCtx)
            await delay(16)
        }
    })

</script>

<div id="container">
    <canvas bind:this={canvas}/>
</div>

<style>
    #container {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }

    canvas {
        width: 100%;
        height: 100%;
    }
</style>
