import Image from 'next/image';
import { FC, FunctionComponent, SVGProps } from 'react';
import { Control, Controller, FieldError, FieldValues, RegisterOptions } from 'react-hook-form';
import styles from './Select.module.css';

import InputError from '../inputError';
import { MenuItem, Select as MuiSelect } from '@mui/material';

type Props = {
	defaultValue: string;
	Icon?: FunctionComponent<SVGProps<SVGSVGElement>>;
	options: { code: string; label: string }[];
	name: string;
	control: Control<FieldValues, any>;
	rules:
		| Omit<
				RegisterOptions<FieldValues, string>,
				'setValueAs' | 'disabled' | 'valueAsNumber' | 'valueAsDate'
		  >
		| undefined;
	error: FieldError | undefined;
};

const Select: FC<Props> = ({ defaultValue, Icon, options, name, control, rules, error }) => {
	return (
		<div>
			<Controller
				control={control}
				name={name}
				defaultValue=''
				rules={rules}
				render={({ field: { onChange, value } }) => (
					<MuiSelect
						error={Boolean(error?.message)}
						className={styles.select}
						displayEmpty
						fullWidth
						value={value}
						onChange={onChange}
						renderValue={value => (
							<div className={styles.container_renderValue}>
								{Icon && <Icon className={styles.icon} />}
								{value || <p className={styles.defaultValue}>{defaultValue}</p>}
							</div>
						)}
					>
						{options?.map(({ label, code }) => (
							<MenuItem key={code} value={label}>
								<Image
									src={`https://flagcdn.com/w20/${code.toLowerCase()}.png`}
									width={20}
									height={16}
									alt='flag'
									className={styles.flag_icon}
								/>
								{label}
							</MenuItem>
						))}
					</MuiSelect>
				)}
			/>
			{error && <InputError message={error?.message} />}
		</div>
	);
};

export default Select;
