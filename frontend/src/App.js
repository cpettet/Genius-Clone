import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginFormPage from "./components/LoginFormPage";
import { checkUserLogin } from "../src/store/session";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserLogin());
  }, []);

  return (
    <Switch>
      <Route path="/login">
        <LoginFormPage />
      </Route>
    </Switch>
  );
}

export default App;
