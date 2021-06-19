import styled from "@emotion/styled";
import color from "../app/color";

import { useHistory } from "react-router";
import HeaderArea from "../components/HeaderArea";
import ItemList from "../components/ItemList";
import TabItem from "../components/TabItem";
import Card from "../components/Card";
import DescriptionArea from "../components/Description";
import avatar from '../assets/avatar.png'

export default function Dashboard() {
  const history = useHistory();

  return (
    <>
      <StyleDiv>
        <StyleImg src={avatar}/>
        <h2>Angel Huayas</h2>
        <p>angelhuayas@gmail.components</p>
        <p>account create was 10 month ago</p>
      </StyleDiv>
      <div>
        <Card title="Profile" type="user"></Card>
        <Card title="Social Media" type="social"></Card>
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