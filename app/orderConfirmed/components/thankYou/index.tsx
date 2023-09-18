'use client';
import Image from 'next/image';
import { FC } from 'react';
import OrderSummaryToggle from 'components/orderSummaryToggle';
import Title from 'components/title';
import ArrowIcon from 'assets/icons/arrows/arrowLeft.svg';
import thumbUp from 'assets/thumbUp.png';
import styles from './ThankYou.module.css';

import { orderInfo } from './config';
import { Button } from '@mui/material';

const ThankYou: FC = () => {
	return (
		<div className={styles.thank_you}>
			<div className={styles.wrapper_order_summary_toggle}>
				<OrderSummaryToggle isDiscountCode={false} />
			</div>
			<Image src={thumbUp} alt='Thumb Up' className={styles.thumbUp_img} />
			<Title title='Thank you for your order' />
			<p className={styles.subTitle}>Your order is confirmed</p>
			<div className={styles.wrapper_button}>
				<Button variant='contained' startIcon={<ArrowIcon />}>
					Back to Shop
				</Button>
			</div>
			<div className={styles.order_info}>
				{orderInfo?.map(({ id, title, value }) => (
					<div key={id} className={styles.order_info_row}>
						<p className={styles.order_info_row_title}>{title}:</p>
						<p className={styles.order_info_row_value}>{value}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default ThankYou;
