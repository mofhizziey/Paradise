/**save anim */

let saveIcon=$('.save')

saveIcon.on('click',(e)=>{
   let icon=e.target
  icon.classList.toggle('bi-heart')
  icon.classList.toggle('bi-heart-fill')
  icon.classList.toggle('text-danger')
  icon.classList.toggle('liked')

})

gsap.to('.grid div',{
  scale:0,
  x:10,
  duration:1,
  stagger:{
    amount:.5,
    from:'bottom',
    grid:'auto',
    yoyo:true,
    repeat:-1,
    transform:'rotateX(360deg)'
    
  }
})

/**load animation */

let load=(section)=>{
  setTimeout(()=>{
    loader.toggleClass('hide')
    section.toggleClass('hide')
    gsap.from(section,{
      duration:1,
      opacity:0
    })
  },2000)
}

/**category sidebar */

let categorySidebar=$('.category-sidebar')
  let categoryBtn=$('.category-btn') 
    let closeBtn=$('.btn.close-sidebar')
      let fadeBg=$('.fade-bg')

 //toggling show and hide

 categoryBtn.on('click',()=>{
     categorySidebar.toggleClass('active')
     fadeBg.toggleClass('active')
 })

 closeBtn.on('click',()=>{
     categorySidebar.toggleClass('active')
     fadeBg.toggleClass('active')
     
 }) 

 fadeBg.on('click',()=>{
    categorySidebar.toggleClass('active')
    fadeBg.toggleClass('active')
 })

//selecting category

let mensCategoryOptions=document.querySelectorAll('.category-sidebar .side-main .mens-category .list-group-item')
  let womenCategoryOptions=document.querySelectorAll('.category-sidebar .side-main .womens-category .list-group-item')
  let categories=document.querySelectorAll('.mens-category') 
    let categoryBtns=document.querySelectorAll('.category-sidebar .options .list-group-item')

let switchCategory=(e)=>{
  let categorySelected=$(`#${e.target.dataset.category}`)
  
  //toggling active category options

    if(categorySelected.hasClass('active')===false){

    //-toggling active category btns
    
    categoryBtns.forEach((button)=>{
        button.classList.remove('active')
    })
    e.target.classList.add('active')

      //toggling active categories

     let currentCategory=document.querySelector('#mens-wears mens-category.active')

     console.log(document.querySelector('#mens-wears .mens-category.active'))
     currentCategory.classList.toggle('hide')
     currentCategory.classList.toggle('active')
    //

      loader.toggleClass('hide')   
          
      categorySelected.toggleClass('active')
      load(categorySelected)
      
      console.log(document.querySelector('#mens-wears .mens-category.active'))
    }
} 

mensCategoryOptions.forEach((option)=>{
  option.addEventListener('click',switchCategory)
})
womenCategoryOptions.forEach((option)=>{
  option.addEventListener('click',switchCategory)
})

/**Merch switch  */

let mensMerchBtn=$('.mens-merch')
let womensMerchBtn=$('.womens-merch')
let mensMerch=$('#mens-wears')
let womensMerch=$('#women-wears')
let loader=$('.loader')
let mensOptions=document.querySelector('.category-sidebar .side-main .mens-category')
let womensOptions=document.querySelector('.category-sidebar .side-main  .womens-category')


womensMerchBtn.on('click',()=>{
  if(womensMerch.hasClass('hide')){
    loader.toggleClass('hide')
     mensMerch.toggleClass('hide')

     /**toggling categories */ 
     
     mensOptions.classList.toggle('hide')
      womensOptions.classList.toggle('hide')
     /** */ 
    mensMerchBtn.toggleClass('active')
    womensMerchBtn.toggleClass('active')
    
    load(womensMerch)
  }
})

mensMerchBtn.on('click',()=>{
  if(mensMerch.hasClass('hide')){
    loader.toggleClass('hide')
     womensMerch.toggleClass('hide')
       
     /**toggling categories */ 
     
     mensOptions.classList.toggle('hide')
      womensOptions.classList.toggle('hide')
     /** */
  
    womensMerchBtn.toggleClass('active')
    mensMerchBtn.toggleClass('active')
     
    load(mensMerch)

  }  
})


/**adding to cart and saving of products */

let save=document.querySelectorAll('.save')
let addToCart=document.querySelectorAll('.add-to-cart')
  let savedCount=document.querySelector('.saved .count')
   let atcCount=document.querySelector('.cart .count')

let addToSavedCount=(e)=>{
  let currentCount=Number(savedCount.textContent)
  
  if(e.target.classList.contains('liked')===false){
    let newCount=currentCount - 1
    savedCount.innerHTML=newCount 
  }else{
    let newCount=currentCount + 1
    savedCount.innerHTML=newCount 
  }
}  

save.forEach((saveBtn)=>{
  saveBtn.addEventListener('click',addToSavedCount)
})

