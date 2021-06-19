import styled from "@emotion/styled";
import color from "../app/color";
import Icon from "./Icon";
export default function Card({ title, type, content }) {
  const status = <p>{content}</p>
  const excel = <p>La base de datos excel es la configuracion de los beneficiarios</p>
  const autocad = <p>La base de datos en formato dxf el cual contiene el cajetin</p>
  const resources = <p>aca se dejan los link para guia del usuario</p>
  const csv = <p>carpeta donde se guardan todos las areas de los usuarios</p>
  const download = <p>carpeta donde se exportaran los planos</p>

  
  
  const setContent = {
    status: status,
    excel: excel,
    autocad: autocad,
    resources: resources,
    csv: csv,
    download: download
  }

  return (
    <StyleDiv type={type}>
      <div>
        <Icon type={type} />
        <h2>{title}</h2>
      </div>
      {setContent[type]}
    </StyleDiv>
  );
}

const StyleDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.type == "status" ? "204px" : "368px")};
  height:${props => (props.type == "status" ? "204px" : "230px")};
  box-sizing: border-box;
  padding:28px 28px;
  border-radius: 4px;
  border: 1px solid #e5e5e5;
  background-color: ${(props) =>
    props.selected ? color.blue_selected : "#fff"};

  & div {
    display:flex;
    gap:10px;
    align-items:center;
    justify-content:center;
    & svg {
      height:48px;
      width:48px;
      fill: ${color.gris_text};
    };
    & h2 {
      color: ${color.gris_text};
      font-size:24px;
    }

  }

  & p {
    font-size: 14px;
    font-weight: 400;
    color: ${color.gris_text};
    text-align:justify;
  }
`;
