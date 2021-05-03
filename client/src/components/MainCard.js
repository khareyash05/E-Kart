import React from 'react'
import BuyCard from './BuyCard'
import JeansList from './data/Jeans'
import SareesList from './data/Sarees'
import SuitsList from './data/Suits'
import TShirtList from "./data/TShirt"

let type = window.location.pathname
type = type.substring(6,"/")
console.log(type);    

const MainCard = () => {

    
    function createCard(TShirtList){
        let id = window.location.pathname
        id = parseInt(id.slice(9))
        if(id===TShirtList.id){
            return(
                <BuyCard
                    id = {TShirtList.id}
                    name = {TShirtList.name}
                    img = {TShirtList.img}
                    cost = {TShirtList.cost}
                />
            )
        }
    }

    function createCard1(SuitsList){
        let id1 = window.location.pathname
        id1 = id1.slice(7)
        if(parseInt(id1)===SuitsList.id){
            return(
                <BuyCard 
                    img = {SuitsList.img}
                    name = {SuitsList.name}
                    cost = {SuitsList.cost}
                />                
            )
        }  
    }

    function createCard2(SareesList){
        let id1 = window.location.pathname
        id1 = id1.slice(8)
        console.log(id1);
        if(parseInt(id1)===SareesList.id){
            return(
                <BuyCard 
                    img = {SareesList.img}
                    name = {SareesList.name}
                    cost = {SareesList.cost}
                />                
            )
        }  
    }

    function createCard3(JeansList){
        let id1 = window.location.pathname
        // console.log(id1);
        id1 = id1.slice(6)
        if(parseInt(id1)===JeansList.id){
            return(
                <BuyCard 
                    img = {JeansList.img}
                    name = {JeansList.name}
                    cost = {JeansList.cost}
                />                
            )
        }  
    }

    return (
        <div>
            {TShirtList.map(createCard)}
            {SuitsList.map(createCard1)}
            {SareesList.map(createCard2)}
            {JeansList.map(createCard3)}
        </div>
    )
}

export default MainCard
