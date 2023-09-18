'use client';
import Link from 'next/link';
import { FC } from 'react';
import ArrowRightIcon from 'assets/icons/arrows/arrowRight.svg';
import styles from './NavigationButton.module.css';

import { Button } from '@mui/material';
import { ROUTE_CHECKOUT } from 'constants/routes';

const NavigationButton: FC = () => (
	<Link href={ROUTE_CHECKOUT}>
		<div className={styles.button_container}>
			<Button variant='contained' endIcon={<ArrowRightIcon />}>
				Checkout
			</Button>
		</div>
	</Link>
);

export default NavigationButton;
