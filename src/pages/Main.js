import styled from "@emotion/styled";
import color from "../app/color";

import { useHistory } from "react-router";
import HeaderArea from "../components/HeaderArea";
import ItemList from "../components/ItemList";

export default function Main() {

  const history = useHistory()
 
  return (
    <StyleDiv>
      <aside>
        <HeaderArea name="Angel"></HeaderArea>
        <div>
          <ItemList text="Dashboard" type="home"></ItemList>
          <ItemList text="Plano" type="autodesk"></ItemList>
          <ItemList text="Formato" type="word"></ItemList>
        </div>
      </aside>
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
  margin-top: 10px;
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