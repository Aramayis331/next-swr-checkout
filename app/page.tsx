import { NextPage } from 'next';
import AboutPayment from 'components/aboutPayment';
import SupportIcon from 'assets/icons/support.svg';
import styles from './page.module.css';

import NavigationButton from './components/navigationButton';
import ProductInfo from './components/productInfo';

const Products: NextPage = () => {
	return (
		<main className={`container ${styles.products}`}>
			<div className={styles.product_container}>
				<ProductInfo />
				<div className={styles.aboutPayment_support}>
					<div className={styles.aboutPayment_wrapper}>
						<AboutPayment title='Guaranteed Safe & Secure Checkout' />
					</div>
					<div className={styles.support}>
						<SupportIcon className={styles.support_icon} />
						<div>
							<p className={styles.support_title}>24/7</p>
							<p className={styles.support_subTitle}>Support</p>
						</div>
					</div>
				</div>
				<NavigationButton />
			</div>
		</main>
	);
};

export default Products;
