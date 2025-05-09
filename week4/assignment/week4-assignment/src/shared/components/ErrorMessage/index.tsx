import * as styles from './style.css';

interface ErrorMessageProps {
  error: string;
}

function ErrorMessage({ error }: ErrorMessageProps) {
  return <p className={styles.errorMessage}>{error}</p>;
}

export default ErrorMessage;
