import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import color from "../app/color";
import { fire } from "../firebase/firebase";
import Button from "./Button";
import Icon from "./Icon";
import Input from "./Input";
export default function CardForm({ title, type, content ,setUserData}) {
  const history = useHistory()
  const [nameForm , setnameForm] = useState("")
  useEffect(()=>{
    const userEffect = fire.auth().currentUser;
    setnameForm(userEffect.displayName)
  },[])
  const updateUser = (name, avatar) =>{
    const user = fire.auth().currentUser;
    const storage = fire.storage();
    if (avatar != null){
      const task =  storage.ref(`/avatars/${user.uid}`)
      .put(avatar)
      task.on("state_changed",
      s=>{console.log(s)},e=>{console.log(e)},
      ()=>{task.snapshot.ref.getDownloadURL().then(url => {
       user.updateProfile({
         displayName:name,
         photoURL:url
       }).then(()=>{
          const userUpdate = fire.auth().currentUser;
          setUserData({
            displayName:userUpdate.displayName,
            email:userUpdate.email,
            photoURL:userUpdate.photoURL
          })
          })
        })
       })

  }else{
    user.updateProfile({
      displayName:name
    }).then((s)=>{
      const userUpdate = fire.auth().currentUser;
      setUserData({
        displayName:userUpdate.displayName,
        email: userUpdate.email,
        photoURL: userUpdate.photoURL
      })
    }
      )
  }
}
  
  const status = <p>{content}</p>  
  const setCardForm = {
    user:<form>
    <Input label="Name" id="name" kind="update" value={nameForm} onChange={(e)=>{
      const value = e.target.value
      setnameForm(value)
    }}/>
    <Input type="file" label="Avatar" id="avatar" kind="update"/>
    <Button type="update" onClick={(e)=>{
      e.preventDefault();
      const form = e.target.closest('form')
      const {name, avatar} = form;
      updateUser(name.value,avatar.files[0])
    }}>
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

  & > div {
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
    };

  }
 
`;
