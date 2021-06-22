import styled from "@emotion/styled";

import { useHistory } from "react-router";
import Card from "../components/Card";
import DescriptionArea from "../components/Description";
import TabFormato from "./TabFormato";
import { useState } from "react";

export default function Formato({documentsPath,setDocumentsPath, paths}) {
  const history = useHistory();
  const [itemFormat, setItemFormat] = useState("contrato");


  return (
    <>
      <div>
        <StyleTab>
          <TabFormato
            selected={true}
            name="CONTRATOS"
            type="contrato"
            documentsPath={documentsPath}
            setDocumentsPath={setDocumentsPath}
            selected={itemFormat == "contrato"}
            onClick={() => {
              setItemFormat("contrato");
            }}
          ></TabFormato>
          <TabFormato
            name="RECIBOS"
            type="recibo"
            documentsPath={documentsPath}
            setDocumentsPath={setDocumentsPath}
            selected={itemFormat == "recibo"}
            onClick={() => {
              setItemFormat("recibo");
            }}
          ></TabFormato>
          <TabFormato
            name="VALORIZACION"
            type="valorizacion"
            documentsPath={documentsPath}
            setDocumentsPath={setDocumentsPath}
            selected={itemFormat == "valorizacion"}
            onClick={() => {
              setItemFormat("valorizacion");
            }}
          ></TabFormato>
          <TabFormato
            name="AUTORIZACION"
            type="autorizacion"
            documentsPath={documentsPath}
            setDocumentsPath={setDocumentsPath}
            selected={itemFormat == "autorizacion"}
            onClick={() => {
              setItemFormat("autorizacion");
            }}
          ></TabFormato>
        </StyleTab>
        <div>
          <DescriptionArea type={itemFormat} paths={paths}  documentsPath={documentsPath} ></DescriptionArea>
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
