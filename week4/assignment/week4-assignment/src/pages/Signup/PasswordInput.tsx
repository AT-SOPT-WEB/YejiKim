import Input from '../../shared/components/Input';
import Button from '../../shared/components/Button';
import { useState } from 'react';
import ErrorMessage from '../../shared/components/ErrorMessage';

interface Props {
  onComplete: (password: string) => void;
}

function PasswordInput({ onComplete }: Props) {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const getErrorMessage = (pw: string, cf: string): string => {
    if (!pw || !cf) return '';
    if (pw.length > 20 || cf.length > 20) return '최대 길이는 20자 이하로 입력해주세요.';
    if (pw !== cf) return '비밀번호가 일치하지 않아요.';
    if (pw.length < 8) return '8자 이상 입력해주세요.';
    return '';
  };

  const error = getErrorMessage(password, confirm);
  const isValid = error === '';

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
