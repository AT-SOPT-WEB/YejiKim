import { Link } from 'react-router';
import Button from '../shared/components/Button';
import Input from '../shared/components/Input';
import * as styles from './styles/login/Login.css';

function Login() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>로그인</h2>
      <Input placeholder="아이디" type="text" />
      <Input placeholder="비밀번호" type="password" />
      <Button>로그인</Button>
      <Link to="/signup" className={styles.link}>
        회원가입
      </Link>
    </div>
  );
}

export default Login;
