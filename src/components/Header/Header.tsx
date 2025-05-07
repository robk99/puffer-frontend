import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    const location = useLocation();
    const isActive = (path: string) => location.pathname === path;

    return (
        <header className={styles.appHeader}>
            <div className={`${styles.navContainer}`}>
                <Link className="" to="/">
                    <img
                        src="/puffer-logo-white.svg"
                        alt="Puffer Finance"
                        width="132"
                        height="40"
                    />
                </Link>
                <div className={styles.innerNavContainer}>
                    <div className="display: flex;">
                        <div className="display: flex; flex-direction: row;">
                            <Link
                                to="/conversion-rate"
                                className={`${styles.navButton} ${isActive('/conversion-rate') ? styles.navButtonActive : ''}`}
                            >
                                Conversion Rate
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
