import Image from 'next/image';
import { FC } from 'react';
import googlePay from 'assets/googlePay.png';
import payPal from 'assets/payPal.png';
import shopPay from 'assets/shopPay.png';
import styles from './ExpressCheckout.module.css';

const ExpressCheckout: FC = () => {
	return (
		<div className={styles.express_checkout}>
			<p className={styles.title}>Express Checkout</p>
			<div className={styles.container_checkout}>
				<div className={styles.shop_pay}>
					<Image src={shopPay} alt='Shop Pay' />
				</div>
				<div className={styles.pay_pal}>
					<Image src={payPal} alt='Pay Pal' />
				</div>
				<div className={styles.google_pay}>
					<Image src={googlePay} alt='Google Pay' />
				</div>
			</div>
		</div>
	);
};

export default ExpressCheckout;
