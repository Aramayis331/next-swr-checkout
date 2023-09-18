import { FC, FunctionComponent, ReactNode, SVGProps } from 'react';
import styles from './Radio.module.css';

import { FormControlLabel, Radio as MuiRadio } from '@mui/material';

type Props = {
	label: string;
	Icon?: FunctionComponent<SVGProps<SVGSVGElement>>;
	children?: ReactNode;
	name: string;
	value: string;
};

const Radio: FC<Props> = ({ label, Icon, children, name, value }) => {
	return (
		<div className={styles.radio_container}>
			<div className={styles.radio_head}>
				<FormControlLabel
					name={name}
					value={value}
					control={<MuiRadio color='secondary' />}
					label={<p className={styles.radio_label}>{label}</p>}
				/>
				{Icon && <Icon className={styles.icon} />}
			</div>
			{children && <div className={styles.children_container}>{children}</div>}
		</div>
	);
};

export default Radio;
