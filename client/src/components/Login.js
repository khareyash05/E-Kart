import React ,{useState} from "react"
import {useHistory} from "react-router-dom"


function Login(){
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')
    const loginUser = async (e) =>{
        e.preventDefault()
        const res = await fetch('/login', {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                email , password 
            })
        })
        const data = await res.json()
        if(res.status === 400 || !data){
            window.alert("Invalid Credentials")
            console.log("Invalid Credentials");
        }
        else {
            window.alert("Sign-In Successfull")
            console.log("Sign-In Successfull");
            history.push("/profile")
        }
    }
    return(
    <>
        <br/>
        <br/>
        <div className = "container">
            <div className = "row">
                <div className = "col-lg-6">
                    <div className = "lsform">
                        <form method = "POST">                        
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" name = "email" value = {email} onChange ={(e)=> {setEmail(e.target.value)}}/>                            
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" name = "password" value = {password} onChange ={(e)=> {setPassword(e.target.value)}} />                                        
                            <br/>
                            <button type="submit" onClick = {loginUser} class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
                <div style = {{marginTop : 70}} className = "col-lg-6">
                    <h1 style = {{fontFamily : "sans-serif" , textAlign : "center"}}>Hello User!!</h1>
                    <h5 style = {{fontFamily : "sans-serif" , textAlign : "center"}}>Long Time No See!! (Don't worry your secrets are safe with us <i class="zmdi zmdi-mood"></i>)</h5>
                </div>
            </div>
        </div>
      <div style = {{marginBottom : 200}}></div>  
    </>
    )
}
export default Login
