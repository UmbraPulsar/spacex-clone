import Logo from '../Logo/Logo';
import DesktopNavigation from '../DesktopNavigation/DesktopNavigation';
import MenuButton from '../MenuButton/Menu';
import styles from './PageHeader.module.css';
const PageHeader = () => {
	return (
		<header className={styles.Page__Header}>
			<Logo />
			<DesktopNavigation />
			<MenuButton />
		</header>
	);
};

export default PageHeader;
