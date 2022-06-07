import React from "react";
const Footer=()=> {
     var mystyle={
      // style={{height:'100px'}, {'border-radius':'10px'},{'padding-top':'40px'}} 
      'height':'100px',
      'border-radius':'10px',
      'padding-top':'40px'
    };
   
     return(
       <div>
      <div class="container-fluid bg-dark  my-5">
      <section id="contact">
      <footer
          class="text-center text-lg-start text-white"
          style={{'background-color':' #071b46'}}
          >
       
        <div class="container p-4 pb-0">
        <section class="">
          <div class="row">
          <div class="col-md-2  mx-auto mt-3" style={{height: '60px'}}>
            <a href="https://www.dotglasses.org/">
           <img src="logo1.png" id="image" alt="" style={mystyle} class="rounded"/> 
           {/* style={{height:'100px'}, {'border-radius':'10px'},{'padding-top':'40px'}} */}
         </a> </div>
          <div class="col-md-5  mx-auto mt-4">
           <h6 class="text-uppercase mx-auto font-weight-bold" style={{width: '180px'}}>contact</h6>
            <p><i class="fas fa-envelope "></i> DOT Glasses headquarters:<br/>
             info@dotglasses.org</p>
           
          </div>
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">Follow us</h6>
      
            
            <a
             class="btn btn-primary btn-floating m-1"
            //  style="background-color: #1e3870"
            style={{'background-color': '#1e3870'}}
             href="https://www.facebook.com/dotglasses/"
             role="button" id="image"
             ><i class="fab fa-facebook-f"></i
            ></a>
      
          
            <a
             class="btn btn-primary btn-floating m-1"
            //  style="background-color: #08528a"
            style={{'background-color':' #08528a'}}
             href="https://twitter.com/dotglasses"
             role="button" id="image"
             ><i class="fab fa-twitter"></i
            ></a>
      
            
            <a
             class="btn btn-primary btn-floating m-1"
            //  style="background-color: #dd4b39"
            style={{'background-color':' #dd4b39'}}
            // style={'{background-color:"}'}
             href="https://www.dotglasses.org/"
             role="button" id="image"
             ><i class="fab fa-google"></i
            ></a>
      
            
            <a
             class="btn btn-primary btn-floating m-1"
            //  style="background-color: #ac2bac"
            style={{'background-color':' #ac2bac'}}
            // style={'{background-color: "}'}
             href="#!"
             role="button" id="image"
             ><i class="fab fa-instagram"></i
            ></a>
      
            
            <a
             class="btn btn-primary btn-floating m-1"
            //  style="background-color: #0082ca"
           style ={{'background-color':' #0082ca'}}
            //  style={'{background-color: "}'}
             href="https://www.linkedin.com/company/dotglasses/"
             role="button" id="image"
             ><i class="fab fa-linkedin-in"></i
            ></a>
            
            <a
             class="btn btn-primary btn-floating m-1"
            //  style={'{background-color: #333333"}'}
            style ={{'background-color':' #333333'}}
            //  style="background-color: #333333"
             href="https://www.youtube.com/channel/UCcHycdXJ5u6m1dUzILGctWQ"
             role="button" id="image"
             ><i class="fab fa-youtube"></i
            ></a>
          </div>
          </div>
        </section>
      </div>
        <div
           class="text-center p-3"
           style={{'background-color':'rgba(19, 8, 52, 0.2)'}}
          //  style="background-color: rgba(19, 8, 52, 0.2)"
           >
        <a class="text-white" href="https://www.dotglasses.org/"
           >Dot Glasses</a
          >	  <a href="https://www.linkedin.com/in/karnmkk/" class="text-white" >__@__karthikk__</a>
          
      </div>
      </footer>
    </section>
  </div>
  </div>

     );
   }



 export default Footer