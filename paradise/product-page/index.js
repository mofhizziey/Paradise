/**product detail content toggle */

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