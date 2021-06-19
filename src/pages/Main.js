import styled from "@emotion/styled";
import { useHistory } from "react-router";
import HeaderArea from "../components/HeaderArea";
import ItemList from "../components/ItemList";
import Plano from "../components/Plano";
import Dashboard from "../components/Dashboard";
import { useState } from "react";
import Formato from "../components/Formato";

export default function Main() {
  const history = useHistory();
  const [view , setView] = useState("formato")
  const viewElement = {
    dashboard : <Dashboard/>,
    plano: <Plano/>,
    formato:<Formato/>
  }

  return (
    <StyleDiv>
      <aside>
        <HeaderArea name="Angel"></HeaderArea>
        <div>
          <ItemList selected={view==="dashboard"} text="Dashboard" type="home" onClick={()=>{setView("dashboard")}}></ItemList>
          <ItemList selected={view==="plano"}  text="Plano" type="autodesk" onClick={()=>{setView("plano")}}></ItemList>
          <ItemList selected={view==="formato"}  text="Formato" type="word" onClick={()=>{setView("formato")}}></ItemList>
          <ItemList   text="Logout" type="logout" onClick={()=>{history.push("/")}}></ItemList>
        </div>
      </aside>
      <StyleMain>
       {viewElement[view]}
      </StyleMain>
    </StyleDiv>
  );
}

const StyleDiv = styled.div`
  height: 500px;
  display: flex;
  border: 1px solid #e5e5e5;
  & aside {
    width: 256px;
    border: 1px solid #e5e5e5;
  }
`;
const StyleMain = styled.main`
  display: flex;
`;
const StyleTab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
