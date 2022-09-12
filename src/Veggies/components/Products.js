import React, { Component } from 'react'
import './node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
import './Products.css'


export default class Products extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-light" style={{backgroundColor:"grey"}}>
                <span class="navbar-brand mb-0 h1"style={{color:"lightgreen"}}><h4>VeGGies Store</h4></span>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item1 active">
                        <Link class="nav-link" to="/" style={{color:"lightgreen"}}><h6>Home</h6></Link>
                    </li>
                </ul>
                
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item2 active">
                        <Link class="nav-link" to="/services" style={{color:"lightgreen"}}><h6>AboutUs</h6></Link>
                    </li>
                </ul>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item3 active">
                        <Link class="nav-link" to="/register" style={{color:"lightgreen"}}><h6>Register</h6></Link>
                    </li>
                </ul>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item4 active">
                        <Link class="nav-link" to="/login" style={{color:"lightgreen"}}><h6>Login</h6></Link>
                    </li>
                </ul>
            </nav>
            <br/>

            
 {/* <div style={{backgroundColor:"lightpink"}}>  */}


<div class="card-group">
  <div class="card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzoaUoXzIKrHHNh3Vutlx7ZDhgUuP4kSHOfcHYPpdLVtt8X-vLcz2zZacP74RY_iBHsrs&usqp=CAU" class="card-img-top" alt="..." align="right" />
    <div class="card-body">
      <br></br><h5 class="card-title">TOMATO</h5>
      <div class="btn-group">
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-success btn-sm ">BUY </Link>
        </div>
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-primary btn-sm">ADD CART</Link>
    </div></div>
  </div></div>

  <div class="card">
    <img src="https://thumbs.dreamstime.com/b/red-onion-25289022.jpg" class="card-img-top" alt="..." align="right" />
    <div class="card-body">
      <br></br><h5 class="card-title">POTATO</h5>
      <div class="btn-group">
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-success btn-sm ">BUY </Link>
        </div>
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-primary btn-sm">ADD CART</Link>
    </div></div>
  </div></div>

  <div class="card">
    <img src="data:image/jpeg;base64,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" class="card-img-top" alt="..." align="right" />
    <div class="card-body">
      <br></br><h5 class="card-title">CAULIFLOWER</h5>
      <div class="btn-group">
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-success btn-sm ">BUY </Link>
        </div>
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-primary btn-sm">ADD CART</Link>
    </div></div>
  </div></div>
      
  <div class="card">
    <img src="data:image/jpeg;base64,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" class="card-img-top" alt="..." align="right" />
    <div class="card-body">
      <br></br><h5 class="card-title">BRINJAL</h5>
      <div class="btn-group">
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-success btn-sm ">BUY </Link>
        </div>
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-primary btn-sm">ADD CART</Link>
    </div></div>
  </div></div>

  <div class="card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkVZIKbtQoLVe3A-wGEGlmV9sgHuBUmOLo4w&usqp=CAU" class="card-img-top" alt="..." align="right" />
    <div class="card-body">
      <br></br><h5 class="card-title">POTATO</h5>
      <div class="btn-group">
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-success btn-sm ">BUY </Link>
        </div>
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-primary btn-sm">ADD CART</Link>
    </div></div>
  </div></div>
      
  <div class="card">
    <img src="data:image/jpeg;base64,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" class="card-img-top" alt="..." align="right" />
    <div class="card-body">
      <br></br><h5 class="card-title">BEETROOT</h5>
      <div class="btn-group">
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-success btn-sm ">BUY </Link>
        </div>
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-primary btn-sm">ADD CART</Link>
    </div></div>
  </div></div>
  
  <div class="card-group">
  <div class="card">
    <img src="https://cdn.shopify.com/s/files/1/0590/4649/4357/products/snake-gourd_220x.jpg?v=1649323554" class="card-img-top" alt="..." align="right" />
    <div class="card-body">
      <br></br><h5 class="card-title">SNAKE GOURD</h5>
      <div class="btn-group">
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-success btn-sm ">BUY </Link>
        </div>
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-primary btn-sm">ADD CART</Link>
    </div></div>
  </div></div>

  <div class="card">
    <img src="https://cdn.shopify.com/s/files/1/0590/4649/4357/products/sweet-potato_220x.jpg?v=1649324565" class="card-img-top" alt="..." align="right" />
    <div class="card-body">
      <h5 class="card-title">SWEET POTATO</h5>
      <div class="btn-group">
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-success btn-sm ">BUY </Link>
        </div>
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-primary btn-sm">ADD CART</Link>
    </div></div>
  </div></div>

  <div class="card">
    <img src="https://cdn.shopify.com/s/files/1/0590/4649/4357/products/cucumber_220x.jpg?v=1649157040" class="card-img-top" alt="..." align="right" />
    <div class="card-body">
      <br></br><h5 class="card-title">CUCUMBER</h5>
      <div class="btn-group">
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-success btn-sm ">BUY </Link>
        </div>
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-primary btn-sm">ADD CART</Link>
    </div></div>
  </div></div>
      
  <div class="card">
    <img src="https://cdn.shopify.com/s/files/1/0590/4649/4357/products/suran_220x.jpg?v=1649324460" class="card-img-top" alt="..." align="right" />
    <div class="card-body">
      <br></br><h5 class="card-title">YAM</h5>
      <div class="btn-group">
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-success btn-sm ">BUY </Link>
        </div>
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-primary btn-sm">ADD CART</Link>
    </div></div>
  </div></div>

  <div class="card">
    <img src="https://cdn.shopify.com/s/files/1/0590/4649/4357/products/spring-onion-bunch_220x.jpg?v=1649324272" class="card-img-top" alt="..." align="right" />
    <div class="card-body">
      <h5 class="card-title">SPRING ONIONS</h5>
      <div class="btn-group">
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-success btn-sm ">BUY </Link>
        </div>
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-primary btn-sm">ADD CART</Link>
    </div></div>
  </div></div>
      
  <div class="card">
    <img src="https://cdn.shopify.com/s/files/1/0590/4649/4357/products/orange-haldi_220x.jpg?v=1649332310" class="card-img-top" alt="..." align="right" />
    <div class="card-body">
      <br></br><h5 class="card-title">TURMERIC</h5>
      <div class="btn-group">
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-success btn-sm ">BUY </Link>
        </div>
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-primary btn-sm">ADD CART</Link>
    </div></div>
  </div></div>

  <div class="card-group">
  <div class="card">
    <img src="https://cdn.shopify.com/s/files/1/0590/4649/4357/products/coriander-bunch_300x.jpg?v=1649156974" class="card-img-top" alt="..." align="right" />
    <div class="card-body">
      <h5 class="card-title">CORIANDER LEAVES</h5>
      <div class="btn-group">
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-success btn-sm ">BUY </Link>
        </div>
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-primary btn-sm">ADD CART</Link>
    </div></div>
  </div></div>

  <div class="card">
    <img src="https://cdn.shopify.com/s/files/1/0590/4649/4357/products/ashgourd.jpg?v=1649056228" class="card-img-top" alt="..." align="right" />
    <div class="card-body">
      <br></br><h5 class="card-title">ASH GOURD</h5>
      <div class="btn-group">
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-success btn-sm ">BUY </Link>
        </div>
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-primary btn-sm">ADD CART</Link>
    </div></div>
  </div></div>

  <div class="card">
    <img src="https://cdn.shopify.com/s/files/1/0590/4649/4357/products/okra-bindi_300x.jpg?v=1649284508" class="card-img-top" alt="..." align="right" />
    <div class="card-body">
      <h5 class="card-title">LADY'S FINGER</h5>
      <div class="btn-group">
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-success btn-sm ">BUY </Link>
        </div>
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-primary btn-sm">ADD CART</Link>
    </div></div>
  </div></div>
      
  <div class="card">
    <img src="https://cdn.shopify.com/s/files/1/0590/4649/4357/products/chilli-hot-birds-eye_300x.jpg?v=1649241415" class="card-img-top" alt="..." align="right" />
    <div class="card-body">
      <br></br><h5 class="card-title">GREEN CHILLI</h5>
      <div class="btn-group">
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-success btn-sm ">BUY </Link>
        </div>
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-primary btn-sm">ADD CART</Link>
    </div></div>
  </div></div>

  <div class="card">
    <img src="https://cdn.shopify.com/s/files/1/0590/4649/4357/products/ginger_220x.jpg?v=1649174735" class="card-img-top" alt="..." align="right" />
    <div class="card-body">
      <br></br><h5 class="card-title">GINGER</h5>
      <div class="btn-group">
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-success btn-sm ">BUY </Link>
        </div>
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-primary btn-sm">ADD CART</Link>
    </div></div>
  </div></div>
      
  <div class="card">
    <img src="https://cdn.shopify.com/s/files/1/0590/4649/4357/products/cabbage_220x.jpg?v=1649154933" class="card-img-top" alt="..." align="right" />
    <div class="card-body">
      <br></br><h5 class="card-title">CABBAGE</h5>
      <div class="btn-group">
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-success btn-sm ">BUY </Link>
        </div>
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-primary btn-sm">ADD CART</Link>
    </div></div>
  </div></div>
  
  <div class="card-group">
  <div class="card">
    <img src="https://cdn.shopify.com/s/files/1/0590/4649/4357/products/bottle-gourd-lauki-dudhi_220x.jpg?v=1649091713" class="card-img-top" alt="..." align="right" />
    <div class="card-body">
      <h5 class="card-title">BOTTLE GOURD</h5>
      <div class="btn-group">
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-success btn-sm ">BUY </Link>
        </div>
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-primary btn-sm">ADD CART</Link>
    </div></div>
  </div></div>

  <div class="card">
    <img src="https://cdn.shopify.com/s/files/1/0590/4649/4357/products/tindora_220x.jpg?v=1649241464" class="card-img-top" alt="..." align="right" />
    <div class="card-body">
      <h5 class="card-title">INDIAN GOURD</h5>
      <div class="btn-group">
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-success btn-sm ">BUY </Link>
        </div>
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-primary btn-sm">ADD CART</Link>
    </div></div>
  </div></div>

  <div class="card">
    <img src="https://cdn.shopify.com/s/files/1/0590/4649/4357/products/drumsticks_220x.jpg?v=1649160517" class="card-img-top" alt="..." align="right" />
    <div class="card-body">
      <br></br><h5 class="card-title">DRUMSTICKS</h5>
      <div class="btn-group">
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-success btn-sm ">BUY </Link>
        </div>
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-primary btn-sm">ADD CART</Link>
    </div></div>
  </div></div>
      
  <div class="card">
    <img src="https://cdn.shopify.com/s/files/1/0590/4649/4357/products/karela-bitter-gourd_220x.jpg?v=1649249681" class="card-img-top" alt="..." align="right" />
    <div class="card-body">
      <br></br><h5 class="card-title">BITTER GOURD</h5>
      <div class="btn-group">
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-success btn-sm ">BUY </Link>
        </div>
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-primary btn-sm">ADD CART</Link>
    </div></div>
  </div></div>

  <div class="card">
    <img src="https://cdn.shopify.com/s/files/1/0590/4649/4357/products/guwar_220x.jpg?v=1649176565" class="card-img-top" alt="..." align="right" />
    <div class="card-body">
      <h5 class="card-title">CLUSTER BEANS</h5>
      <div class="btn-group">
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-success btn-sm ">BUY </Link>
        </div>
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-primary btn-sm">ADD CART</Link>
    </div></div>
  </div></div>
      
  <div class="card">
    <img src="https://cdn.shopify.com/s/files/1/0590/4649/4357/products/turia_220x.jpg?v=1649332285" class="card-img-top" alt="..." align="right" />
    <div class="card-body">
      <br></br><h5 class="card-title">RIDGE GOURD</h5>
      <div class="btn-group">
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-success btn-sm ">BUY </Link>
        </div>
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-primary btn-sm">ADD CART</Link>
    </div></div>
  </div></div>

  <div class="card-group">
  <div class="card">
    <img src="https://cdn.shopify.com/s/files/1/0590/4649/4357/products/garlic-pack-400g_220x.jpg?v=1649174618" class="card-img-top" alt="..." align="right" />
    <div class="card-body">
      <br></br><h5 class="card-title">GARLIC</h5>
      <div class="btn-group">
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-success btn-sm ">BUY </Link>
        </div>
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-primary btn-sm">ADD CART</Link>
    </div></div>
  </div></div>

  <div class="card">
    <img src="https://cdn.shopify.com/s/files/1/0590/4649/4357/products/mooli_220x.jpg?v=1649253493" class="card-img-top" alt="..." align="right" />
    <div class="card-body">
      <h5 class="card-title">WHITE RADDISH</h5>
      <div class="btn-group">
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-success btn-sm ">BUY </Link>
        </div>
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-primary btn-sm">ADD CART</Link>
    </div></div>
  </div></div>

  <div class="card">
    <img src="https://cdn.shopify.com/s/files/1/0590/4649/4357/products/chow-chow_220x.jpg?v=1649156070" class="card-img-top" alt="..." align="right" />
    <div class="card-body">
      <br></br><h5 class="card-title">CHOW CHOW</h5>
      <div class="btn-group">
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-success btn-sm ">BUY </Link>
        </div>
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-primary btn-sm">ADD CART</Link>
    </div></div>
  </div></div>
      
  <div class="card">
    <img src="https://cdn.shopify.com/s/files/1/0590/4649/4357/products/parval_220x.jpg?v=1649284850" class="card-img-top" alt="..." align="right" />
    <div class="card-body">
      <h5 class="card-title">POINTED GOURD</h5>
      <div class="btn-group">
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-success btn-sm ">BUY </Link>
        </div>
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-primary btn-sm">ADD CART</Link>
    </div></div>
  </div></div>

  <div class="card">
    <img src="https://cdn.shopify.com/s/files/1/0590/4649/4357/products/valor-beans_220x.jpg?v=1651006063" class="card-img-top" alt="..." align="right" />
    <div class="card-body">
      <br></br><h5 class="card-title">INDIAN BEANS</h5>
      <div class="btn-group">
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-success btn-sm ">BUY </Link>
        </div>
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-primary btn-sm">ADD CART</Link>
    </div></div>
  </div></div>
      
  <div class="card">
    <img src="https://cdn.shopify.com/s/files/1/0590/4649/4357/products/green-capsicum_220x.jpg?v=1649176293" class="card-img-top" alt="..." align="right" />
    <div class="card-body">
      <h5 class="card-title">GREEN CAPSICUM</h5>
      <div class="btn-group">
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-success btn-sm ">BUY </Link>
        </div>
        <div class="btn-group mr-2" role="group">
      <Link to ="/getvaccantroom" class="btn btn-primary btn-sm">ADD CART</Link>
    </div></div>
  </div></div><br></br>



  
</div>
</div>
</div>
</div>
</div>
<footer><p>CopyRights &#169;:&#x1F49A;&#x1F49A; VeGGies Team &#x1F49A;&#x1F49A;</p></footer>
</div>


        )
        
        }

}

