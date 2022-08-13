import { NextPage } from 'next';

import styles from './section.module.css';
import { Heading2, Heading4 } from '../Text/Text';
import Button from '../Button/Button';
import ArrowIcon from '../ArrowIcon/ArrowIcon';
import StarShip from '../StarshipIcon/StarshipIcon';
interface Props {
	textOne: string;
	textTwo: string;
	background: string;
	lastSlide: boolean;
}

const Section: NextPage<Props> = ({
	textOne,
	textTwo,
	background,
	lastSlide = false,
}) => {
	return (
		<section className={`${styles.Section} ${styles[`${background}`]}`}>
			<div className={styles.Section__Text}>
				<Heading4 text={textOne} />
				<Heading2 text={textTwo} />
				<Button />
			</div>
			{lastSlide ? <StarShip /> : <ArrowIcon />}
		</section>
	);
};

export default Section;
