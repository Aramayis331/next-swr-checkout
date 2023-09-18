'use client';
import { FC } from 'react';
import LockIcon from 'assets/icons/lock.svg';
import styles from './AboutPayment.module.css';

import { paymentIcons } from './config';

type Props = {
	title: string;
};

const AboutPayment: FC<Props> = ({ title }) => {
	return (
		<div className={styles.about_payment}>
			<div className={styles.title_container}>
				<LockIcon className={styles.title_icon} />
				<p className={styles.title}>{title}</p>
			</div>
			<div>
				{paymentIcons?.map(({ id, Icon }) => (
					<Icon key={id} className={styles.payment_icon} />
				))}
			</div>
		</div>
	);
};

export default AboutPayment;
