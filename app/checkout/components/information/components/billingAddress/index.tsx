import { FC, useState } from 'react';
import Radio from 'components/radio';
import Title from 'components/title';
import styles from './BillingAddress.module.css';

import AddressForm from '../addressForm';
import { RadioGroup } from '@mui/material';

const BillingAddress: FC = () => {
	const [isDifferentAddress, setIsDifferentAddress] = useState<boolean>(false);

	const chooseDifferentAddress = () => setIsDifferentAddress(true);
	const removeDifferentAddress = () => setIsDifferentAddress(false);

	return (
		<div>
			<Title title='Billing address' subTitle='Specify the address for your payment option' />
			<RadioGroup className={styles.radio_group}>
				<div onClick={removeDifferentAddress}>
					<Radio label='Same as shipping address' name='sameAddress' value='sameAddress' />
				</div>
				<div onClick={chooseDifferentAddress}>
					<Radio
						label='Use a different billing address'
						name='differentAddress'
						value='differentAddress'
					>
						{isDifferentAddress && <AddressForm />}
					</Radio>
				</div>
			</RadioGroup>
		</div>
	);
};

export default BillingAddress;
