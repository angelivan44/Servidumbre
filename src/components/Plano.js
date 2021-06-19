import styled from "@emotion/styled";
import color from "../app/color";

import { useHistory } from "react-router";
import HeaderArea from "../components/HeaderArea";
import ItemList from "../components/ItemList";
import TabItem from "../components/TabItem";
import Card from "../components/Card";
import DescriptionArea from "../components/Description";
import { useState } from "react";

export default function Plano() {
  const [itemSelect, setItemSelect] = useState("excel");
  const history = useHistory();

  return (
    <>
      <div>
        <StyleTab>
          <TabItem
            type="excel"
            name="Excel"
            status="ok"
            selected={itemSelect=="excel"}
            onClick={() => {
              setItemSelect("excel");
            }}
          ></TabItem>
          <TabItem
            type="autodesk"
            name="Dxf"
            status="ok"
            selected={itemSelect=="autodesk"}
            onClick={() => {
              setItemSelect("autodesk");
            }}
          ></TabItem>
          <TabItem
            type="csv"
            name="Csv"
            status="ok"
            selected={itemSelect=="csv"}
            onClick={() => {
              setItemSelect("csv");
            }}
          ></TabItem>
          <TabItem
            type="download"
            name="Exportacion"
            status="ok"
            selected={itemSelect=="download"}
            onClick={() => {
              setItemSelect("download");
            }}
          ></TabItem>
        </StyleTab>
        <div>
          <DescriptionArea type="plano"></DescriptionArea>
        </div>
      </div>
      <div>
        <Card title="Data Excel" type={itemSelect}></Card>
        <Card title="Resources" type="resources"></Card>
      </div>
    </>
  );
}

const StyleTab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
