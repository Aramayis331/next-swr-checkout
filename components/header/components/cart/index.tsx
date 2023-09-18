'use client';
import Image from 'next/image';
import { FC } from 'react';
import Error from 'components/error';
import Loading from 'components/loading';
import { formatCurrency } from 'helpers/currency';
import { handleDiscountPrice } from 'helpers/price';
import { fetchCart, removeCart } from 'services/cart';
import CloseIcon from 'assets/icons/close.svg';
import TrashIcon from 'assets/icons/trash.svg';
import styles from './Cart.module.css';

import { Badge, Drawer } from '@mui/material';
import useSWR from 'swr';
import { Product } from 'types/product';

type Props = {
	isOpen: boolean;
	onClose: () => void;
};

const Cart: FC<Props> = ({ isOpen, onClose }) => {
	const { data, error, isLoading, mutate } = useSWR<Product[]>('cart', fetchCart);

	const handleSumTotal = (data: Product[] | undefined): number => {
		if (!data) return 0;
		if (data?.length === 0) return 0;
		if (data?.length > 0) {
			return data?.reduce(
				(sum, item) =>
					(sum += item?.discount ? handleDiscountPrice(item.price, item.discount) : item.price),
				0
			);
		}
	};

	const handleRemoveCartItem = (id: number) => () => {
		removeCart(id);

		mutate(
			data?.filter(item => item.id !== id),
			{ revalidate: false }
		);
	};

	return (
		<Drawer anchor='right' open={isOpen} onClose={onClose}>
			<div className={styles.cart_body}>
				<div className={styles.cart_header}>
					<p>Cart</p>
					<CloseIcon className={styles.cart_header_close} onClick={onClose} />
				</div>
				<div className={styles.products_container}>
					{data && data?.length === 0 && !error && (
						<p className={styles.cart_empty}>Cart is empty</p>
					)}
					{isLoading && <Loading />}
					{error && <Error />}
					<div className={styles.container_items}>
						{data &&
							data?.length > 0 &&
							data?.map(({ name, id, src, count }) => (
								<div key={id} className={styles.cart_item_container}>
									<div className={styles.cart_item}>
										<Badge color='secondary' badgeContent={count}>
											<Image
												src={src}
												alt='Product'
												width={56}
												height={52}
												className={styles.cart_item_img}
											/>
										</Badge>
										<p className={styles.cart_item_name}>{name}</p>
									</div>
									<TrashIcon
										className={styles.cart_item_trash}
										onClick={handleRemoveCartItem(id)}
									/>
								</div>
							))}
					</div>
				</div>
			</div>
			<p className={styles.total}>Total: {formatCurrency(handleSumTotal(data))}</p>
		</Drawer>
	);
};

export default Cart;
