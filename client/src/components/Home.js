import React from 'react'
import mac from "../assets/mac.jpg"
import iphone12 from "../assets/iphone.jpg"
import 'bootstrap/dist/css/bootstrap.css'
import './components.css'
import Groceries from "./data/Groceries"
import Card from "./HomeCard"
import Electronics from "./data/Electronics"
import Clothes from "./data/Clothes"
import ClothesCard from "./ClothesCard"
const Home = () => {

    function createCard(Groceries){
        return(
            <Card
                img = {Groceries.img}
                name = {Groceries.name}
                cost = {Groceries.cost}
            />
        )
    }

    function createCard1(Electronics){
        return(
                <Card
                    img = {Electronics.img}
                    name = {Electronics.name}
                    cost = {Electronics.cost}
                />
        )
    }

    function createCard2(Clothes){
        return(
                <ClothesCard
                    img = {Clothes.img}
                    name = {Clothes.name}
                    cost = {Clothes.cost}
                    link = {Clothes.link}
                />
        )
    }

    return (
        <div>  
        <br/>
            <div style = {{}} id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <div class = "container">
                        <img style ={{borderRadius : 5}} src={iphone12} class="rounded d-block w-100" alt="..."/>                        
                        <button class = "btn btn-primary btn1">Buy Now!</button>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <div class = "container">
                        <img src={mac}  class="rounded d-block w-100" alt="..."/>
                        <p class = "phonepara">MacBook Pro @1.4L only</p>
                        <button class = "btn btn-primary btn1">Buy Now!</button>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <div class = "container">
                        <img src={iphone12}  class="rounded d-block w-100" alt="..."/>                        
                        <button class = "btn btn-primary btn1">Buy Now!</button>
                    </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    
                </button>
            </div><br/><br/>
            <div class = "itembucket">
                <h3>Electronics at Prices you can never think off!!</h3>
                {Electronics.map(createCard1)}
            </div>  
            <br/><br/>
            <div class = "itembucket">
                <h3>Buy the Cheapest Groceries</h3>                
                {Groceries.map(createCard)}
            </div>
            <br/><br/>
            <div class = "itembucket">
                <h3>Widest range of clothes with the cheapest prices</h3>
                {Clothes.map(createCard2)}
            </div>         
        </div>
    )
}

export default Home
