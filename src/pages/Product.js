import React from "react";

const Product=()=> {
    var hello={
        'height' : '300px',
        'width' : '300px',
         'border-radius':'200px'
    };
		return(

<div >

<section id="banner">
            <div className="container  " id="product-container">
       
       <div className="row" id="banner-row"><br/><br></br>
       <div  className="col-ls-12">	<center><h1 className="text-center"><img src="foot.jpg"  	id="image" alt=""/></h1></center>
       </div>
       </div>
       </div>
       <br/><br/><br/>
       <hr />
</section>
    {/* <div style={{'background-color':'#0a193d'}}> */}
       <section id="banner" >
           <h1 className="text-center">PRODUCT INFORMATION</h1><br/>
           <div className="container-fluid" id="about-container">
               <div className="row" id="banner-row">
               <div className="col-md-6" id="about-col">
                  <ul><center><label for="heading">Small Vision Kit</label></center> 
                  
                   <li>Small, laptop-sized bag with everything needed to test vision and provide 20 customized eyeglasses (2kg). Kits are durable, low-cost and can be refilled quickly.
                     </li>
                   </ul>
               </div>
               <div className="col-md-6 " id="banner-col2">
                   <img
                   className="img-responsive rounded-circle mx-auto d-block"
                   src="kit.jpg"
                   alt=""
                   id="image"
                   style={hello}       
                //    style="height: 300px; border-radius: 30%;"
                   />
               </div>
               </div>
           </div>
           </section><br/><br/><br/>

       
           <section id="#">
           <h1 className="text-center">
           </h1>
           <div className="container-fluid" id="product-container">
               <div className="row" id="banner-row">
               <div className="col-md-6" id="about-col">
                   <img
                   className="img-responsive  rounded-circle mx-auto d-block"
                   src="kit1.jpg"
                   alt=""
                   id="image"
                   style={hello}       
                //    style="height: 300px; border-radius: 200px;"
                   />
               </div>
               <div className="col-md-6" id="product-col2">
         <ul>
                   <center><label for="heading">Vision Camp Kit</label></center> 
                 
                   <li>Large kit with everything needed to test vision and provide glasses for 120 people. It includes pop out modules and is easy to carry as shoulder bag or backpack (8kg).
                     </li>
                   </ul>
               </div>
               </div>
           </div><br /><br /><br />
           <div className="container-fluid" id="about-container">
               <div className="row" id="banner-row">
               <div className="col-md-6" id="about-col">
                  <ul><center><label for="heading">Testing Tools</label></center> 
                  
                   <li>A set of vision testers (one for reading glasses, one for seeing far) both with a built-in pupil distance measurement tool. Each kit contains vision testing charts.
                     </li>
                   </ul>
               </div><br/>
               <br/>
               <div className="col-md-6 " id="banner-col2">
                   <img
                   className="img-responsive  rounded-circle mx-auto d-block"
                   src="kit3.jpg"
                   alt=""
                   id="image"
                   style={hello}       
                //    style="height: 300px; border-radius: 200px;"
                   />
               </div>
               </div>
           </div>
           </section><br/><br/><br/>
    
        

       
           <section id="#">
           <h1 className="text-center">
           </h1>
           <div className="container-fluid" id="product-container">
               <div className="row" id="banner-row">
               <div className="col-md-6" id="about-col">
                   <img
                   className="img-responsive  rounded-circle mx-auto d-block"
                   src="kit2.jpg"
                   alt=""
                   id="image"
                   style={hello}       
                //    style="height: 300px; border-radius: 200px;"
                   />
               </div>
               <div className="col-md-6" id="product-col2">
         <ul>
                   <center><label for="heading">Frames & Lenses</label></center> 
                 
                   <li>Eyeglasses frame components (ISO 12870) with scratch-resistant polycarbonate lenses. Children’s frames available in different colors.</li>
                   </ul>
               </div>
               </div>
           </div>
           <div className="container-fluid" id="about-container">
             <div className="row" id="banner-row">
             <div className="col-md-6" id="about-col">
                <ul><center><label for="heading">Accessories</label></center> 
                
                 <li>Microfiber clothes and pouches (for cleaning glasses and protection). The pouches can be branded with partner logos.</li>
                 </ul>
             </div><br/><br/>
             <br/>
             <div className="col-md-6 " id="banner-col2">
                 <img
                 className="img-responsive  rounded-circle mx-auto d-block"
                 src="kit4.jpg"
                 alt=""
                 id="image"
                 style={hello}       
                //  style="height: 300px; border-radius: 200px;"
                 />
             </div>
             </div>
         </div>
          </section><br/><br/><br/>

          <div className="row">
          <div className="col-md-6">
           <h2>DOT Glasses Vision Camp Setup Manual</h2>
           <iframe width="100%" height="400" 	id="image"  src="https://www.youtube.com/embed/nhFrIBlispg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         </div>
         <div className="col-md-6">
           <h2>DOT Glasses Testing and Assembly</h2>
           <iframe width="100%" height="400" 	id="image" src="https://www.youtube.com/embed/Xg1nWsr5QpY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         </div>
       </div>
  </div>  


    );

}
    
    export default Product