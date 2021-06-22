import styled from "@emotion/styled";
import color from "../app/color";
export default function Input({ type, label , id }) {


  return (
    <StyleDiv>
      <label>{label}</label>
      <input type={type} placeholder={type} id={id}/>
    </StyleDiv>
  );
}

const StyleDiv = styled.div`
display:flex;
flex-direction:column;
width:260px;
box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
border-radius: 4px;

  & label {
    font-size: 14px;
    font-weight: 400;
    padding:5px;
  }

  & input {
    height:40px;
    ::-webkit-file-upload-button{
      padding:5px;
      border-radius:20px;
      width:150px;
      height:40px;
    }
  }
`;
