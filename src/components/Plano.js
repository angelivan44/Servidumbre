import styled from "@emotion/styled";
import color from "../app/color";

import { useHistory } from "react-router";
import HeaderArea from "../components/HeaderArea";
import ItemList from "../components/ItemList";
import TabItem from "../components/TabItem";
import Card from "../components/Card";
import DescriptionArea from "../components/Description";
import { useState } from "react";

export default function Plano({paths, setPaths, documentsPath, setDocumentsPath }) {
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
            paths={paths}
            setPaths={setPaths}
            selected={itemSelect=="excel"}
            onClick={() => {
              setItemSelect("excel");
            }}
          ></TabItem>
          <TabItem
            type="autodesk"
            name="Dxf"
            status="ok"
            paths={paths}
            setPaths={setPaths}
            selected={itemSelect=="autodesk"}
            onClick={() => {
              setItemSelect("autodesk");
            }}
          ></TabItem>
          <TabItem
            type="csv"
            name="Csv"
            status="ok"
            paths={paths}
            setPaths={setPaths}
            selected={itemSelect=="csv"}
            onClick={() => {
              setItemSelect("csv");
            }}
          ></TabItem>
          <TabItem
            type="download"
            name="Exportacion"
            status="ok"
            paths={paths}
            setPaths={setPaths}
            selected={itemSelect=="download"}
            onClick={() => {
              setItemSelect("download");
            }}
          ></TabItem>
        </StyleTab>
        <div>
          <DescriptionArea type="plano" paths={paths}  documentsPath={documentsPath}></DescriptionArea>
        </div>
      </div>
      <div>
        <Card title={`Data ${itemSelect}`} type={itemSelect}></Card>
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
