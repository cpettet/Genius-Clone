import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styles from "./profile-button.module.css";
import * as sessionActions from "../../store/session";

const ProfileButton = ({user}) => {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  }

  useEffect(() => {
    if (!showMenu) return;
    
    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = e => {
    e.preventDefault();
    dispatch(sessionActions.logoutUser());
  };

  return (
    <>
      <button onClick={openMenu}>
        <div className={styles.profile__container}>
          <i className="fas fa-user" />
        </div>
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li>{user.user.username}</li>
          <li>{user.user.email}</li>
          <li>
            <button onClick={logout}>Sign Out</button>
          </li>
        </ul>
      )}
    </>
  );
};

export default ProfileButton;
