import { useState } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import DemoUserButton from "../DemoUserButton";
import "./login-form-page.css";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

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
        <DemoUserButton setErrors={setErrors} />
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

export default LoginForm;
