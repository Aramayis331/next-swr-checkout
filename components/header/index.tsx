'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';
import { fetchCart } from 'services/cart';
import CartIcon from 'assets/icons/cart.svg';
import logo from 'assets/logo.png';
import styles from './Header.module.css';

import Cart from './components/cart';
import { Badge } from '@mui/material';
import { ROUTE_HOME } from 'constants/routes';
import useSWR from 'swr';

const Header: FC = () => {
	const { data } = useSWR('cart', fetchCart);
	const [isOpen, setisOpen] = useState<boolean>(false);
	const onClose = () => setisOpen(false);
	const handleOpenCart = () => setisOpen(true);

	return (
		<header className={styles.header}>
			<div className={`${styles.header_container} container`}>
				<Link href={ROUTE_HOME}>
					<Image src={logo} alt='Logo' priority />
				</Link>
				<Badge
					badgeContent={data?.length || 0}
					showZero
					color='secondary'
					className={styles.container_cart}
					onClick={handleOpenCart}
				>
					<CartIcon className={styles.cart_icon} />
				</Badge>
				<Cart isOpen={isOpen} onClose={onClose} />
			</div>
		</header>
	);
};
export default Header;
