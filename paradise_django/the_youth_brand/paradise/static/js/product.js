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
   

let switchCategory=(e)=>{
  let optionBtn=e.target
  let categorySelected=$(`#${optionBtn.dataset.category}`)
  

    if(categorySelected.hasClass('active')===false){

     let currentCategory;
      
     let optionGroup=optionBtn.parentElement.parentElement

     if(optionGroup.classList.contains('mens-category')){

      //toggling active category btns
    
     mensCategoryOptions.forEach((button)=>{
      button.classList.remove('active')
     })
      optionBtn.classList.add('active')
       
      currentCategory=document.querySelector(`#mens-wears .mens-category.active`)
     
     }else if(optionGroup.classList.contains('womens-category')){

        //-toggling active category btns
    
        womenCategoryOptions.forEach((button)=>{
        button.classList.remove('active')
        })
        optionBtn.classList.add('active')

        currentCategory=document.querySelector(`#women-wears .womens-category.active`)
     
     
      }

     currentCategory.classList.toggle('hide')
     currentCategory.classList.toggle('active')
    //

      loader.toggleClass('hide')   
          
      categorySelected.toggleClass('active')
      load(categorySelected)      
    }
} 

$('document').ready(()=>{

  mensCategoryOptions.forEach((option)=>{
    option.addEventListener('click',switchCategory)
  })
  womenCategoryOptions.forEach((option)=>{
    option.addEventListener('click',switchCategory)
  })
  
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
       
     /**toggling category options */ 
     
     mensOptions.classList.toggle('hide')
      womensOptions.classList.toggle('hide')
     /** */
  
    womensMerchBtn.toggleClass('active')
    mensMerchBtn.toggleClass('active')
     
    load(mensMerch)

  }  
})




document.addEventListener('scroll',()=>{
  if(window.pageYOffset>850){
    $('.scrollTop').removeClass('hide')

  }else{
    $('.scrollTop').addClass('hide')
    
  }
})