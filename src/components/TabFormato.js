import styled from "@emotion/styled";
import color from "../app/color";
import Icon from "./Icon";
const { ipcRenderer } = window.require("electron");

export default function TabFormato({ selected , name, onClick,type,documentsPath,setDocumentsPath}) {
  const setFilePath = {
    contrato:"contratoPath",
    recibo:"reciboPath",
    valorizacion:"valorizacionPath",
    autorizacion:"autorizacionPath"
  }


  const sendOpenFormarDialog = (extension) => {
    ipcRenderer.send('openDialog',{data:extension})
    ipcRenderer.on('replyDialog',(e,d)=>{
      setDocumentsPath({...documentsPath,[setFilePath[type]]:d.filepath})
      })
  }

  return (
    <StyleDiv selected={selected} onClick={onClick} > 
     <h2>{name}</h2>
     {selected && <Icon type="plus" onClick={()=>{sendOpenFormarDialog("docx")}}></Icon>}
    </StyleDiv>
  );
}


const StyleDiv = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  gap:5px;
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

  & svg {
    cursor: pointer;
  }

`
