import Input from '../../shared/components/Input';
import Button from '../../shared/components/Button';
import { useState } from 'react';
import ErrorMessage from '../../shared/components/ErrorMessage';
import { useSignup } from '../../api/auth/hooks';

interface Props {
  onComplete: (nickname: string) => void;
  loginId: string;
  password: string;
}

function NicknameInput({ onComplete, loginId, password }: Props) {
  const [nickname, setNickname] = useState('');

  const { mutate, isPending } = useSignup({
    onSuccess: (nickname) => {
      alert(`${nickname}님, 회원가입이 완료되었습니다!`);
      onComplete(nickname);
    },
    onError: (message) => {
      alert(`${message} 회원가입을 다시 시도해주세요.`);
    },
  });

  const getErrorMessage = (value: string) => {
    if (!value.trim()) return '닉네임을 입력해주세요.';
    return '';
  };

  const error = getErrorMessage(nickname);
  const isValid = error === '';

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleSubmit = () => {
    if (!isValid) return;

    mutate({ loginId, password, nickname });
  };

  return (
    <>
      <Input placeholder="닉네임" value={nickname} onChange={handleNicknameChange} />

      {nickname !== '' && error && <ErrorMessage error={error} />}

      <Button type="button" onClick={handleSubmit} disabled={isPending}>
        회원가입
      </Button>
    </>
  );
}

export default NicknameInput;
