import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import SignUp from "./pages/Signup";
import Recover from "./pages/Recover"

  
function App() {
  return (
    <Router>
      <div>
        <Switch>
           <Route path="/main" component={Main}/>
           <Route path="/signup" component={SignUp}/>
           <Route path="/recover" component={Recover}/>
           <Route path="/" component={Login}/>
        </Switch>
        
      </div>

    </Router>
  );
}


export default App;
