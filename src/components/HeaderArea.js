import styled from "@emotion/styled";
import color from "../app/color";
export default function HeaderArea({src, name, email}) {
 
  return (
    <StyleDiv > 
     <img src={src}/>
     <h2>{name}</h2>
     <p>{email}</p>
    </StyleDiv>
  );
}


const StyleDiv = styled.div`
  display:flex;
  flex-direction:column;
  width: 256px;
  height: 172px;
  padding-left: 16px;
  padding-top: 40px;
  border-bottom:1px solid #E5E5E5;
  background-color: ${props => (props.selected ? color.blue_selected : "#fff" )};
  
  & img {
    width:40px;
    height:40px;
    border-radius: 50%;
    margin-bottom:24px ;
  }
  & h2 {
    font-size:20px;
    font-weight: 500;
    line-height:30px;
    margin:0;
  }

  & p {
    font-size: 14px;
    font-weight: 400;
    color:${color.gris_text}
  }

`
