import React,{useEffect,useState} from 'react'
import {useHistory} from 'react-router-dom'
import logo from "../assets/profile.jpg"

var data

const Profile = () => {
    const history = useHistory()
    const [userData,setUserData] = useState({})

    const callProfilePage = async () =>{
        try{
            const res = await fetch("/profile",{
                method  :"GET",
                headers : {
                    Accept : "application/json",
                    "Content-Type" : "application/json"
                },
                credentials : 'include'
            })
            data = await res.json()
            // console.log(data);
            setUserData(data)

            if(!res.status === 200){
                const error = new Error(res.error)
                throw  error;
            }    
        }catch(err){
            console.log(err);
            history.push("/login")
        }
    }

    useEffect(()=>{
        callProfilePage()
    })
    

    return (
        <div>
        <br/><br/>
            <div class="container">
                <div class="row">
                    <div class="col-6">
                        <img src={logo} alt="" style ={{width:200}} />
                    </div>
                    <div class="col-6">
                        <h4>Name - {userData.name}</h4>                       
                        <p>
                            <i class="glyphicon glyphicon-envelope"></i>Email - {userData.email}
                            <br />                           
                            <i class="glyphicon glyphicon-gift"></i>Phone Number - {userData.phone}
                        </p> 
                        <br/><br/>
                        <h4>Cart - </h4> 
                        <p>
                            <a href="/checkout"><button class = "btn btn-primary">Checkout</button></a>  &nbsp;&nbsp;                  
                            <a href="/"><button class = "btn btn-primary">Add more Items</button></a>
                        </p>   
                    </div>
                </div>
            </div>
        </div>
    
    )
}

export default Profile
