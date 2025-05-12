import Input from '../../shared/components/Input';
import Button from '../../shared/components/Button';
import { useState } from 'react';
import ErrorMessage from '../../shared/components/ErrorMessage';
import { useSignup } from '../../api/auth/hooks/useSignup';

interface Props {
  onComplete: (nickname: string) => void;
  loginId: string;
  password: string;
}

function NicknameInput({ onComplete, loginId, password }: Props) {
  const [nickname, setNickname] = useState('');
  const [error, setError] = useState('');

  const { mutate, isPending } = useSignup({
    onSuccess: (nickname) => {
      alert(`${nickname}님, 회원가입이 완료되었습니다!`);
      onComplete(nickname);
    },
    onError: (message) => {
      alert(`${message} 회원가입을 다시 시도해주세요.`);
    },
  });

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
    if (error) setError('');
  };

  const handleSubmit = () => {
    if (!nickname.trim()) {
      setError('닉네임을 입력해주세요.');
      return;
    }

    mutate({ loginId, password, nickname });
  };

  const isDisabled = nickname.trim() === '' || isPending;

  return (
    <>
      <Input placeholder="닉네임" value={nickname} onChange={handleNicknameChange} />
      {error && <ErrorMessage error={error} />}
      <Button type="button" onClick={handleSubmit} disabled={isDisabled}>
        회원가입
      </Button>
    </>
  );
}

export default NicknameInput;
