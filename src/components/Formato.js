import styled from "@emotion/styled";
import color from "../app/color";

import { useHistory } from "react-router";
import HeaderArea from "../components/HeaderArea";
import ItemList from "../components/ItemList";
import TabItem from "../components/TabItem";
import Card from "../components/Card";
import DescriptionArea from "../components/Description";
import TabFormato from "./TabFormato";
import { useState } from "react";

export default function Formato() {
  const history = useHistory();
  const [itemFormat, setItemFormat] = useState("contrato");

  return (
    <>
      <div>
        <StyleTab>
          <TabFormato
            selected={true}
            name="CONTRATOS"
            status="ok"
            selected={itemFormat == "contrato"}
            onClick={() => {
              setItemFormat("contrato");
            }}
          ></TabFormato>
          <TabFormato
            name="RECIBOS"
            status="ok"
            selected={itemFormat == "recibo"}
            onClick={() => {
              setItemFormat("recibo");
            }}
          ></TabFormato>
          <TabFormato
            name="VALORIZACION"
            status="ok"
            selected={itemFormat == "valorizacion"}
            onClick={() => {
              setItemFormat("valorizacion");
            }}
          ></TabFormato>
          <TabFormato
            name="AUTORIZACION"
            status="ok"
            selected={itemFormat == "autorizacion"}
            onClick={() => {
              setItemFormat("autorizacion");
            }}
          ></TabFormato>
        </StyleTab>
        <div>
          <DescriptionArea type={itemFormat}></DescriptionArea>
        </div>
      </div>
      <div>
        <Card title="Data Excel" type={itemFormat}></Card>
        <Card title="Resources" type="resources"></Card>
      </div>
    </>
  );
}

const StyleTab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;
