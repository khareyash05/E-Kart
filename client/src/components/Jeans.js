import React from 'react'
import JeansList from "./data/Jeans"
import ClothesCard from "./ClothesCard"

const Jeans = () => {
    function createCard(JeansList){
        
        if(JeansList.nextline === "\n"){
            return(
                <>
                    <br/>
                    <ClothesCard
                        img = {JeansList.img}
                        name = {JeansList.name}
                        cost = {JeansList.cost} 
                        link  = {JeansList.link}                       
                    />
                </>
            )
        }
        else {
            return(
                <ClothesCard
                img = {JeansList.img}
                name = {JeansList.name}
                cost = {JeansList.cost} 
                link = {JeansList.link}                       
            />   
            )
        }
    
}

return (
    <div>
        <h3>category : Jeans</h3>
        <br/><br/>
        <div class = "itembucket">
            {JeansList.map(createCard)}
        </div>
    </div>
)
}

export default Jeans
