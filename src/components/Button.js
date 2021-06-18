import styled from "@emotion/styled";
import color from "../app/color";
export default function Button({  type , content, onClick }) {
  return (
    <StyleButton type={type} onClick={onClick}>
      <h2>{ type? "Submit" : `Generar ${content}`}</h2>
    </StyleButton>
  );
}

const StyleButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
padding: 2px 10px;
box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
border-radius: 4px;
background-color: ${color.blue};

  & h2 {
    font-size: 14px;
    font-weight: 400;
    color: #fff;
    text-align:justify;
  }
`;
