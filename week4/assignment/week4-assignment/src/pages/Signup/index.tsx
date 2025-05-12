import { Link, useNavigate } from 'react-router';
import * as styles from './style.css';
import { useState } from 'react';
import IdInput from './IdInput';
import PasswordInput from './PasswordInput';
import NicknameInput from './NicknameInput';

function Signup() {
  const [step, setStep] = useState<number>(1);
  const [loginId, setLoginId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const subTitles: Record<number, string> = {
    1: '아이디',
    2: '비밀번호',
    3: '닉네임',
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>회원가입</h2>
      <h3 className={styles.subtitle}>{subTitles[step]}</h3>

      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {step === 1 && (
          <IdInput
            onComplete={(loginId) => {
              setLoginId(loginId);
              setStep(2);
            }}
          />
        )}

        {step === 2 && (
          <PasswordInput
            onComplete={(password) => {
              setPassword(password);
              setStep(3);
            }}
          />
        )}

        {step === 3 && (
          <NicknameInput
            loginId={loginId}
            password={password}
            onComplete={() => {
              navigate('/');
            }}
          />
        )}
      </form>

      <div className={styles.linkContainer}>
        <span>이미 회원이신가요?</span>
        <Link to="/" className={styles.link}>
          로그인
        </Link>
      </div>
    </div>
  );
}

export default Signup;
