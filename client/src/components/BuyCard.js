import React from 'react'
import './components.css'

const BuyCard = (props) => {
    return (<div>

            <div class ="container">

                <div class="row" >
                <div class="col-4" ><img src = {props.img} className="buycardimg" alt = ""/></div>
                <div class="col-8">
                    <div class="row">
                    <div class="col-9" style={{marginLeft : 100}}>
                        <h2>{props.name}</h2>
                        <h4><b>{props.cost}</b></h4>
                        <h6>Delivered in 4-5 business days</h6>
                        <br/>
                        <button class = "btn btn-primary">Buy Now</button>&nbsp;&nbsp;
                        <button class = "btn btn-primary">Add to Cart</button><br/>
                        <br/>
                        <br/>
                        <p>{props.description}</p>
                    <div class="col-6">
                    </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default BuyCard
