import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import SignUp from "./pages/Signup";
import Recover from "./pages/Recover"
import { useState } from "react";

  
function App() {

  const [loginUser , setLoginUser] = useState({
    displayName:"",
    email:"",
    photoURL:"",
  })

  return (
    <Router>
      <div>
        <Switch>
           <Route path="/main" render={props => <Main {...props} loginUser={loginUser} setLoginUser={setLoginUser}/>}/>
           <Route path="/signup" component={SignUp}/>
           <Route path="/recover" component={Recover}/>
           <Route path="/" render={props => <Login {...props} loginUser={loginUser} setLoginUser={setLoginUser}/>}/>
        </Switch>
        
      </div>

    </Router>
  );
}


export default App;
