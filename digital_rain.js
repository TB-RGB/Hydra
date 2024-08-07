shape(3, 0.5)
  .repeat(20, 10)
  .scale(1, () => (Math.sin(time*0.5)*0.5 + 1)*2)
  .scrollY(0.5, 0.1)
  .pixelate(50, 50)
  .color(0, 1, 0.5)
  .out(o0)

  osc(10, 0.1, 1.2)
  .color(0.8, 0.8, 0.5)
  .diff(osc(20, 0.1, 1).rotate(0.1))
  .pixelate(20, 20)
  .modulate(noise(3))
  .colorama(0.0003)
  .out(o1)

  src(o1).diff(src(o1).modulateScrollY(src(o1))).out(o2)

  src(o2)
  .diff(src(o2).modulate(src(o0)))
  .modulate(osc(10, 0.1, 1).modulateRotate(voronoi(0.1)))
  .out(o3)

  render()