function rnd_btw(a, b) {
  return fxrand() * (b - a) + a;
}
function rnd_btwexp(a, b) {
  return fxrand() ** 2 * (b - a) + a;
}
function rnd_int(a, b) {
  return (
    (a = Math.ceil(a)),
    (b = Math.floor(b)),
    Math.floor(fxrand() * (b - a + 1)) + a
  );
}

let dropSpeed = rnd_btw(0.1, 0.5);
let dropSize = rnd_int(10, 40);
let oscCol = rnd_btw(1.12, 1.99);
let colorIntensity = rnd_btw(0.5, 1);

osc(dropSize, dropSpeed, oscCol)
  .luma(rnd_btw(0.2, 0.6))
  .color(colorIntensity + 0.63, colorIntensity, colorIntensity * 1.5)
  .scrollY(1, 0.1)
  .modulateScale(noise(rnd_btw(1, 5)).pixelate(4, 30), rnd_btw(0.1, 0.5))
  .mult(o0, 0.8)
  .modulateScrollX(
    noise(rnd_btw(0.1, 0.5)).modulateRepeatX(
      voronoi(2).modulateScale(osc(20), 0.05),
      0.1
    )
  )
  .out(o0);

src(o0)
  .modulateScale(osc(20).modulatePixelate(noise(0.4), 2), 0.2)
  .modulate(voronoi(1))
  .out(o1);

render(o1);
