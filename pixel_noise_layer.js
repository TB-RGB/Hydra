osc(10, 0.1, 1.2)
  .color(0.8, 0.4, 0.9)
  .diff(osc(20, 0.1, 1).rotate(0.1))
  .pixelate(20, 20)
  .modulate(noise(3).modulate(osc(10, 0.1, 1).rotate(0.1)))
  .colorama(() => a.fft[0])
  .out(o0);

noise(3, 0.2, 1.2).modulate(osc(10, 0.1, 1).rotate(0.1)).out(o1);

src(o0).modulateScrollX(src(o1)).out(o2);

src(o2)
  .diff(src(o2).rotate(0.1))
  .modulate(osc(10, 0.1, 1).modulateRotate(voronoi(0.1)))
  .out(o3);

render();
