import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import * as sessionActions from "../../store/session";
import "./signup-form-page.module.css";

export default function SignupFormPage() {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    if (password !== confirmPassword) {
      return setErrors(["Passwords do not match"]);
    }
    return dispatch(
      sessionActions.signupUser({ username, email, password })
    ).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
    });
  };

  // need buttons for submit, demo, login page
  return (
    <form onSubmit={handleSubmit}>
      <h1>sign up</h1>
      <h2>and show off your genius</h2>
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
      <div className={"input-container"}>
        <label htmlFor="username">Genius Nickname</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="AzureDiamond"
        />
      </div>
      <div className={"input-container"}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="quote244321@bash.org"
        />
      </div>
      <div className="input-container">
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="hunter2"
        />
      </div>
      <div className="input-container">
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          placeholder="hunter2"
        />
      </div>
      <div className="input-container form__buttons">
        <button className="submit">Create Account</button>
        <button className="demo">Demo User</button>
      </div>
      <p className="login">
        Already an account?{" "}
        <span className="hyperlink">
          <a href="/login">Sign in here.</a>
        </span>
      </p>
    </form>
  );
}
