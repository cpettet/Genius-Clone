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
    <div className={styles["profile-button__container"]}>
      <button className={styles["profile-button"]} onClick={openMenu}>
        <div className={styles.profile__container}>
          <i className="fas fa-user" />
        </div>
      </button>
      {showMenu && (
        <ul className={styles["profile-dropdown"]}>
          <li>Username: {user?.username}</li>
          <li>Email: {user?.email}</li>
          <li>
            <button onClick={logout}>Sign Out</button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default ProfileButton;
