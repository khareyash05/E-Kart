import React from "react"
import 'bootstrap/dist/css/bootstrap.css'
import "./components.css"

function Card(props){
    return (
        <>
            <div class="carde">
                
                    <img class = "card-img" src = {props.img} alt = ""/>
                    <h6 style = {{textAlign : "center"}} class="card-title">{props.name}</h6>  
                    <p style = {{textAlign : "center"}}>{props.cost}</p>
                    <br/>
                    <div class = "buttons">
                        <a href="/" class="btn card-btn btn-warning"><b>Buy Now</b></a> &nbsp; &nbsp;
                        <a href="/"  class="btn card-btn btn-warning"><b>Add to Cart</b></a>
                    </div>                  

                
            </div>
        </>
    )
}

export default Card
