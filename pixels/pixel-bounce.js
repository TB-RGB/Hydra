shape(4, 0.9)
  .repeat(10, 5)
  .modulateScale(osc(8, 0.5))
  .pixelate(
    () => Math.sin(time) * 20 + 30,
    () => Math.sin(time) * 20 + 30
  )
  .scrollX(0.1)
  .scrollY(0.1)
  .out(o0);

osc(10, 0.5, 1.83)
  .modulate(src(o0).diff(src(o0).modulateRotate(noise(0.4))))
  .out(o1);

src(o1).mask(src(o0).modulateScale(noise(0.4))).out(o2);

s3.initCam()
src(s3)
  .saturate(2)
  .layer(src(o3).mask(shape(4, 2).scale(0.5, 0.7).scrollX(0.25)).scrollX(0.001))
  .modulate(o2, 0.01)
  .out(o3)

render(o3);
