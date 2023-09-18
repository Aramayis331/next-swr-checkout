import { ChangeEvent } from 'react';

export const formatInputNumber = (e: ChangeEvent<HTMLInputElement>) => {
	e.target.value = e.target.value
		.replace(/\D/g, '') // Match only digits
		.substring(0, 50); // Limit the maximum length to 50 characters
};

export const formatInputCardNumber = (e: ChangeEvent<HTMLInputElement>) => {
	e.target.value = e.target.value
		.replace(/\D/g, '') // Match only digits
		.replace(/(.{4})/g, '$1 ') // Insert a space every four characters
		.trim() // Remove leading and trailing spaces
		.substring(0, 19); // Limit the maximum length to 16 characters
	// Example: "4444 4444 4444 4444"
};

export const formatInputNameOnCard = (e: ChangeEvent<HTMLInputElement>) => {
	e.target.value = e.target.value
		.replace(/[^a-zA-Z\s]/g, '') // Match only alphabetic characters and spaces
		.toUpperCase() // Convert all alphabetic characters to uppercase
		.replace(/\s+/g, ' ') // Replace multiple spaces with a single space
		.substring(0, 50); // Limit the maximum length to 50 characters
	// Example: "DEMO EXAMPLE"
};

export const formatInputCvv = (e: ChangeEvent<HTMLInputElement>) => {
	e.target.value = e.target.value
		.replace(/\D/g, '') // Match only digits
		.substring(0, 4); // Limit the maximum length to 4 characters
};

export const formatInputCardExpiryDate = (e: ChangeEvent<HTMLInputElement>): void => {
	e.target.value = e.target.value
		.replace(/^([1-9]\/|[2-9])$/g, '0$1/') // 3 > 03/
		.replace(/^(0[1-9]|1[0-2])$/g, '$1/') // 11 > 11/
		.replace(/^([0-1])([3-9])$/g, '0$1/$2') // 13 > 01/3
		.replace(/^(0?[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2') // 141 > 01/41
		.replace(/^([0]+)\/|[0]+$/g, '0') // 0/ > 0 and 00 > 0
		.replace(/[^\d\/]|^[\/]*$/g, '') // To allow only digits and `/`
		.replace(/\/\//g, '/') // Prevent entering more than 1 `/`
		.substring(0, 5); // Limit the maximum length to 5 characters
};
