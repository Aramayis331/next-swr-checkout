'use client';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import Input from 'components/input';
import OrderSummaryToggle from 'components/orderSummaryToggle';
import Radio from 'components/radio';
import Title from 'components/title';
import { email } from 'utils/validation';
import { formatInputNumber } from 'helpers/input';
import EmailIcon from 'assets/icons/email.svg';
import PhoneIcon from 'assets/icons/phone.svg';
import styles from './Information.module.css';

import Benefits from '../benefits';
import AddressForm from './components/addressForm';
import BillingAddress from './components/billingAddress';
import ExpressCheckout from './components/expressCheckout';
import LifetimeWarranty from './components/lifetimeWarranty';
import { Checkbox, FormControlLabel, RadioGroup } from '@mui/material';
import { emailMessage, requiredMessage } from 'constants/validation';

const Information: FC = () => {
	const {
		control,
		formState: { errors },
	} = useForm<{ [key: string]: string }>({ mode: 'onChange' });

	return (
		<div className={styles.information}>
			<p className={styles.title}>Checkout</p>
			<OrderSummaryToggle>
				<Benefits />
			</OrderSummaryToggle>
			<div>
				<p className={styles.strong_demand}>
					Strong demand! Complete your order before it`s too late!
				</p>
				<div className={styles.reserved}>
					<p>Your cart is reserved for 10:00 minutes.</p>
				</div>
			</div>
			<ExpressCheckout />
			<LifetimeWarranty />
			<div className={styles.contact_information}>
				<Title title='Contact information' />
				<Input
					Icon={EmailIcon}
					placeholder='Email Address'
					control={control}
					name='email'
					error={errors?.email}
					rules={{
						required: requiredMessage,
						pattern: {
							value: email,
							message: emailMessage,
						},
					}}
				/>
				<Input
					Icon={PhoneIcon}
					placeholder='Phone Number'
					control={control}
					type='number'
					error={errors?.phone}
					name='phone'
					formatValue={formatInputNumber}
					rules={{
						required: requiredMessage,
					}}
				/>
				<FormControlLabel
					control={<Checkbox defaultChecked color='secondary' />}
					label={<p className={styles.checkbox_label}>Sign up for exclusive offers and news</p>}
				/>
			</div>
			<Title title='Shipping address' />
			<AddressForm />
			<RadioGroup className={styles.shipping_method}>
				<Title title='Shipping method' />
				<Radio label='Free Shipping' name='freeShipping' value='freeShipping' />
				<Radio label='DHL with price' name='dhlPrice' value='dhlPrice' />
			</RadioGroup>
			<BillingAddress />
		</div>
	);
};

export default Information;
