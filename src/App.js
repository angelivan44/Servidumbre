import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";



function App() {
  return (
    <Router>
      <div>
        <Switch>
           <Route path="/main" component={Main}/>
           <Route path="/" component={Login}/>
        </Switch>
        
      </div>

    </Router>
  );
}


export default App;
