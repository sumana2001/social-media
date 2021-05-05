import React, {useState,useContext} from "react";
import { Link,useHistory } from "react-router-dom";
import M from 'materialize-css';
import {UserContext} from '../App';

const SignIn = () => {
  const {state,dispatch}=useContext(UserContext)
  const history=useHistory()
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const PostData=()=>{
    fetch("/signin",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,
        password
      })
    }).then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.error){
        M.toast({html: data.error,classes:"red darken-3"})
      }
      else{
        localStorage.setItem("jwt",data.token)
        localStorage.setItem("user",JSON.stringify(data.user))
        dispatch({type:"USER",payload:data.user})
        M.toast({html:"Signed In", classes:"green darken-1"})
        history.push('/')
      }
    }).catch(err=>{
      console.log(err);
    })
  }
  return (
    <div className="mycard">
      <div className="card auth-card">
        <h2>Aliferous</h2>
        <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button className="btn waves-effect waves-light" onClick={()=>PostData()}>Sign In</button>
        <p>
          <Link to="/signup">Don't have an account?</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
