import { jsx, css, keyframes } from "@emotion/css";
import styled from "@emotion/styled";
import color from "../app/color";
import Icon from "./Icon";
export default function Card({ title, type, content, state }) {
  const status = <p>{content}</p>
  const excel = <p>La base de datos excel, el cual debera de contener la informacion necesaria para la generacion de los planos individuales de servidumbre. </p>
  const autodesk = <p>La base de datos en formato dxf en version dxf: "2010/LT2010", el cual contiene el cajetin y bloques graficos. </p>
  const resources = <p>links para descarga de los recursos</p>
  const csv = <p>Carpeta en donde se localizan las delimitaciones de las areas de los afectados en formato csv</p>
  const download = <p>Directorio en donde se guardaran los archivos generados en formato dxf.</p>

  
  
  const setContent = {
    status: status,
    excel: excel,
    autodesk: autodesk,
    resources: resources,
    csv: csv,
    download: download
  }

  

  return (
    <StyleDiv type={type} state={state}>
      <div>
        <Icon type={type} />
        <h2>{title}</h2>
      </div>
      {state=="pending"&&<div className={css`
      animation:${bounce} 1s ease infinite;
      `
    }>
      <Icon type="load2"></Icon>
    </div>}
      {setContent[type]}
    </StyleDiv>
  );
}

const bounce = keyframes`
  from 0%, to {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(90deg);
  }

  50% {
    transform: rotate(180deg);;
  }

  100% {
    transform: rotate(360deg);
  }
`
const setIconColor ={
  ready:color.gris_text,
  failed:"red",
  succes:"green",
  pending:"purple"
}
const StyleDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.type == "status" ? "300px" : "368px")};
  height:${props => (props.type == "status" ? "204px" : "230px")};
  box-sizing: border-box;
  padding:28px 28px;
  border-radius: 4px;
  border: 1px solid #e5e5e5;
  background-color: "#fff";

  & div {
    display:flex;
    gap:10px;
    align-items:center;
    justify-content:center;
    & svg {
      height:48px;
      width:48px;
      fill: ${(props) => setIconColor[props.state] || color.gris_text};
    }
    & h2 {
      color: ${(props) => setIconColor[props.state] || color.gris_text};
      font-size:24px;
    }

  }

  & p {
    font-size: 14px;
    font-weight: 400;
    color: ${color.gris_text};
    text-align:justify;
    word-break: normal;
  }
`;
