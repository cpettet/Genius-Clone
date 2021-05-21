import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import { checkUserLogin } from "../src/store/session";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserLogin());
  }, [dispatch]);

  return (
    <Switch>
      <Route path="/login">
        <LoginFormPage />
      </Route>
      <Route path="/signup">
        <SignupFormPage />
      </Route>
    </Switch>
  );
}

export default App;
