import styled from "@emotion/styled";
import color from "../app/color";
import Icon from "./Icon";
export default function TabFormato({ selected , name, onClick}) {
 
  return (
    <StyleDiv selected={selected} onClick={onClick} > 
     <h2>{name}</h2>
    </StyleDiv>
  );
}


const StyleDiv = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height: 48px;
  padding:16px;
  box-sizing:border-box;
  border-bottom: ${props => (props.selected ? `2px solid ${color.blue}`: "2px solid #E5E5E5" )};
  color:${props => (props.selected ? `${color.blue}`: `${color.gris_text}` )};
  & h2 {
    font-size: 14px;
    font-weight: 500;
    margin:0;
    
  }

  &:hover {
    background-color:${color.gris_hover};

  }

`
