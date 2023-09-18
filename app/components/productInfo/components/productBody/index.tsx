'use client';
import Image from 'next/image';
import { FC, useRef, useState } from 'react';
import Slider, { Settings } from 'react-slick';
import { formatCurrency } from 'helpers/currency';
import { handleDiscountPrice } from 'helpers/price';
import { addCart, fetchCart, updateCart } from 'services/cart';
import ArrowLeftIcon from 'assets/icons/arrows/arrowLeftSmall.svg';
import ArrowRightIcon from 'assets/icons/arrows/arrowRightSmall.svg';
import MinusIcon from 'assets/icons/minus.svg';
import PlusIcon from 'assets/icons/plus.svg';
import styles from './ProductBody.module.css';

import { Button } from '@mui/material';
import { Http } from 'lib/api';
import useSWR, { useSWRConfig } from 'swr';
import { Product } from 'types/product';

type Props = {
	products: Product[];
};

const ProductBody: FC<Props> = ({ products }) => {
	const { data } = useSWR<Product[]>('cart', fetchCart);
	const { mutate } = useSWRConfig();
	const [quantity, setQuantity] = useState<number>(1);
	const [activeItem, setActiveItem] = useState<Product>(products[0]);
	const sliderRef = useRef<Slider>(null);

	const settings: Settings = {
		dots: false,
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		afterChange: currentSlide => {
			setActiveItem(products[currentSlide]);
			setQuantity(1);
		},
	};

	const handlePlus = () => setQuantity(prev => ++prev);
	const handleMinus = () => setQuantity(prev => --prev);

	const handleNext = () => sliderRef?.current?.slickNext();
	const handlePrev = () => sliderRef?.current?.slickPrev();

	const handelAddToCart = () => {
		const findeItem = data?.find(item => item.id === activeItem.id);

		if (findeItem) {
			return mutate('cart', () => {
				updateCart(activeItem?.id, { count: findeItem?.count && findeItem?.count + quantity });
			});
		}
		mutate('cart', () => {
			addCart({
				id: activeItem?.id,
				name: activeItem?.name,
				price: activeItem?.price,
				src: activeItem?.src,
				count: 1,
			});
		});
	};

	return (
		<>
			<div className={styles.sliderWrapper}>
				<div className={styles.slider_prev} onClick={handlePrev}>
					<ArrowLeftIcon className={styles.slider_arrow_icon} />
				</div>
				<div className={styles.slider_next} onClick={handleNext}>
					<ArrowRightIcon className={styles.slider_arrow_icon} />
				</div>
				<Slider {...settings} ref={sliderRef}>
					{products &&
						products?.map(({ id, src }) => (
							<div key={id}>
								<div key={id} className={styles.product_img}>
									<Image src={src} alt='Product' width={400} height={300} />
								</div>
							</div>
						))}
				</Slider>
			</div>
			<div className={styles.product_info}>
				<div className={styles.product_price_container}>
					<p className={styles.price_title}>Price:</p>
					<p className={styles.price}>
						{formatCurrency(
							activeItem.discount
								? handleDiscountPrice(activeItem?.price, activeItem?.discount)
								: activeItem?.price
						)}
					</p>
					{activeItem?.discount && (
						<div className={styles.discount}>
							<p>-{activeItem.discount}%</p>
						</div>
					)}
				</div>
				<div className={styles.quantity_container}>
					<p className={styles.quantity_title}>Quantity:</p>
					<div
						className={styles.container_minus_icon}
						onClick={() => {
							if (quantity > 1) handleMinus();
						}}
					>
						<MinusIcon />
					</div>
					<p className={styles.quantity}>{quantity}</p>
					<div className={styles.container_plus_icon} onClick={handlePlus}>
						<PlusIcon />
					</div>
				</div>
				<div className={styles.button_buy_wrapper}>
					<Button variant='contained' onClick={handelAddToCart}>
						Add to cart
					</Button>
				</div>
			</div>
		</>
	);
};

export default ProductBody;
