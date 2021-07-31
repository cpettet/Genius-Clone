import { Link } from "react-router-dom"
import styles from "./Error404.module.css"

const Error404 = () => {
    return (
        <div className={styles.error}>
            <h1 className={styles.error__header}>Oops! Page not found</h1>
            <p className={styles.error__text}>Sorry, we didn't mean for that to happen!</p>
            <p className={styles.error__text}>You can search Folk Genius by using the search bar above, or <Link to="/">go back to the homepage</Link>.</p>
        </div>
    )
}

export default Error404;