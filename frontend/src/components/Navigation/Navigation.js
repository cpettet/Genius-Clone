import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import ProfileButton from "../ProfileButton";
import style from "./navigation.module.css";
import logo from "./logo.svg";

const Navigation = ({ isLoaded }) => {
  const [searchTerms, setSearchTerms] = useState("");
  const sessionUser = useSelector((state) => state.session?.user);

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
  };

  return (
    <nav className={style.navbar}>
      <div className={style.navbar__upper}>
        <form onSubmit={submitSearch} className={style.navbar__search}>
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
        <div className={style.logo__container}>
          <NavLink exact to="/">
            <img className={style.logo} src={logo} alt="logo" />
          </NavLink>
        </div>
        {isLoaded && sessionLinks}
      </div>
      <div className={style.navbar__lower}>
        <div className={style.navbar__lower__centering__container}>
          <Link to="/" className={style.nav__link}>
            <div className={style.navbar__lower__container}>charts</div>
          </Link>
          {sessionUser && (
            <Link to="/tracks/new" className={style.nav__link}>
              <div className={style.navbar__lower__container}>add a song</div>
            </Link>
          )}
          <a href="https://www.github.com/cpettet" className={style.nav__link}>
            <div className={style.navbar__lower__container}>
              <i className="fab fa-github"></i>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/christianpettet/"
            className={style.nav__link}
          >
            <div className={style.navbar__lower__container}>
              <i className="fab fa-linkedin"></i>{" "}
            </div>
          </a>
          <a href="mailto:cpettet11@gmail.com" className={style.nav__link}>
            <div className={style.navbar__lower__container}>
              <i className="fas fa-envelope-square"></i>
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
