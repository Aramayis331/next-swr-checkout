import { FC } from 'react';
import AboutPayment from 'components/aboutPayment';
import OrderSummary from 'components/orderSummary';
import styles from './Payment.module.css';

import Benefits from '../benefits';
import PaymentMethod from './components/paymentMethod';

const Payment: FC = () => {
	return (
		<div className={styles.payment}>
			<div className={styles.container_order_summary}>
				<OrderSummary />
			</div>
			<div className={styles.container_about_payment}>
				<AboutPayment title='Secure SSL Encryption & Guaranteed Safe Checkout' />
			</div>
			<div className={styles.container_benefits}>
				<Benefits />
			</div>
			<PaymentMethod />
		</div>
	);
};

export default Payment;
