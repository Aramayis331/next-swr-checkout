'use client';
import Error from 'components/error';
import Loading from 'components/loading';
import { fetchCart } from 'services/cart';
import { fetchProducts } from 'services/product';
import styles from './ProductInfo.module.css';

import ProductBody from './components/productBody';
import useSWR from 'swr';
import useSWRImmutable from 'swr/immutable';
import { Product } from 'types/product';

const ProductInfo: any = () => {
	const {
		data: products,
		error,
		isLoading,
	} = useSWRImmutable<Product[]>('products', fetchProducts);
	const { data } = useSWR<Product[]>('cart', fetchCart);

	return (
		<div>
			{isLoading && <Loading />}
			{products && (
				<>
					<ProductBody products={products} />
					<p className={styles.product_description}>
						Ornare rhoncus nunc ut felis. Faucibus dolor at ultrices tincidunt. Pulvinar sed justo
						et viverra pellentesque.
						<br />
						<br />
						Mauris augue nulla proin vel a. Facilisis fringilla molestie dignissim elit orci
						malesuada. Lorem sit sagittis vitae nulla id. Mauris ipsum sed sed faucibus. Nulla amet
						metus gravida orci faucibus nisl eros arcu lorem. Nullam ornare molestie nam id gravida
						volutpat bibendum sem feugiat. Neque vulputate in et maecenas porta mi tellus. In massa
						porttitor urna quis volutpat at.
					</p>
				</>
			)}
			{error && <Error />}
		</div>
	);
};

export default ProductInfo;
