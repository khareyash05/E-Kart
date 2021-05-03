import React from 'react'

const BuyCard = (props) => {
    return (
        <div>
            <div class = "container">
                <div class = "row">
                    <div class = "col-lg-6">
                        <img src = {props.img} alt = ""/>
                    </div>
                    <div class = "col-lg-6">
                        <h2>{props.name}</h2>
                        <h4><b>{props.cost}</b></h4>
                        <button class = "btn btn-warning">Buy Now</button>
                    </div>
                </div>
            </div>
            <p>{props.description}</p>
        </div>
    )
}

export default BuyCard
