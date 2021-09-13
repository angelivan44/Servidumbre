import styled from "@emotion/styled";
import color from "../app/color";

import { useHistory } from "react-router";
import HeaderArea from "../components/HeaderArea";
import ItemList from "../components/ItemList";
import TabItem from "../components/TabItem";
import Card from "../components/Card";
import DescriptionArea from "../components/Description";
import avatar from '../assets/avatar.png'
import CardForm from "./CardForm";

export default function Dashboard({name, src,email, setUserData }) {
  const history = useHistory();

  return (
    <>
      <StyleDiv>
        <StyleImg src={src}/>
        <h2>{name}</h2>
        <p>{email}</p>
      </StyleDiv>
      <div>
        <CardForm title="Profile" type="user" setUserData={setUserData}></CardForm>
        <CardForm title="Social Media Program" type="social"></CardForm>
      </div>
    </>
  );
}

const StyleImg = styled.img`
  width:213px;
  height:213px;
  border-radius:50%;
`
const StyleDiv = styled.div`
width:720px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`