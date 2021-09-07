import styled from "@emotion/styled";
import color from "../app/color";
import Button from "./Button";
import Icon from "./Icon";
export default function CardForm({ title, type, content }) {
  const status = <p>{content}</p>  
  const setCardForm = {
    user:<form>
    <p>Name</p>
    <input/>
    <p>Photo</p>
    <input type="file"/>
    <Button type="update">
    </Button>
  </form>,
    social:<ul>
      <li>Website</li>
    </ul>
  }
  return (
    <StyleDiv type={type}>
      <div>
        <Icon type={type} />
        <h2>{title}</h2>
      </div>
      <section>
        {setCardForm[type]}
      </section>
      
    </StyleDiv>
  );
}

const StyleDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.type == "status" ? "204px" : "368px")};
  height:${props => (props.type == "status" ? "204px" : "300px")};
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
  & section{
    display:flex;
    flex-direction: column;
    align-items:center;
    & form {
    font-size: 14px;
    font-weight: 400;
    width:200px;
    display:flex;
    flex-direction:column;
    color: ${color.gris_text};
    & p {
      margin:2px;
    }
    & input {
      margin:4px;
    }
  }
  }
  
`;
