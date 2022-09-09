import React from 'react'
import './Home.css';
// import { FaHome,FaRegistered} from 'react-icons/fa'
// import {FcServices} from 'react-icons/fc'
import {Link} from 'react-router-dom' 
import Images from '../Images/Wallpaper.jpg';


export default function Home() {
    return (
        <div>
             <nav class="navbar navbar-light" style={{backgroundColor:"white"}}>
                <span class="navbar-brand mb-0 h1"><h4>&nbsp;&nbsp;&nbsp;&nbsp;Veggies Store</h4></span>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item1 active">
                        <Link class="nav-link" to="/" style={{color:"black"}}><h6>Home</h6></Link>
                    </li>
                </ul>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item2 active">
                      <a href="Products.js">  <Link class="nav-link" to="/products" style={{color:"black"}}><h6>Products</h6></Link></a>
                    </li>
                </ul>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item3 active">
                        <Link class="nav-link" to="/register" style={{color:"black"}}><h6>Register</h6></Link>
                    </li>
                </ul>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item4 active">
                        <Link class="nav-link" to="/login" style={{color:"black"}}><h6>Login</h6></Link>
                    </li>
                </ul>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item4 active">
                        <Link class="nav-link" to="/contact" style={{color:"black"}}><h6>ContactUs</h6></Link>
                    </li>
                </ul>
            </nav>
            <div style={{backgroundImage:`url(${Images})`,height:800,backgroundSize:1400}}> 
            <br></br><br></br>  
    <h1><center><b><i>Welcome To Veggies Store </i></b></center></h1>
   {/* <img src="https://cdn.pixabay.com/photo/2019/07/23/09/49/hotel-4357159_960_720.jpg" class="" alt="..."  width="1350px" height="800px" />  */}
   
  </div> 
 </div> 
    )
}

