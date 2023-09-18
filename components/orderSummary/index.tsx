'use client';
import Image from 'next/image';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import Input from 'components/input';
import Title from 'components/title';
import { formatCurrency } from 'helpers/currency';
import product from 'assets/product.png';
import styles from './OrderSummary.module.css';

import { Badge, Button } from '@mui/material';
import { requiredMessage } from 'constants/validation';

type Props = {
	isDiscountCode?: boolean;
};

const OrderSummary: FC<Props> = ({ isDiscountCode = true }) => {
	const {
		control,
		formState: { errors },
	} = useForm<{ [key: string]: string }>({ mode: 'onChange' });

	return (
		<div className={styles.order_summary}>
			<Title title='Order Summary' />
			<div className={styles.product_info}>
				<Badge color='secondary' badgeContent={1}>
					<Image
						src={product}
						alt='Product'
						width={56}
						height={52}
						className={styles.product_info_img}
					/>
				</Badge>
				<p className={styles.product_name}>Nike sneakers</p>
				<p className={styles.product_price}>{formatCurrency(69)}</p>
			</div>
			{isDiscountCode && (
				<div className={styles.discount_code}>
					<Input
						placeholder='Discount code'
						control={control}
						error={errors?.discountCode}
						name='discountCode'
						rules={{
							required: requiredMessage,
						}}
					/>
					<div className={styles.container_button}>
						<Button variant='contained'>Apply</Button>
					</div>
				</div>
			)}
			<div>
				<div className={styles.calculate_subtotal}>
					<p className={styles.title}>Subtotal</p>
					<p className={styles.value}>{formatCurrency(69)}</p>
				</div>
				<div className={styles.calculate_shipping}>
					<p className={styles.title}>Shipping</p>
					<p className={styles.value}>--</p>
				</div>
				<div className={styles.calculate_discount}>
					<p className={styles.title}>Discount</p>
					<p className={styles.value}>--</p>
				</div>
				<div className={styles.total}>
					<p>Total</p>
					<p className={styles.total_value}>{formatCurrency(69)}</p>
				</div>
			</div>
		</div>
	);
};

export default OrderSummary;
