function rnd_btw(a, b) {
    return fxrand() * (b - a) + a
}
function rnd_btwexp(a, b) {
    return fxrand() ** 2 * (b - a) + a
}
function rnd_int(a, b) {
    return a = Math.ceil(a),
        b = Math.floor(b),
        Math.floor(fxrand() * (b - a + 1)) + a
}


let turbulence = rnd_btw(0.1, 1);
let fractalDepth = rnd_int(2, 6);
let smokeSpeed = rnd_btw(0.1, 0.5);

voronoi(turbulence, 0.3, 0.1)
  .mult(osc(rnd_int(10, 50), smokeSpeed).rotate(rnd_btw(0, Math.PI)))
  .kaleid(fractalDepth)
  .modulate(
    noise(rnd_btw(1, 5), rnd_btw(0.1, 0.5)),
    rnd_btw(0.1, 0.5)
  )
  .color(rnd_btw(0.5, 1), rnd_btw(0.5, 1), rnd_btw(0.5, 1))
  .blend(o0, 0.9)
  .out(o0)