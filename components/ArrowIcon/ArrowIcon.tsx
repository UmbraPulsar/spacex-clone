import styles from './ArrowIcon.module.css';
const ArrowIcon = () => {
	return (
		<div className={styles.Scroll__Arrow}>
			<svg width='30px' height='20px'>
				<path
					stroke='#FFFF'
					fill='none'
					strokeWidth='2px'
					d='M2.000,5.000 L15.000,18.000 L28.000, 5.00'></path>
			</svg>
		</div>
	);
};

export default ArrowIcon;
