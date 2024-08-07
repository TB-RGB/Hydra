src(o0)
  .scale(1.01)
  .rotate(0.01)
  .pixelate(40, 40)
  .blend(
    osc(10, 0.05, 1)
      .hue(() => Math.sin(time*0.4)*0.5)
      .pixelate(20, 20),
    () => a.fft[3]
  )
  .modulate(noise(0.08), ()=>a.fft[3])
  .out(o0)

src(o0)
  .scale(1.01)
  .rotate(0.01)
  .pixelate(40, 40)
  .blend(
    osc(10, 0.1, 1)
      .hue(() => Math.sin(time*0.1)*0.5)
      .pixelate(20, 20),
      () => a.fft[3]
  )
  .out(o1)

src(o1)
  .scale(1.01)
  .rotate(0.01)
  .pixelate(40, 40)
  .blend(
    osc(10, 0.1, 1)
      .hue(() => Math.sin(time*0.1)*0.5)
      .pixelate(20, 20),
      () => a.fft[3]
  )
  .out(o2)

src(o2)
  .scale(1.01)
  .rotate(0.01)
  .pixelate(40, 40)
  .blend(
    osc(10, 0.1, 1)
      .hue(() => Math.sin(time*0.1)*0.5)
      .pixelate(20, 20),
      () => a.fft[3]
  )
  .out(o3)

  render(o0)