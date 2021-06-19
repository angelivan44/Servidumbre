import styled from "@emotion/styled";
import color from "../app/color";
import Icon from "./Icon";
export default function ItemList({text , type , selected , onClick}) {
 
  return (
    <StyleDiv selected={selected} onClick={onClick}> 
      <Icon type={type}></Icon>
      <p>{text}</p>
    </StyleDiv>
  );
}


const StyleDiv = styled.div`
  display:flex;
  width: 256px;
  height: 40px;
  align-items: center;
  padding: 8px 8px;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: ${props => (props.selected ? color.blue_selected : "#fff" )};
  gap:32px;
  &   svg {
    fill:${props =>  ( props.selected ? color.blue :  color.gris_text)};
    font-size:24px;
  }
  ;

  &  p {
    font-size:14px;
    font-weight: 500;
    color:${ props => (props.selected ? color.blue : color.gris_text)}
  }

  &:hover {
    background-color:${color.gris_hover};
    & svg {
      fill: ${color.gris_text}
    }

    & p {
      color: ${color.gris_text}
    }
  }

`
