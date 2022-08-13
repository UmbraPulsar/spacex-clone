import Link from 'next/link';
import styles from './Starship.module.css';

const StarShip = () => {
	return (
		<div className={styles.Starship}>
			<Link href='/'>
				<a>
					<img src='/img/starship.svg' alt='' />
				</a>
			</Link>
			<p>Launch to Top</p>
		</div>
	);
};

export default StarShip;
