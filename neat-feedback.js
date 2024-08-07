
osc(10, 0.1, 1.2)
  .color(0.8, 0.3, 0.9)
  .rotate(0.1, 0.1)
  .modulate(noise(3))
  .out(o0)

src(o0)
  .scale(1.01)
  .rotate(0.01)
  .pixelate(50, 50)
  .blend(o0, 0.9)
  .modulate(
    noise(2).add(solid(1,1,1), 0.1),
    0.01
  )
  .hue(0.01)
  .out(o0)
