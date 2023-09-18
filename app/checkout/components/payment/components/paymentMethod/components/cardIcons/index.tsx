import { FC } from 'react';
import AmexIcon from 'assets/icons/paymnets/amex.svg';
import MasterCardIcon from 'assets/icons/paymnets/masterCard.svg';
import VisaIcon from 'assets/icons/paymnets/visa.svg';
import styles from './CardIcons.module.css';

const CardIcons: FC = () => {
	return (
		<div className={styles.card_variants}>
			<MasterCardIcon className={styles.card_variants_icon} />
			<VisaIcon className={styles.card_variants_icon} />
			<AmexIcon className={styles.card_variants_icon} />
			<div className={styles.card_variants_more}>& more</div>
		</div>
	);
};

export default CardIcons;
