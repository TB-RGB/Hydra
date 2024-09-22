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

let speed = rnd_btw(0.1, 0.5);
let scale = rnd_int(10, 50);
let colorShift = rnd_btw(0.5, 1);
let feedbackIntensity = rnd_btw(0.1, 0.9);

osc(scale, speed, 0)
  .color(
    colorShift + speed,
    colorShift - rnd_btw(0.1, 0.5),
    colorShift * speed * 2
  )
  .kaleid(rnd_int(3, 8))
  .pixelate(rnd_int(20, 100), rnd_int(20, 100))
  .modulate(noise(rnd_btw(1, 5)).pixelate(10, 10), rnd_btw(0.1, 0.5))
  .blend(o0, feedbackIntensity)
  .out(o0);

src(o0)
  .modulate(noise(0.8).modulateScale(osc(10)))
  .diff(src(o0).modulatePixelate(voronoi(1)), 0.01)
  .out(o1);

src(o1)
  .mask(shape(3, 0.5).repeat(6).modulateScale(osc(30)))
  .mask(src(o0))
  .out(o2);

osc(20, 0.2, 1.83).mult(src(o2)).out(o3);

render(o3);
