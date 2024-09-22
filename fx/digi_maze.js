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
function rnd_shade() {
    shd = ["light", "dark"];
    return shd[Math.floor(fxrand() * shd.length)];
}

let glitchAmount = rnd_btw(0.1, 0.5);
let mazeSize = rnd_int(5, 20);
let colorOffset = rnd_btw(0, 1);

shape(mazeSize, 0.3, 0.001)
  .repeat(mazeSize, mazeSize)
  .modulate(
    noise(rnd_btw(1, 5), rnd_btw(0.1, 0.5)),
    glitchAmount
  )
  .scrollX(0.1, 0.01)
  .scrollY(0.1, -0.01)
  .color(colorOffset, colorOffset / 0.2, colorOffset + 0.4)
  .invert(rnd_shade() == "light" ? rnd_btw(0, 0.5) : rnd_btw(0.5, 1))
  .blend(o0, 0.8)
  .out(o0)