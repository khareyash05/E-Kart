import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

const Footer = () => {
    return (
        <div>
             <div style = {{backgroundColor : "black"}} class="footer container-fluid pb-0 mb-0 justify-content-center text-light ">
         <div class="row my-5 justify-content-center py-5">
             <div class="col-11">
                 <div class="row ">
                     <div class="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                         <h3 class="text-muted mb-md-0 mb-5 bold-text">E-Kart.</h3>
                     </div>
                     <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                         <h6 class="mb-3 mb-lg-4 bold-text "><b>MENU</b></h6>
                         <ul class="list-unstyled">
                             <li><a style = {{color : "white"}} href = "/">Home</a></li>                             
                             <li><a style = {{color : "white"}} href = "/login">Login</a></li>
                             <li><a style = {{color : "white"}} href = "/register">Register</a></li>
                         </ul>
                     </div>
                     <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                         <h6 class="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5"><b>ADDRESS</b></h6>
                         <p class="mb-1">202,ABC Complex </p>
                         <p>Laxmi Nagar , New Delhi 110012</p>
                     </div>
                 </div>
                 <div class="row ">
                     <div class="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                         <p class="social text-muted mb-0 pb-0 bold-text"> <span class="mx-2"><i class="fa fa-facebook" aria-hidden="true"></i></span> <span class="mx-2"><i class="fa fa-linkedin-square" aria-hidden="true"></i></span> <span class="mx-2"><i class="fa fa-twitter" aria-hidden="true"></i></span> <span class="mx-2"><i class="fa fa-instagram" aria-hidden="true"></i></span> </p><small class="rights"><span>&#174;</span> E-Kart All Rights Reserved.</small>
                     </div>
                     <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
                         <h6 class="mt-55 mt-2 text-muted bold-text"><b>YASH KHARE</b></h6><small> <span><i class="fa fa-envelope" aria-hidden="true"></i></span> khareyash05@gmail.com</small>
                     </div>
                     <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
                         <h6 class="mt-55 mt-2 text-muted bold-text"><b>LINKEDIN</b></h6><small> <span><i class="fa fa-envelope" aria-hidden="true"></i></span><a style = {{color : "white"}} href = "https://www.linkedin.com/in/yash-khare-0978821aa/">My LinkedIn Profile</a></small>
                     </div>
                 </div>
             </div>
         </div>
     
 </div>
        </div>
    )
}

export default Footer
