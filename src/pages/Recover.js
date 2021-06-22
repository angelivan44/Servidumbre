import { useHistory } from "react-router";
import styled from "@emotion/styled";
import logo from '../assets/logo.svg'
import Input from "../components/Input";
import Button from "../components/Button";
import color from "../app/color";
import { fire } from "../firebase/firebase";
import { useState } from "react";
export default function Recover() {

  const history = useHistory()
  const [notification , setNotification] = useState("")

  const recoverPassword = (email) => {
    fire.auth().sendPasswordResetEmail(email).then(()=>{
      setNotification("we send a email")
    }).catch(error=>{
      setNotification(error.message)
    })
  }
 
  return (
    <StyleDiv>
      <img src={logo}/>
      <form>
        <Input type="email" label="Email" id="email"/>
        <Button type="submit" onClick={(e)=>{
          e.preventDefault();
          const form = e.target.closest('form');
          const {email} = form;
          recoverPassword(email.value)
        }}/>
      </form>
      <p>{notification}</p>
      <p onClick={()=>{
        history.push("/")
      }}>Login</p>
    </StyleDiv>
  );
}

const StyleDiv = styled.div`
width:720px;
height:500px;
border: 1px solid #e5e5e5;
display:flex;
flex-direction:column;
align-items:center;
margin:auto;
& img {
  margin-top: 50px;
  margin-bottom: 20px;
  width:200px;

}

& form {
  width: 260px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:10px;
}

& p {
  color: ${color.blue}
}

`