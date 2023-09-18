import { FC } from 'react';
import CheckIcon from 'assets/icons/check.svg';
import styles from './Benefits.module.css';

const Benefits: FC = () => {
	return (
		<div className={styles.benefits}>
			<p className={styles.title}>The ultimate jewellery club</p>
			<p className={styles.subTitle}>
				Ornare rhoncus nunc ut felis. Faucibus dolor at ultrices tincidunt. Pulvinar sed justo et
				viverra pellentesque.
			</p>
			<div className={styles.discount}>
				<CheckIcon className={styles.check_icon} />
				<p className={styles.benefits_text}>Extra 10$ off!</p>
			</div>
			<div className={styles.shipping}>
				<CheckIcon className={styles.check_icon} />
				<p className={styles.benefits_text}>Free shipping on marked club items!</p>
			</div>
			<div className={styles.returns}>
				<CheckIcon className={styles.check_icon} />
				<p className={styles.benefits_text}>Free returns on marked club items!</p>
			</div>
		</div>
	);
};

export default Benefits;
