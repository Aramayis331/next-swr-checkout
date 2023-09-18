import { FC, ReactNode } from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';
import styles from './Checkbox.module.css';

import { Checkbox as MuiCheckbox, FormControlLabel } from '@mui/material';

type Props = {
	control: Control<FieldValues>;
	name: string;
	label: ReactNode;
};

const Checkbox: FC<Props> = ({ control, name, label }) => {
	return (
		<div className={styles.agree}>
			<Controller
				name={name}
				control={control}
				defaultValue={false}
				render={({ field: { onChange, value } }) => (
					<FormControlLabel
						control={<MuiCheckbox color='secondary' onChange={onChange} value={value} />}
						label={label}
					/>
				)}
			/>
		</div>
	);
};

export default Checkbox;
