'use client';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import Checkbox from 'components/checkbox';
import Input from 'components/input';
import Radio from 'components/radio';
import Title from 'components/title';
import {
	formatInputCardExpiryDate,
	formatInputCardNumber,
	formatInputCvv,
	formatInputNameOnCard,
} from 'helpers/input';
import CalendarIcon from 'assets/icons/calendar.svg';
import CreditCardIcon from 'assets/icons/creditCard.svg';
import LockIcon from 'assets/icons/lock.svg';
import PayPalIcon from 'assets/icons/paymnets/payPal.svg';
import UserIcon from 'assets/icons/user.svg';
import styles from './PaymentMethod.module.css';

import CardIcons from './components/cardIcons';
import { Button, RadioGroup } from '@mui/material';
import { requiredMessage } from 'constants/validation';

const PaymentMethod: FC = () => {
	const {
		control,
		formState: { errors },
		watch,
	} = useForm<{ [key: string]: string }>({ mode: 'onChange' });

	return (
		<div className={styles.payment_method}>
			<Title title='Payment Method' />
			<RadioGroup>
				<div className={styles.card_info}>
					<Radio name='creditCard' label='Credit Card' value='creditCard' Icon={CardIcons}>
						<div className={styles.card_info_container}>
							<Input
								placeholder='Card number'
								Icon={CreditCardIcon}
								control={control}
								error={errors?.cardNumber}
								name='cardNumber'
								maxLength={19}
								formatValue={formatInputCardNumber}
								rules={{
									required: requiredMessage,
								}}
							/>
							<Input
								placeholder='Name on the card'
								Icon={UserIcon}
								control={control}
								error={errors?.cardName}
								name='cardName'
								formatValue={formatInputNameOnCard}
								rules={{
									required: requiredMessage,
								}}
							/>
							<div className={styles.cvv_date}>
								<Input
									Icon={CalendarIcon}
									control={control}
									error={errors?.date}
									formatValue={formatInputCardExpiryDate}
									name='date'
									placeholder='MM/YY'
									rules={{
										required: requiredMessage,
									}}
								/>
								<Input
									Icon={LockIcon}
									control={control}
									error={errors?.cvv}
									formatValue={formatInputCvv}
									maxLength={4}
									name='cvv'
									placeholder='CVV'
									rules={{
										required: requiredMessage,
									}}
								/>
							</div>
						</div>
					</Radio>
				</div>
				<Radio name='paypal' label='Paypal' value='paypal' Icon={PayPalIcon} />
			</RadioGroup>
			<Checkbox
				control={control}
				name='agree'
				label={
					<p className={styles.checkbox_label}>
						By checking this box, I acknowledge that I have read and agree to the
						<span>Terms of Service,</span> and <span>Monthly Billing Terms</span> of this website
						and want to opt-in for the monthly billed Dream Collection Club®
					</p>
				}
			/>
			<Button variant='contained' disabled={!watch('agree')}>
				Complete Purchase
			</Button>
		</div>
	);
};

export default PaymentMethod;
