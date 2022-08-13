import styles from './Footer.module.css';
import Link from 'next/link';
const Footer = () => {
	return (
		<footer className={styles.Footer}>
			<p className={styles.Footer__Copy}>
				SpaceX &copy; All Rights Reserved
			</p>
			<ul className={styles.Footer__Social}>
				<li>
					<Link href='#'>
						<a>Facebook</a>
					</Link>
				</li>
				<li>
					<Link href='#'>
						<a>Twitter</a>
					</Link>
				</li>
				<li>
					<Link href='#'>
						<a>Instagram</a>
					</Link>
				</li>
				<li>
					<Link href='#'>
						<a>YouTube</a>
					</Link>
				</li>
				<li>
					<Link href='#'>
						<a>FLickr</a>
					</Link>
				</li>
				<li>
					<Link href='#'>
						<a>LinkedIn</a>
					</Link>
				</li>
				<li>
					<Link href='#'>
						<a>Privacy</a>
					</Link>
				</li>
				<li>
					<Link href='#'>
						<a>Supplies</a>
					</Link>
				</li>
				<li>
					<Link href='#'>
						<a>Shop</a>
					</Link>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
