import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import ProfileButton from "../ProfileButton";
import style from "./navigation.module.css";

const Navigation = ({ isLoaded }) => {
  const sessionUser = useSelector((state) => state.session.user);
  console.log(`User: ${sessionUser}\nIs loaded: ${isLoaded}`)
  let sessionLinks;

  if (sessionUser) {
    sessionLinks = (
      <>
        <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to="/signup">sign up</NavLink>
        <NavLink to="/login">sign in</NavLink>
      </>
    );
  }

  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
          {isLoaded && sessionLinks}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
