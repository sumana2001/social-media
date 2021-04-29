import React,{useState} from "react";
import { Link, useHistory } from "react-router-dom";
import M from 'materialize-css';

const SignUp = () => {
  const history=useHistory()
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const PostData=()=>{
    fetch("/signup",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,
        email,
        password
      })
    }).then(res=>res.json())
    .then(data=>{
      if(data.error){
        M.toast({html: data.error,classes:"red darken-3"})
      }
      else{
        M.toast({html:data.message, classes:"green darken-1"})
        history.push('/signin')
      }
    }).catch(err=>{
      console.log(err);
    })
  }

  return (
    <div className="mycard">
      <div className="card auth-card">
        <h2>Aliferous</h2>
        <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button className="btn waves-effect waves-light" onClick={()=>PostData()}>Sign Up</button>
        <p>
          <Link to="/signin">Already have an account?</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
