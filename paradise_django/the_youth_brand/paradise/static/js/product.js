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
    
  }
})

/**Merch switch  */

let mensMerchBtn=$('.mens-merch')
let womensMerchBtn=$('.womens-merch')
let mensMerch=$('#mens-wears')
let womensMerch=$('#women-wears')
let loader=$('.loader')

womensMerchBtn.on('click',()=>{
  if(womensMerch.hasClass('hide')){
    loader.toggleClass('hide')
    mensMerch.toggleClass('hide')
    
    mensMerchBtn.toggleClass('active')
    womensMerchBtn.toggleClass('active')

    setTimeout(()=>{
      loader.toggleClass('hide')
      womensMerch.toggleClass('hide')
      gsap.from(womensMerch,{
        duration:1,
        opacity:0
      })
    },2000)
  }
})

mensMerchBtn.on('click',()=>{
  if(mensMerch.hasClass('hide')){
    loader.toggleClass('hide')
    womensMerch.toggleClass('hide')
   
    womensMerchBtn.toggleClass('active')
    mensMerchBtn.toggleClass('active')


    setTimeout(()=>{
      loader.toggleClass('hide')
      mensMerch.toggleClass('hide')
      gsap.from(mensMerch,{
        duration:1,
        opacity:0
      })
    },2000)
  }  
})
