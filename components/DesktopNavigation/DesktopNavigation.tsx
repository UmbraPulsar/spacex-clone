import Link from 'next/link';
import styles from './DesktopNavigation.module.css';
const DesktopNavigation = () => {
	return (
		<nav className={styles.Page__Desktop__Navigation}>
			<ul>
				<li>
					<Link href='/falcon_9'>
						<a>Falcon 9</a>
					</Link>
				</li>
				<li>
					<Link href='/falcon_heavy'>
						<a>Falcon Heavy</a>
					</Link>
				</li>
				<li>
					<Link href='/dragon'>
						<a>Dragon</a>
					</Link>
				</li>
				<li>
					<Link href='#'>
						<a>Starship</a>
					</Link>
				</li>
				<li>
					<Link href='#'>
						<a>Human spaceflight</a>
					</Link>
				</li>
				<li>
					<Link href='#'>
						<a>Rideshare</a>
					</Link>
				</li>
				<li>
					<Link href='#'>
						<a>starlink</a>
					</Link>
				</li>
				<li>
					<Link href='#'>
						<a>shop</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default DesktopNavigation;
