import { useHistory } from "react-router";
import styled from "@emotion/styled";
import logo from '../assets/logo 3.svg'
import Input from "../components/Input";
import Button from "../components/Button";
import color from "../app/color";
import { fire} from "../firebase/firebase";
import { useState } from "react";
export default function SignUp() {
  const history = useHistory()
  const [error, setError] = useState("")

  const signWithEmail  = (email, password, name , avatar) => {
    fire.auth().createUserWithEmailAndPassword(email, password)
    .then(result=>{
      const user = fire.auth().currentUser;
      const storage = fire.storage();
      if (avatar != null){
       const task =  storage.ref(`/avatars/${user.uid}`)
       .put(avatar)
       task.on("state_changed",
       s=>{console.log(s)},e=>{console.log(e)},
       ()=>{task.snapshot.ref.getDownloadURL().then(url => {
        user.updateProfile({
          displayName:name,
          photoURL:url
        })
        history.push("/")
       })})
      } else {
        user.updateProfile({
          displayName:name
        })
        history.push("/")
      }
       }).catch((error) => {
        setError(error.message)
       })
  }


  return (
    <StyleDiv>
      <img src={logo}/>
      <h2>Sign Up</h2>
      <form>
        <Input type="email" label="Email" id="email"/>
        <Input type="password" label="Password" id="password"/>
        <Input type="text" label="Name" id="name"/>
        <Input type="file" label="Avatar" id="avatar"/>
        <p>{error}</p>
        <Button onClick={(e)=>{
          e.preventDefault();
          const form = e.target.closest('form')
          console.log(form)
          const { email, password , name , avatar} = form;
          signWithEmail(email.value, password.value , name.value, avatar.files[0])
        }} type="submit"/>
      </form>
      <p onClick={()=>{
        history.push("/")
      }}>Login</p>
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
  margin-top: 10px;
  width:300px;
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
  color: ${color.blue};
  margin:10px;
}
& h2 {
  margin:5px;
}

`