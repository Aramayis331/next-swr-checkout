import { Http } from 'lib/api';
import { GET_PRODUCTS } from 'urls/product';

export const fetchProducts = () => Http.get(GET_PRODUCTS);
