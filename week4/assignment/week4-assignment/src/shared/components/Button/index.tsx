import type { ButtonHTMLAttributes } from 'react';
import * as styles from './style.css';

function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={styles.button} {...props} />;
}

export default Button;
