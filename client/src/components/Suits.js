import React from 'react'
// import BuyCard from "./BuyCard"
import SuitsList from "./data/Suits"
import ClothesCard from "./ClothesCard"

const Suits = () => {

    function createCard(SuitsList){
        
            if(SuitsList.nextline === "\n"){
                return(
                    <>
                        <br/>
                        <ClothesCard
                            img = {SuitsList.img}
                            name = {SuitsList.name}
                            cost = {SuitsList.cost} 
                            link  = {SuitsList.link}                       
                        />
                    </>
                )
            }
            else {
                return(
                    <ClothesCard
                    img = {SuitsList.img}
                    name = {SuitsList.name}
                    cost = {SuitsList.cost} 
                    link = {SuitsList.link}                       
                />   
                )
            }
        
    }

    return (
        <div>
            <h3>category : Suits</h3>
            <br/><br/>
            <div class = "itembucket">
                {SuitsList.map(createCard)}
            </div>
        </div>
    )
}

export default Suits
