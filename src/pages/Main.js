import styled from "@emotion/styled";
import { useHistory } from "react-router";
import HeaderArea from "../components/HeaderArea";
import ItemList from "../components/ItemList";
import Plano from "../components/Plano";
import Dashboard from "../components/Dashboard";
import { useEffect, useState } from "react";
import Formato from "../components/Formato";
import { fire } from "../firebase/firebase";

export default function Main({loginUser, setLoginUser}) {
  const history = useHistory();
  const [view , setView] = useState("plano")
  const [userData, setUserData] = useState({
    displayName:"",
    email:"",
    photoURL:"",
  })

  const [documentsPath, setDocumentsPath] = useState(
    { contratoPath: "" ,
      reciboPath:"",
      valorizacionPath:"",
      autorizacionPath:"",
  });

  const [paths, setPaths] = useState(
    {urlExcel:"", 
    urlDxf:"",
    urlCsv:"", 
    urlDir:""})


  const viewElement = {
    dashboard : <Dashboard name={userData.displayName} src={userData.photoURL} email={userData.email}/>,
    plano: <Plano paths={paths} setPaths={setPaths} documentsPath={documentsPath} setDocumentsPath={setDocumentsPath}/>,
    formato:<Formato paths={paths} setPaths={setPaths} documentsPath={documentsPath} setDocumentsPath={setDocumentsPath}/>
  }

  useEffect(()=>{
    setUserData(loginUser)
  },[loginUser])

  const Logout = () => {
    fire.auth().signOut().then(()=> {
      setLoginUser({
        displayName:"",
        email:"",
        photoURL:"",
      })
      history.push("/")
    })
  }


  return (
    <StyleDiv>
      <aside>
        <HeaderArea name={userData.displayName} src={userData.photoURL} email={userData.email}></HeaderArea>
        <div>
          <ItemList selected={view==="dashboard"} text="Dashboard" type="home" onClick={()=>{setView("dashboard")}}></ItemList>
          <ItemList selected={view==="plano"}  text="Plano" type="autodesk" onClick={()=>{setView("plano")}}></ItemList>
          <ItemList selected={view==="formato"}  text="Formato" type="word" onClick={()=>{setView("formato")}}></ItemList>
          <ItemList   text="Logout" type="logout" onClick={()=>{Logout()}}></ItemList>
        </div>
      </aside>
      <StyleMain>
       {viewElement[view]}
      </StyleMain>
    </StyleDiv>
  );
}

const StyleDiv = styled.div`
  height: 500px;
  display: flex;
  border: 1px solid #e5e5e5;
  & aside {
    width: 256px;
    border: 1px solid #e5e5e5;
  }
`;
const StyleMain = styled.main`
  display: flex;
`;
const StyleTab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
