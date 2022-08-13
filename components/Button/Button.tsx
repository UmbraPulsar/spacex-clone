import styles from './button.module.css';

const Button = () => {
	return (
		<button className={`${styles.btn}`}>
			<div className={styles.hover}></div>
			<span>Rewatch</span>
		</button>
	);
};

export default Button;
