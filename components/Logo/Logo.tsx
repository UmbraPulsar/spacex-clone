import styles from './Logo.module.css';
import Link from 'next/link';
const Logo = () => {
	return (
		<div className={styles.Page__Logo}>
			<Link href='/'>
				<a>
					<img src='/img/logo.png' alt='' />
				</a>
			</Link>
		</div>
	);
};
export default Logo;
