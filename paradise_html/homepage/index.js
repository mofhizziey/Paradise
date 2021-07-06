/** gsap plugins */
let intro=gsap.timeline()

/**brand message animation */
let anim=gsap.timeline()


anim.from('.animation div',{
    delay:.5,
    x:-20,
    duration:1, 
    opacity:0,
    stagger:.3, 
    ease:'back.out(1)',
    trigger:'#summary'    
},)
anim.to('#summary .dark-bg',{
    duration:2,
    height:0,
    opacity:0,
    trigger:'#summary'    
    
})
anim.to('.animation  div',{
    duration:.5,
    textShadow: '-2px -2px 5px  rgba(17, 131, 224, 0.349), 4px 4px 7px   rgba(83, 83, 83, 0.595)',
    trigger:'#summary',    
    stagger:0.3,

},'-=1')




intro.from('#intro .container-fluid',{
    duration:2,

    opacity:0
})
intro.from('#intro span:first-child',{
    duration:1,
    x:-30,
    opacity:0,
    delay:1,
    ease:'back.out(2)'
    
},'-=1')
intro.from('#intro .brand-name',{
    duration:2,
    y:-30,
    opacity:0,
    ease:'back.out(2)'
})
intro.from('#intro .brand-name div',{
    duration:2,
    opacity:0,
     x:50,
    ease:'back.out(2)'
},'-=1')
intro.from('.intro-img',{
    duration:2,
   filter:'blur(10px)',
    opacity:0,
    
},"-=1")
intro.from('#intro  .btn',{
    duration:2,
    opacity:0,
   
})
intro.from('#intro .quote blockquote',{
    duration:2,
    y:-20,
    stagger:0.5,
    opacity:0,
    ease:'back.out(2)'
},'-=1')





/**toggling nav-icon */

document.addEventListener('DOMContentLoaded',()=>{
    document.querySelector('span.navbar-toggler-icon').addEventListener('click',(e)=>{
        let button=e.target
         if(button.classList.contains('navbar-toggler-icon')){
    
            button.classList.remove('navbar-toggler-icon')
            button.classList.add('bi','bi-x')
         
        }else if(button.classList.contains('bi','bi-x')){
         
            button.classList.remove('bi','bi-x')
            button.classList.add('navbar-toggler-icon')
         }
    })

    /**scroll to function   

function scrollTO(triggers,target){
    document.querySelectorAll(triggers).forEach((trigger)=>{
        trigger.addEventListener('click',(e)=>{
           
         e.preventDefault()
            gsap.to(window,{
             duration:2,
             scrollTo:{y:target}
           })
        })
    })
 }*/
 

})

window.onload=()=>{console.log('loaded')}