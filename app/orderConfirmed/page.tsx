import { NextPage } from 'next';
import AboutPayment from 'components/aboutPayment';
import OrderSummary from 'components/orderSummary';
import styles from './page.module.css';

import ThankYou from './components/thankYou';

const OrderConfirmed: NextPage = () => {
	return (
		<main className={`container ${styles.order_confirmed}`}>
			<ThankYou />
			<div className={styles.right_panel}>
				<div className={styles.wrapper_orderSummary}>
					<OrderSummary isDiscountCode={false} />
				</div>
				<AboutPayment title='Secure SSL Encryption & Guaranteed Safe Checkout' />
			</div>
		</main>
	);
};

export default OrderConfirmed;
