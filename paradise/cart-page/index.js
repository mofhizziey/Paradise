/**carousel */

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

/**overall price */

let getTotalPrice = () =>{
    let overallTotal = document.querySelector('#checkout .total-price .value')      
      let subTotal = document.querySelectorAll('#items .item .total-price .total .value')
        let valuesArray = []
        subTotal.forEach((total)=>{
            valuesArray.push(Number(total.textContent))
        })
  
       let total = valuesArray.reduce((a,b)=>{
           return a + b
       }) 
  
      overallTotal.textContent=Number(total)  
      
  }
  
  getTotalPrice()
  

/**price increment by quantity */

let increaseBtns = document.querySelectorAll('#items .item .card-body .quantity .counter button')


let increasePrice=(e)=>{
    let itemClass = e.target.parentElement.dataset.item 
      const price = document.querySelector(`#items .${itemClass} .card .unit-price .value`) 
    
    let count = document.querySelector(`.${itemClass} .card-body .quantity .counter .value`)
      let countValue = Number(count.textContent)
       let productInStock = document.querySelector(`#items .${itemClass} .in-store .value`)
          let subTotal = document.querySelector(`#items .${itemClass} .total-price .total .value`)
          

        if(e.target.classList.contains('add')){
           if(countValue < Number(productInStock.textContent)){
             countValue += 1
              count.textContent= countValue
              
            let newPrice = Number(price.textContent) * countValue    
            subTotal.textContent = newPrice
            
            getTotalPrice()
           }

        }else if(e.target.classList.contains('subtract')){
           if(countValue > 1){
             countValue -= 1
               count.textContent = countValue

           let newPrice = Number(price.textContent) * countValue    
             subTotal.textContent = newPrice
             
             getTotalPrice()
           }
       }
    
    
    
}

increaseBtns.forEach((input)=>{
    input.addEventListener('click',increasePrice)
})


/**removing products */

let closeBtns=document.querySelectorAll('.card')

let removeProduct = (e) =>{
    if(e.target.classList.contains('close')){
    let parentContainer = e.target.parentElement.parentElement
    console.log(parentContainer)
    document.querySelector('#items').removeChild(parentContainer)
    }
}

document.addEventListener('DOMContentLoaded',()=>{
    closeBtns.forEach((button)=>{
        button.addEventListener('click',removeProduct)
    })
})


const number=1234.5

const language = 'en-US'

const options = {
    style:'currency',
    currency:'NGN'
}

const USD = number.toLocaleString(language,options)



console.log(USD)