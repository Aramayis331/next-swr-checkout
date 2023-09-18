import { FC } from 'react';
import { useForm } from 'react-hook-form';
import Input from 'components/input';
import Select from 'components/select';
import { name } from 'utils/validation';
import { formatInputNumber } from 'helpers/input';
import BuildingIcon from 'assets/icons/building.svg';
import LocationIcon from 'assets/icons/location.svg';
import UserIcon from 'assets/icons/user.svg';
import styles from './AddressForm.module.css';

import { countries } from './config';
import HomeIcon from '/assets/icons/home.svg';
import { firstNameMessage, lastNameMessage, requiredMessage } from 'constants/validation';

const AddressForm: FC = () => {
	const {
		control,
		formState: { errors },
	} = useForm<{ [key: string]: string }>({ mode: 'onChange' });

	return (
		<form className={styles.address_form}>
			<Select
				defaultValue='Select a Country'
				Icon={LocationIcon}
				options={countries}
				control={control}
				error={errors?.country}
				name='country'
				rules={{
					required: requiredMessage,
				}}
			/>
			<div className={styles.firstName_lastName}>
				<Input
					placeholder='First Name'
					Icon={UserIcon}
					control={control}
					error={errors.firstName}
					name='firstName'
					rules={{
						required: requiredMessage,
						pattern: {
							value: name,
							message: firstNameMessage,
						},
					}}
				/>
				<Input
					placeholder='Last Name'
					Icon={UserIcon}
					control={control}
					error={errors.lastName}
					name='lastName'
					rules={{
						required: requiredMessage,
						pattern: {
							value: name,
							message: lastNameMessage,
						},
					}}
				/>
			</div>
			<Input
				placeholder='Address'
				Icon={HomeIcon}
				control={control}
				error={errors.address}
				name='address'
				rules={{
					required: requiredMessage,
				}}
			/>
			<Input
				placeholder='Apartment, suit, etc (Optional)'
				Icon={BuildingIcon}
				control={control}
				error={errors.apartment}
				name='apartment'
				rules={{
					required: requiredMessage,
				}}
			/>
			<div className={styles.city_postCode}>
				<Input
					placeholder='City'
					control={control}
					error={errors.city}
					name='city'
					rules={{
						required: requiredMessage,
					}}
				/>
				<Input
					placeholder='Post code'
					control={control}
					type='number'
					error={errors.postalCode}
					name='postalCode'
					formatValue={formatInputNumber}
					rules={{
						required: requiredMessage,
					}}
				/>
			</div>
		</form>
	);
};

export default AddressForm;
