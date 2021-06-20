import styled from "@emotion/styled";
import { useEffect } from "react";
import color from "../app/color";
import Icon from "./Icon";
export default function TabItem({type , name , status, selected, onClick, setPaths , paths}) {
  const { ipcRenderer } = window.require("electron");
  const setItemPath = {
    excel:"urlExcel",
    autodesk:"urlDxf",
    csv:"urlCsv",
    download:"urlDir"
  }
  const openDialog = (extension)=>{
    ipcRenderer.send('openDialog',{data:extension})
    ipcRenderer.on('replyDialog',(e,d)=>{
      setPaths({...paths,[setItemPath[type]]:d.filepath})
      })
  }

 
  const setExtension = {
    excel:"xlsx",
    autodesk:"dxf",
    csv:"csv",
    download:"csv"
  }

 return (
    <StyleDiv selected={selected} onClick={onClick}> 
     <Icon type={type} onClick={()=>{openDialog(setExtension[type])}}></Icon>
     <h2>{name}</h2>
     <p>{status}</p>
    </StyleDiv>
  );
}


const StyleDiv = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  gap:8px;
  align-items:center;
  width: 156px;
  height: 140px;
  border:1px solid #E5E5E5;
  background-color: ${props => (props.selected ? color.blue : "#fff" )};
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 6px 10px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  
  & svg {
    width:48px;
    height:48px;
    margin:0;
    cursor: pointer;
    fill: ${props => (props.selected ? "#fff" : color.gris_text)}
  }
  & h2 {
    font-size:20px;
    font-weight: 500;
    line-height:30px;
    margin:0;
    color: ${props => (props.selected ? "#fff" : color.gris_text)};
  }

  & p {
    font-size: 14px;
    font-weight: 400;
    color:${props => (props.selected ? "#fff" : color.gris_text)};
    margin:0;
    
  }
  &:hover{
    background-color:${color.gris_hover};
  }
`
