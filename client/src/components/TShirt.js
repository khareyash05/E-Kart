import React from 'react'
import TShirtList from "./data/TShirt"
import ClothesCard from "./ClothesCard"

const TShirt = () => {

    function createCard(TShirtList){
        
        if(TShirtList.nextline === "\n"){
            return(
                <>
                    <br/>
                    <ClothesCard
                        img = {TShirtList.img}
                        name = {TShirtList.name}
                        cost = {TShirtList.cost} 
                        link  = {TShirtList.link}                       
                    />
                </>
            )
        }
        else {
            return(
                <ClothesCard
                img = {TShirtList.img}
                name = {TShirtList.name}
                cost = {TShirtList.cost} 
                link = {TShirtList.link}                       
            />   
            )
        }
    
}

    return (
        <div>
            <h3>category : T-Shirts</h3>
            <br/><br/>
            <div class = "itembucket">
                {TShirtList.map(createCard)}
            </div>
        </div>
    )
}

export default TShirt
