import { Route, Switch } from "react-router-dom";
import "./App.css";
import Admin from "./page/admin/admin";
import Mintpage from "./page/mintpage/mintpage";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Mintpage />
        </Route>
        <Route path="/shawadmin">
          <Admin />
        </Route>
      </Switch>
    </>
  );
}

export default App;
