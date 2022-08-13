import Link from 'next/link';
import { useState } from 'react';

import styles from './MenuButton.module.css';
const OpenStateButtonStyles = {
	transform: 'rotate(90deg)',
};
const OpenStateTopRungStyles = {
	transform: 'rotate(45deg) translateX(2px)',
};
const OpenStateMiddleRungStyles = {
	display: 'none',
};
const OpenStateBottomRungStyles = {
	transform: 'rotate(-45deg) translateX(2px)',
};
const OverlayStyle = {
	opacity: 1,
	PointerEvents: 'all',
};
const OpenMenuStyle = {
	boxShadow: '-4px 3px 0px 1px rgba(0,0,0,1',
	transform: 'translateX(0)',
};
const MenuButton = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div>
			<button
				className={styles.MenuButton}
				style={isOpen ? OpenStateButtonStyles : {}}
				onClick={() => {
					setIsOpen(!isOpen);
				}}>
				<span
					className={styles.MenuButton__Rung}
					style={isOpen ? OpenStateTopRungStyles : {}}></span>
				<span
					className={styles.MenuButton__Rung}
					style={isOpen ? OpenStateMiddleRungStyles : {}}></span>
				<span
					className={styles.MenuButton__Rung}
					style={isOpen ? OpenStateBottomRungStyles : {}}></span>
			</button>
			<div
				className={styles.Menu__Overlay}
				style={isOpen ? OverlayStyle : {}}></div>
			<div
				className={`${styles.Menu__Mobile}`}
				style={isOpen ? OpenMenuStyle : {}}>
				<ul>
					<li className={`${isOpen ? styles.FadeUp : ''}`}>
						<Link href='#'>
							<a>mission</a>
						</Link>
					</li>
					<li className={`${isOpen ? styles.FadeUp : ''}`}>
						<Link href='#'>
							<a>launches</a>
						</Link>
					</li>
					<li className={`${isOpen ? styles.FadeUp : ''}`}>
						<Link href='#'>
							<a>Careers</a>
						</Link>
					</li>
					<li className={`${isOpen ? styles.FadeUp : ''}`}>
						<Link href='#'>
							<a>updates</a>
						</Link>
					</li>
					<li className={`${isOpen ? styles.FadeUp : ''}`}>
						<Link href='#'>
							<a>shop</a>
						</Link>
					</li>
					<li className={`${isOpen ? styles.FadeUp : ''}`}>
						<Link href='#'>
							<a>Falcon 9</a>
						</Link>
					</li>
					<li className={` ${isOpen ? styles.FadeUp : ''}`}>
						<Link href='#'>
							<a>Falcon Heavy</a>
						</Link>
					</li>
					<li className={`${isOpen ? styles.FadeUp : ''}`}>
						<Link href='#'>
							<a>dragon</a>
						</Link>
					</li>
					<li className={`${isOpen ? styles.FadeUp : ''}`}>
						<Link href='#'>
							<a>starship</a>
						</Link>
					</li>
					<li className={`${isOpen ? styles.FadeUp : ''}`}>
						<Link href='#'>
							<a>human spaceflight</a>
						</Link>
					</li>
					<li className={`${isOpen ? styles.FadeUp : ''}`}>
						<Link href='#'>
							<a>ridshare</a>
						</Link>
					</li>
					<li className={`${isOpen ? styles.FadeUp : ''}`}>
						<Link href='#'>
							<a>starlink</a>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default MenuButton;
