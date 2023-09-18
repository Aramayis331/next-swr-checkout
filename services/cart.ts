import { Http } from 'lib/api';
import { Product } from 'types/product';
import { ADD_CART, DELETE_CART, GET_CART, UPDATE_CART } from 'urls/cart';

export const fetchCart = () => Http.get(GET_CART);
export const addCart = (body: Product) => Http.post(ADD_CART, body);
export const updateCart = (id: number, body: any) => Http.patch(UPDATE_CART(id), body);
export const removeCart = (id: number) => Http.delete(DELETE_CART(id));
