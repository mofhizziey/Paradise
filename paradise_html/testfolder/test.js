let anim=gsap.timeline()



anim.from('.animation div',{
    delay:.5,
    y:-50,
    duration:2, 
    opacity:0,
    stagger:.3, 
    ease:'back.out(5)'

},)
anim.to('.animation  div',{
    duration:.5,
    textShadow: '-2px -2px 5px  rgba(17, 131, 224, 0.349), 4px 4px 7px   rgba(83, 83, 83, 0.595)',
    color:'white',
    stagger:0.3
},'-=1')


