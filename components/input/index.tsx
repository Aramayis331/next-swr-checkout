import { ChangeEvent, FC, FunctionComponent, SVGProps } from 'react';
import { Control, Controller, FieldError, FieldValues, RegisterOptions } from 'react-hook-form';
import styles from './Input.module.css';

import InputError from '../inputError';
import { InputAdornment, TextField } from '@mui/material';

type Props = {
	Icon?: FunctionComponent<SVGProps<SVGSVGElement>>;
	placeholder: string;
	type?: string;
	maxLength?: number;
	formatValue?: (e: ChangeEvent<HTMLInputElement>) => void;
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

const Input: FC<Props> = ({
	Icon,
	placeholder,
	type = 'text',
	maxLength = 50,
	name,
	control,
	rules,
	error,
	formatValue,
}) => {
	return (
		<div className={styles.container_input}>
			<Controller
				control={control}
				name={name}
				defaultValue=''
				rules={rules}
				render={({ field: { onChange, value } }) => (
					<TextField
						className={styles.input}
						type={type}
						error={Boolean(error?.message)}
						fullWidth
						autoComplete='off'
						value={value}
						inputProps={{ maxLength }}
						placeholder={placeholder}
						onChange={onChange}
						onInput={formatValue}
						InputProps={{
							startAdornment: Icon && (
								<InputAdornment position='start'>
									<Icon className={styles.input_icon} />
								</InputAdornment>
							),
						}}
					/>
				)}
			/>
			{error && <InputError message={error?.message} />}
		</div>
	);
};

export default Input;
