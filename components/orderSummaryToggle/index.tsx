'use client';
import { FC, ReactNode, useState } from 'react';
import OrderSummary from 'components/orderSummary';
import { formatCurrency } from 'helpers/currency';
import ArrowDownIcon from 'assets/icons/arrows/arrowDownSmall.svg';
import ArrowUpIcon from 'assets/icons/arrows/arrowUpSmall.svg';
import CartIcon from 'assets/icons/cart.svg';
import styles from './OrderSummaryToggle.module.css';

type Props = {
	children: ReactNode;
	isDiscountCode?: boolean;
};

const OrderSummaryToggle: FC<Props> = ({ children, isDiscountCode }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const handleToggle = () => setIsOpen(prev => !prev);
	return (
		<div className={styles.order_summary_toggle}>
			<div className={styles.head} onClick={handleToggle}>
				<div className={styles.head_left_content}>
					<CartIcon className={styles.cart_icon} />
					<p>{isOpen ? 'Hide order summary' : 'Show order summary'}</p>
					{isOpen ? (
						<ArrowUpIcon className={styles.arrow_icon} />
					) : (
						<ArrowDownIcon className={styles.arrow_icon} />
					)}
				</div>
				<p className={styles.price}>{formatCurrency(69)}</p>
			</div>
			{isOpen && (
				<>
					<OrderSummary isDiscountCode={isDiscountCode} />
					{children}
				</>
			)}
		</div>
	);
};

export default OrderSummaryToggle;
