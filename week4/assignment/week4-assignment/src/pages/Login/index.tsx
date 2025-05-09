import { Link } from 'react-router';
import Button from '../../shared/components/Button';
import Input from '../../shared/components/Input';
import * as styles from './style.css';
import { useLogin } from '../../api/auth/hooks/useLogin';
import { useState } from 'react';
import { useNavigate } from 'react-router';

function Login() {
  const navigate = useNavigate();

  const [loginId, setLoginId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { mutate, isPending } = useLogin(navigate);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ loginId, password });
  };

  const handleLoginIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginId(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>로그인</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input placeholder="아이디" type="text" value={loginId} onChange={handleLoginIdChange} />
        <Input
          placeholder="비밀번호"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button type="submit" disabled={isPending}>
          로그인
        </Button>
      </form>
      <Link to="/signup" className={styles.link}>
        회원가입
      </Link>
    </div>
  );
}

export default Login;
