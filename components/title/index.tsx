import { FC } from 'react';
import styles from './Title.module.css';

type Props = {
	title: string;
	subTitle?: string;
};

const Title: FC<Props> = ({ title, subTitle }) => (
	<div className={styles.title_container}>
		<p className={styles.title}>{title}</p>
		{subTitle && <p className={styles.subTitle}>{subTitle}</p>}
	</div>
);

export default Title;
