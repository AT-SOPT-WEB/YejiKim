import { useState } from 'react';
import type { InputHTMLAttributes } from 'react';
import * as styles from './style.css';
import { Eye, EyeOff } from 'lucide-react';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  showIcon?: boolean;
};

function Input({ type = 'text', showIcon = true, ...rest }: Props) {
  const isPassword = type === 'password';
  const [show, setShow] = useState(false);
  const inputType = isPassword ? (show ? 'text' : 'password') : type;

  return (
    <div className={styles.wrapper}>
      <input className={styles.input} type={inputType} {...rest} />
      {isPassword && showIcon && (
        <button
          type="button"
          className={styles.toggleButton}
          onClick={() => setShow((prev) => !prev)}
          tabIndex={-1}
        >
          {show ? <EyeOff className={styles.icon} /> : <Eye className={styles.icon} />}
        </button>
      )}
    </div>
  );
}
export default Input;
