import React from 'react'
import ClothesCard from "./ClothesCard"
import SareesList from "./data/Sarees"

const Sarees = () => {
    function createCard(SareesList){
        
        if(SareesList.nextline === "\n"){
            return(
                <>
                    <br/>
                    <ClothesCard
                        img = {SareesList.img}
                        name = {SareesList.name}
                        cost = {SareesList.cost} 
                        link  = {SareesList.link}                       
                    />
                </>
            )
        }
        else {
            return(
                <ClothesCard
                img = {SareesList.img}
                name = {SareesList.name}
                cost = {SareesList.cost} 
                link = {SareesList.link}                       
            />   
            )
        }
    
}

return (
    <div>
        <h3>category : Sarees</h3>
        <br/><br/>
        <div class = "itembucket">
            {SareesList.map(createCard)}
        </div>
    </div>
)
}

export default Sarees
