import { useHistory } from "react-router";
import styled from "@emotion/styled";
import logo from '../assets/logo.svg'
import Input from "../components/Input";
import Button from "../components/Button";
import color from "../app/color";
export default function Recover() {

  const history = useHistory()
 
  return (
    <StyleDiv>
      <img src={logo}/>
      <form>
        <Input type="email" label="Email"/>
        <Button type="submit"/>
      </form>
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