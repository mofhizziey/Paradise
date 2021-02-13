/**product detail content toggle */

let start=performance.now()

$('.section4 .details .detail-content').slideUp()

let toggleSection=(target)=>{
     let targetSection=$(target)
    
     targetSection.slideToggle()
}

$('.section4 .details .btn.toggler').on('click',()=>{
    toggleSection('.section4 .details .detail-content')
})
$('.section4 .shipping-info .btn.toggler').on('click',()=>{
    toggleSection('.section4 .shipping-info .shipping-content')
})


/**toggling product sizes */

let sizeGroups=document.querySelectorAll('.cta .grid .product-sizes div')

let changeSize=(e)=>{
    sizeGroups.forEach((size)=>{
        if(size.classList.contains('active')){
            size.classList.remove('active')
        }
    })
    e.target.classList.toggle('active')
}

sizeGroups.forEach((size)=>{
    size.addEventListener('click',changeSize)
})

/**suggestions carousel */

$('document').ready(()=>{
    $('.suggestions .container-fluid .carousel').slick({
    infinite:false,
    autoplay:false,
    autoplaySpeed:3000,
    dots:true,
    speed:1000,
    slidesToShow:4,
    slidesToScroll:2,
    variableWidth: true,
    centerMode:false,
    nextArrow:'.next-arr',
    prevArrow:'.prev-arr', 
    
    
      responsive:[
         {
             breakpoint:480,
             settings:{
                 slidesToShow:1,
                 slidesToScroll:1,
                 variableWidth:true,
                 
             }
         }   
           
         
      ]
     
    })
})

let end = performance.now()

console.log(end-start)