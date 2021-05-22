import { useState } from "react"
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import ProfileButton from "../ProfileButton";
import style from "./navigation.module.css";
import logo from "./logo.svg";

const Navigation = ({ isLoaded }) => {
  const [searchTerms, setSearchTerms] = useState("")
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <div>
        <LoginFormModal />
        <SignupFormModal />
      </div>
    );
  }

  const submitSearch = (e) => {
    e.preventDefault();
    /**
     * CURRENTLY A PLACEHOLDER FOR STYLING
     * WILL BUILD OUT EVENTUALLY
     * PLEASE COME BACK TO ME
     */
  }

  return (
    <nav className={style.navbar}>
      <form
        onSubmit={submitSearch}
        className={style.navbar__search}>
        <div>
          <input
            value={searchTerms}
            onChange={(e) => setSearchTerms(e.target.value)}
            placeholder="Search tracks & more"
            type="search"
          />
        </div>
        <button className={style.search__button}>
          <i className="fas fa-search" />
        </button>
      </form>
      <div className={style.logo}>
        <NavLink exact to="/">
          <img className={style.logo} src={logo} alt="logo" />
        </NavLink>
      </div>
      {isLoaded && sessionLinks}
    </nav>
  );
};

export default Navigation;
