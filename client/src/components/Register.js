import React,{useState} from "react"
import {useHistory} from "react-router-dom"


function Register(){
    const history = useHistory()
    const [user, setUser] = useState({
        name : "" , email : "" , phone : "" , work : "" , password : "" , cpassword : ""
    })
    let name,value
    const handleInputs = (e)=>{
        name = e.target.name
        value = e.target.value
        setUser({...user , [name]:value})
    }

    const PostData = async(e) =>{
        e.preventDefault()
        const {name , email , phone , work , password , cpassword } = user
        const res = await fetch("/register",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                name , email , phone , work , password , cpassword
            })
        })
        const data = await res.json()
        if(data.status === 422 || !data){
            window.alert("Invalid Registration")
            console.log("Invalid Registration");
        }
        else {
            window.alert("DOne Registration")
            console.log("DOne Registration");
            history.push("/login")
        }
    }
    return(
    <>
    <br/>
    <br/>
    <div className = "container">
        <div className = "row">
            <div style = {{marginTop : 150}} className = "col-lg-6">
                <h1 style = {{fontFamily : "sans-serif"}}>New Users Signup Here!!</h1>
                <h5 style = {{fontFamily : "sans-serif"}}>Fill the form or use one of the following buttons</h5>
                <br/>
                <button type="button" class="btn btn-danger" style = {{fontSize : 14}}><i class="zmdi zmdi-google"></i> Login with Google</button> &nbsp;
                <button type="button" class="btn btn-primary" style = {{fontSize : 14}}><i class="zmdi zmdi-facebook-box"></i> Login with Facebook</button> &nbsp;
                
            </div>
            <div className = "col-lg-6">
                <div className = "lsform">
                    <form method = "POST">
                        <div className="mb-3">                            
                            <input type="text" className="form-control" 
                            value = {user.name} onChange = {handleInputs}
                            placeholder = "Name" name = "name"/>
                        </div>
                        <div className="mb-3">                            
                            <input type="email" name = "email" 
                            value = {user.email} onChange = {handleInputs}
                            placeholder = "Email Address" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">                            
                            <input type="number" name = "phone" 
                            value = {user.phone} onChange = {handleInputs}
                            placeholder = "Phone Number" className="form-control"/>
                        </div>
                        <div className="mb-3">                           
                            <input type="password" name = "password" 
                            value = {user.password} onChange = {handleInputs}
                            placeholder = "Password" className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div className="mb-3">                            
                            <input type="password" name = "cpassword" 
                            value = {user.cpassword} onChange = {handleInputs}
                            placeholder = "Confirm Password" className="form-control" id="exampleInputCPassword1"/>
                        </div>                        
                        <button type="submit" onClick = {PostData} className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>            
        </div>
    </div>
    <div style = {{marginBottom : 150}}></div>
    </>
    )
}
export default Register
