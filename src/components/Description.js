import styled from "@emotion/styled";
import color from "../app/color";
import Button from "./Button";
import Card from "./Card";
import plano from '../assets/plano.svg';
import autorizacion from '../assets/autorizacion.svg';
import contrato from '../assets/contrato.svg';
import recibo from '../assets/recibo.svg';
import valorizacion from '../assets/valorizacion.svg';

export default function DescriptionArea({ name, email, type}) {
 
  const setImage ={
    plano: plano,
    autorizacion:autorizacion,
    contrato: contrato,
    recibo:recibo,
    valorizacion:valorizacion,
  }


  return (
    <StyleDiv > 
     <h2>{`Generador de ${type}`}</h2>
     <div>
       <img src={setImage[type]}/>
       <div>
         <Card title="STATUS" type="status" content="esto es uno de prueba asdasd asdasd asdasd asdas asdsd s ds asdasds"></Card>
         <Button selected={false} content={type}></Button>
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
