/* eslint-disable fp/no-mutation */
import { ColorMode } from '@chakra-ui/react'
import { createNoise3D } from 'simplex-noise'

const noise3D = createNoise3D()

type Layer = {
  id: number
  progress: number
  color: string
}

export class Animation {
  config
  timestamp = 0

  canvas
  ctx
  shadowCanvas
  shadowCtx
  wWidth = 0
  wHeight = 0
  wCenterX = 0
  wCenterY = 0
  wHypot = 0
  wMin = 0
  angle = Math.PI * 0.25
  layers: Layer[] = []

  constructor(canvas: HTMLCanvasElement, colorMode: ColorMode) {
    this.config = {
      colorSchema:
        colorMode === 'light'
          ? ['#F7FAFC', '#EDF2F7', '#FFFFFF']
          : ['#2D3748', '#1A202C', '#000000'],
      numOfLayers: 8,
    }

    this.canvas = canvas
    this.ctx = this.canvas.getContext('2d')

    this.shadowCanvas = document.createElement('canvas')
    this.shadowCtx = this.shadowCanvas.getContext('2d')

    this.setUpVars()
    this.setUpListeners()
    this.update()
  }

  setUpVars() {
    this.canvas.width =
      this.shadowCanvas.width =
      this.wWidth =
        window.innerWidth

    this.canvas.height =
      this.shadowCanvas.height =
      this.wHeight =
        window.innerHeight

    this.wCenterX = this.wWidth / 2
    this.wCenterY = this.wHeight / 2
    this.wHypot = Math.hypot(this.wWidth, this.wHeight)
    this.wMin = Math.min(this.wWidth, this.wHeight)

    this.layers = this.getLayers()
  }

  getLayers() {
    const layers = []
    let currColorId = 0

    for (let lid = 0; lid <= this.config.numOfLayers; lid++) {
      layers.push({
        id: lid, // used for noise offset
        progress: 1 - lid / this.config.numOfLayers,
        color: this.config.colorSchema[currColorId],
      })

      currColorId++

      if (currColorId >= this.config.colorSchema.length) {
        currColorId = 0
      }
    }

    return layers
  }

  setUpListeners() {
    window.addEventListener('resize', this.setUpVars.bind(this))
  }

  drawLayer(ctx: CanvasRenderingContext2D, layer: Layer) {
    const segmentBaseSize = 20
    const segmentCount = Math.round(this.wHypot / segmentBaseSize)
    const segmentSize = this.wHypot / segmentCount
    const waveAmplitude = segmentSize * 4
    const noiseZoom = 0.03

    ctx.save()
    ctx.translate(this.wCenterX, this.wCenterY)
    ctx.rotate(Math.sin(this.angle))

    ctx.beginPath()
    ctx.moveTo(-this.wHypot / 2, this.wHypot / 2 - this.wHypot * layer.progress)
    ctx.lineTo(-this.wHypot / 2, this.wHypot / 2)
    ctx.lineTo(this.wHypot / 2, this.wHypot / 2)
    ctx.lineTo(this.wHypot / 2, this.wHypot / 2 - this.wHypot * layer.progress)

    for (let sid = 1; sid <= segmentCount; sid++) {
      const n = noise3D(
        sid * noiseZoom,
        sid * noiseZoom,
        layer.id + this.timestamp
      )

      const heightOffset = n * waveAmplitude

      ctx.lineTo(
        this.wHypot / 2 - sid * segmentSize,
        this.wHypot / 2 - this.wHypot * layer.progress + heightOffset
      )
    }

    ctx.closePath()
    ctx.fillStyle = layer.color
    ctx.fill()
    ctx.restore()
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save()
    ctx.fillRect(0, 0, this.wWidth, this.wHeight)
    ctx.restore()

    this.layers.forEach(layer => this.drawLayer(ctx, layer))
  }

  update(t?: number) {
    if (t) {
      let shiftNeeded = false
      this.timestamp = t / 5000
      this.angle += 0.001

      this.layers.forEach(layer => {
        layer.progress += 0.00001

        if (layer.progress > 1 + 1 / (this.layers.length - 1)) {
          layer.progress = 0
          shiftNeeded = true
        }
      })

      if (shiftNeeded) {
        const shifted = this.layers.shift()
        if (shifted) this.layers.push(shifted)
      }

      if (this.shadowCtx) this.draw(this.shadowCtx)
    }

    this.ctx?.clearRect(0, 0, this.wWidth, this.wHeight)
    this.ctx?.drawImage(this.shadowCanvas, 0, 0)

    window.requestAnimationFrame(this.update.bind(this))
  }
}
