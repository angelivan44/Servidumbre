import styled from "@emotion/styled";
import color from "../app/color";
import Button from "./Button";
import Card from "./Card";
import plano from '../assets/plano.svg';
import autorizacion from '../assets/autorizacion.svg';
import contrato from '../assets/contrato.svg';
import recibo from '../assets/recibo.svg';
import valorizacion from '../assets/valorizacion.svg';
import { generarAutorizacion, generarConntrato, generarRecibo, generarValorizacion, generatePlanos } from "../service/planos_service";
import { useState } from "react";
import images from "../app/images";

export default function DescriptionArea({ name, email, type, paths, documentsPath}) {
  const {urlExcel,urlDxf, urlCsv ,urlDir} = paths;
  const {contratoPath, reciboPath, valorizacionPath, autorizacionPath } = documentsPath;
  const setImage = {
    plano: images.plano,
    autorizacion:images.autorizacion,
    contrato: images.contrato,
    recibo:images.recibo,
    valorizacion:images.valorizacion,
  }

  const [result, setResult] = useState("")
  const [status, setStatus] = useState("ready")
  let response = ""

  const  sendPython = async ()=>{
    setStatus("pending")
    switch (type) {
      case "plano":
        response = await generatePlanos(urlExcel, urlDxf, urlCsv, urlDir)
        setResult(response)
        response != "Finish Job"? setStatus("failed"):setStatus("success")
        break;
      case "autorizacion":
        response = await generarAutorizacion(urlExcel, autorizacionPath, urlDir)
        setResult(response)
        response != "Finish Job"? setStatus("failed"):setStatus("success")
        break;
      case "contrato":
        response = await generarConntrato(urlExcel, contratoPath,urlDir )
        setResult(response)
        response != "Finish Job"? setStatus("failed"):setStatus("success")
        break;
      case "recibo":
        response = await generarRecibo(urlExcel, reciboPath, urlDir )
        setResult(response)
        response != "Finish Job"? setStatus("failed"):setStatus("success")
        break;
      case "valorizacion":
        response = await generarValorizacion(urlExcel, valorizacionPath, urlDir )
        setResult(response)
        response != "Finish Job"? setStatus("failed"):setStatus("success")
        break;
    }
  }

  return (
    <StyleDiv > 
     <h2>{`Generador de ${type}`}</h2>
     <div>
       {setImage[type]}
       <div>
         <Card title="STATUS" type="status" content={result} state={status}></Card>
         <Button selected={false} content={type} type="normal" onClick={()=>{sendPython()}} state={status}></Button>
       </div>
     </div>
     <h2>{name}</h2>
     <p>{email}</p>
    </StyleDiv>
  );
}


const StyleDiv = styled.div`
  width: 720px;
  padding:40px 40px;
  max-height: 350px;
  box-sizing:border-box;
  border:1px solid #E5E5E5;
  background-color: ${props => (props.selected ? color.blue_selected : "#fff" )};
  & > div {
    display:flex;
    justify-content:space-between;
    & > div {
      display:flex;
      flex-direction:column;
      justify-content:space-between;
      gap:5px;
    }
  };

  & img {
    height:200px;
    width:300px;
  }
  & > h2 {
    font-size:20px;
    font-weight: 500;
    line-height:30px;
    text-align:center;
    color:${color.gris_text}
  }

  & p {
    font-size: 14px;
    font-weight: 400;
    color:${color.gris_text}
  }

`
