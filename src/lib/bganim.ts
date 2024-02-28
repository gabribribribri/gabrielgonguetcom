export class Point {
    static width: number
    static height: number

    x: number
    y: number

    xDeriv: number
    yDeriv: number

    repetition: number

    constructor() {
        this.x = randomBetween(0, Point.width)
        this.y = randomBetween(0, Point.height)
        this.xDeriv = randomBetween(5, 20)
        this.yDeriv = randomBetween(5, 20)
        this.repetition = randomBetween(100, 1000)
    }

    assignDeriv() {
        this.xDeriv = randomBetween(5, 20)
        this.yDeriv = randomBetween(5, 20)
        this.repetition = randomBetween(100, 1000)
    }

    cycle() {
        this.repetition--
        if (this.repetition == 0) {
            this.assignDeriv()
        }
        this.move()
    }

    move() {
        this.x += this.xDeriv
        this.y += this.yDeriv

        if (this.x < 0) {
            this.x += Point.width
        } else if (this.x > Point.width) {
            this.x -= Point.width
        }

        if (this.y < 0) {
            this.y += Point.height
        } else if (this.x > Point.width) {
            this.y -= Point.height
        }
    }
}

function randomBetween(min: number, max: number): number {
    return Math.floor(min + Math.random() * (max - min + 1));
}

export async function drawEveryPoint(points: Point[], canvasCtx: CanvasRenderingContext2D) {
    for (let point of points) {
        canvasCtx.beginPath()
        canvasCtx.arc(point.x, point.y, 5, 0, 2*Math.PI)
        canvasCtx.fill()
    }
}

export function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
