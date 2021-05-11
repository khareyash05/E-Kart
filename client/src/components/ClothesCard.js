import React from 'react'
import './components.css'

const ClothesCard = (props) => {
    return ( <>
            
                    
                <div class="carde">
                    <img class = "card-img" src = {props.img}  alt = ""/>
                    <h6 style = {{textAlign : "center"}} class="card-title">{props.name}</h6>  
                    <p style = {{textAlign : "center"}}>{props.cost}</p>
                    <br/>
                    <div class = "buttons">
                        <a href={props.link} style = {{width : 110 , position : "inherit"}} class="btn card-btn btn-warning"><b>Checkout Here</b></a>                     
                    </div>            
              
                </div>

            </>    
            
    )
}

export default ClothesCard
