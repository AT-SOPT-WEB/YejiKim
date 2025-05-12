import Input from '../../shared/components/Input';
import Button from '../../shared/components/Button';
import { useEffect, useState } from 'react';
import ErrorMessage from '../../shared/components/ErrorMessage';

interface Props {
  onComplete: (password: string) => void;
}

function PasswordInput({ onComplete }: Props) {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');

  const isEmpty = password === '' || confirm === '';
  const isMismatch = password !== confirm;
  const isTooLong = password.length > 20 || confirm.length > 20;

  const isValid = !isEmpty && !isMismatch && !isTooLong;

  useEffect(() => {
    if (isTooLong) {
      setError('최대 길이는 20자 이하로 입력해주세요.');
    } else if (!isEmpty && isMismatch) {
      setError('비밀번호가 일치하지 않아요.');
    } else {
      setError('');
    }
  }, [password, confirm]);

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleChangeConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirm(e.target.value);
  };

  const handleNext = () => {
    if (!isValid) return;
    onComplete(password);
  };

  return (
    <>
      <Input
        type="password"
        placeholder="비밀번호를 입력 (대문자/소문자/숫자만 사용 가능, 8자 이상 20자이하)"
        value={password}
        onChange={handleChangePassword}
        showIcon={false}
      />
      <Input
        type="password"
        placeholder="비밀번호 확인"
        value={confirm}
        onChange={handleChangeConfirm}
        showIcon={false}
      />

      {error && <ErrorMessage error={error} />}

      <Button type="button" onClick={handleNext} disabled={!isValid}>
        다음
      </Button>
    </>
  );
}

export default PasswordInput;
