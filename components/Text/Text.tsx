import { NextPage } from 'next';
import styles from './text.module.css';
interface Props {
	text: string;
}

export const Heading2: NextPage<Props> = ({ text }) => {
	return <h2 className={styles.Heading2}>{text}</h2>;
};
export const Heading4: NextPage<Props> = ({ text }) => {
	return <h4 className={styles.Heading4}>{text}</h4>;
};
