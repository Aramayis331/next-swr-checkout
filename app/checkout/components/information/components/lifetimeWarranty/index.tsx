import { FC } from 'react';
import styles from './LifetimeWarranty.module.css';

import { Button } from '@mui/material';

const LifetimeWarranty: FC = () => {
	return (
		<div className={styles.lifetime_warranty}>
			<div>
				<p className={styles.title}>Lifetime Warranty &#128293;</p>
				<p className={styles.sub_title}>
					Add a lifetime warranty & enjoy peace of mind for life with your dream collections order
					for just $4.99
				</p>
			</div>
			<div className={styles.container_button}>
				<Button variant='contained'>Add-$4.99</Button>
			</div>
		</div>
	);
};

export default LifetimeWarranty;
