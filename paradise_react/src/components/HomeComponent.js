import '../resources/gsap-public/src/';
import '../resources/bootstrap/css/bootstrap.min.css';
import '../static/home.css';
import NavBar from './NavBar';



function HomeComponent(){ 

    const textDec = {
        textDecoration: 'none'
    }


    return(
  
     <div className="overall">
         <NavBar />
    <a href="#" className="link whatsapp-icon"><i class="fab text-light fa-whatsapp "></i></a>



<main className="first-container  rounded"> 
<section id="intro">
 <div className="container-fluid  ">
     <div className="intro-msg">
      <span className="ms-3">Welcome to</span>
      
      <span className="brand-name">
          <div></div>
          PARADISE
      </span>
  </div>
  
  <div className="intro-img"></div>
  
  <span className="quote ">
      <blockquote className="text-primary" ><b>&#10077Live,Love,Laugh&#10078</b></blockquote>
      <blockquote> Fill the happiness in what you wear.</blockquote>
  </span>          
     <div className="center">
<button className="btn border fw-bold  btn-dark btn-lg-lg"><a href="#merch" className="text-light" style={textDec}>Check Out Our Merch</a></button>

     </div>
</div>
</section>


<section id="summary">
<div className="container-fluid center">
<div className="dark-bg"></div>
  <div className="animation">

      <div>T</div>
      <div>h</div>
      <div>e </div>
      <div>Y</div>
      <div>o</div>
      <div>u</div>
      <div>t</div>
      <div>h</div>
      <div>B</div>
      <div>r</div>
      <div>a</div>
      <div>n</div>
      <div>d</div>
    
    
  </div>

  <h3 className="text-primary my-4"> Summary</h3>
  <p className="w-75 center mt-4 ">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quas maxime quasi libero provident minus amet quisquam totam dicta natus ratione, esse deleniti delectus reiciendis exercitationem voluptatibus distinctio. Fugit, nobis.
  </p>
  

  <blockquote className="text-primary  fs-5 center my-5" >&#10077 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque veniam fugiat ut debitis dicta, obcaecati quisquam excepturi, sed explicabo qui, ad rerum deleniti ducimus vel ex dolore alias perspiciatis inventore! &#10078</blockquote>

  
</div>


</section>


<section id="merch">
<div className="container-fluid px-3 center">
  <h3 className="py-3 fs-2 bg-dark text-light">Collections</h3>

  <div className="inventory">
     <div className="mens-wears wears mb-lg-4 mb-md-2 mb-1 ">
       <div>
          <p className=" fw-bolder text-light">Check Out Our Mens Wears</p>
          <button className="btn  border border-light border-5 "><a href="../inventory/index.html" className="nav-link text-light" >Check It Out!</a></button>
       </div>
   </div>
   <div className="womens-wears wears ">
      <div>
          <p className=" fw-bolder text-light">Check Out Our Womens Wears</p>
          <button className="btn  border border-light border-5  "><a href="../inventory/index.html" className="nav-link text-light">Check It Out!</a></button>
      </div>
          
     </div>
  </div>
</div>
</section>


<section id="collaborations">
 <div className="container-fluid center text-light bg-dark   ">
     <p className="fs-1 fw-bolder pt-3 td-underline">Collaborations</p>
   
   <div className="collabs row justify-content-evenly ">
       <div className="col-md-6  fs-3  fw-bold "><span className="border border-5 px-3 py-1">EVOLVE</span></div>
       <div className="col-md-6 fs-3 fw-bold ">  <span className="border border-5 px-3 py-1">APHRODITE 21</span></div>
   </div>


 </div>
</section>



<footer>
 <div className="container-fluid text-light bg-dark  center">
  
  <span className="brand-name ">
      <div></div>
       PARADISE
    </span>
     
    <div className="row">
         <div className="contact col-md-4 ">
           <h4>Contact us</h4>
           <ul className="p-0">
               <a href="#" className="nav-link link-light"><i className="fab fa-whatsapp"></i> 08034445675</a>
               <a href="#" className="nav-link link-light"><i className="fab fa-whatsapp"></i> 08034445675</a>
               <a href="#" className="nav-link link-light"><i className="bi bi-telephone"></i> 08034445675</a>
               
           </ul>
         </div>
         <div className="socials col-md-4 ">
          <h4>Follow us</h4>
          <a href="#" className="nav-link link-light"><i className="fab fa-instagram"></i> Instagram</a>
          <a href="#" className="nav-link link-light"><i className="fab fa-twitter"></i> Twitter</a>
           
          </div>
         <div className="about col-md-4">
             <h4>About Us</h4>
             <a href="#" className="nav-link link-light">About us</a>
         </div>
     </div>
 </div>
</footer>

</main>


</div>

    )

}



export default HomeComponent;