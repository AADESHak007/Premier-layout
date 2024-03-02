let tl =gsap.timeline()
tl.from("#main #nav",{
    y:-50,
    duration:2,
    delay:0.3,
    opacity:0,
    scale:1
})
tl.from("#nav h1",{
    y:-50,
    duration:2,
    delay:0.3,
    opacity:0,
    scale:1
})