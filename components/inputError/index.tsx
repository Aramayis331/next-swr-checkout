import { FC } from 'react';
import styles from './InputError.module.css';

type Props = {
	message: string | undefined;
};

const InputError: FC<Props> = ({ message }) => <p className={styles.message}>{message}</p>;

export default InputError;
