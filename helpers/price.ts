export const handleDiscountPrice = (price: number, discount: number): number =>
	price - (price * discount) / 100;
