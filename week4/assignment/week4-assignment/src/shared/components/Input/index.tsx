import type { InputHTMLAttributes } from 'react';
import * as styles from './style.css';
function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={styles.input} {...props} />;
}

export default Input;
