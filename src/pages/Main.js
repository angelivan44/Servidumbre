import { useHistory } from "react-router";

export default function Main() {

  const history = useHistory()
 
  return (
    <div>
      <p>esta es la vista main</p>
      <button onClick={()=>{history.push("/")}}></button>
    </div>
  );
}
