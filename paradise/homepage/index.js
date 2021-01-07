/** gsap plugins */

gsap.registerPlugin(ScrollToPlugin)

let intro=gsap.timeline()

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
    duration:1,
   filter:'blur(10px)',
    opacity:0
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

/**scroll to events */

function scrollTO(triggers,target){
   document.querySelectorAll(triggers).forEach((trigger)=>{
       trigger.addEventListener('click',(e)=>{
          
        e.preventDefault()
           gsap.to(window,{
            duration:2,
            scrollTo:{y:target,}
          })
       })
   })
}

scrollTO('.toMerch','#merch')

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
})

window.onload=()=>{console.log('loaded')}