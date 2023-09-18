import { NextPage } from 'next';
import styles from './page.module.css';

import Information from './components/information';
import Payment from './components/payment';

const Checkout: NextPage = () => {
	return (
		<main className={`container ${styles.checkout}`}>
			<Information />
			<Payment />
		</main>
	);
};

export default Checkout;
