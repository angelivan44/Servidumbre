import { useHistory } from "react-router";
import styled from "@emotion/styled";
import logo from '../assets/logo 3.svg'
import Input from "../components/Input";
import Button from "../components/Button";
import color from "../app/color";
import { fire } from "../firebase/firebase";
import { useEffect, useState } from "react";
export default function Login({setLoginUser, loginUser}) {



const history = useHistory()
const [error, setError] = useState("")
 
useEffect(()=>{
  if(loginUser.displayName){
    history.push("/main")
  }
  console.log(loginUser)
},[loginUser])




  const signWithEmail  = (email, password) => {
    fire.auth().signInWithEmailAndPassword(email, password).then(result => {
      const photo = result.user.photoURL || "https://i.stack.imgur.com/l60Hf.png"
      setLoginUser({...result.user,photoURL:photo})
    }).catch((error)=>{
      setError(error.message)
    })
  }


  return (
    <StyleDiv>
      <img src={logo}/>
      <h2>Login</h2>
      <form>
        <Input type="email" label="Email" id="email"/>
        <Input type="password" label="Password" id="password"/>
        <p>{error}</p>
        <Button onClick={(e)=>{
          e.preventDefault();
          const form = e.target.closest('form');
          const {email , password} = form;
          signWithEmail(email.value, password.value)
          }} type="submit"/>
      </form>
      <p onClick={()=>{
        history.push("/signup")
      }}>Sign Up</p>
      <p onClick={()=>{
        history.push("/recover")
      }}>Forgot my Password</p>
    </StyleDiv>
  );
}

const StyleDiv = styled.div`
width:720px;
height:600px;
border: 1px solid #e5e5e5;
display:flex;
flex-direction:column;
align-items:center;
margin:auto;
& img {
  width:300px;
  margin-top:20px;
}

& form {
  width: 260px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:5px;
}

& p {
  color: ${color.blue}
}

`