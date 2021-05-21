import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./login-form-page.css";

const LoginFormPage = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.loginUser({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>sign in</h1>
      <h2
        className={
          errors.length > 0 ? "form__error-header" : "form__error-header hidden"
        }
      >
        Errors
      </h2>
      <ul className={errors.length > 0 ? "errors" : "errors hidden"}>
        {errors.map((error, id) => (
          <li key={id}>{error}</li>
        ))}
      </ul>
      <div className="input-container form__credential">
        <label htmlFor="credential">Username</label>
        <input
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          type="text"
          placeholder="AzureDiamond"
        />
      </div>
      <div className="input-container form__password">
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="hunter2"
        />
      </div>
      <div className="input-container form__buttons">
        <button className="submit">Login</button>
        <button className="demo">Demo User</button>
      </div>
      <p className="signup">
        Don't have an account?{" "}
        <span className="hyperlink">
          <a href="/signup">Sign up here.</a>
        </span>
      </p>
    </form>
  );
};

export default LoginFormPage;
