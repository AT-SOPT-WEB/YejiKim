import Input from '../../shared/components/Input';
import Button from '../../shared/components/Button';
import { useState } from 'react';
import ErrorMessage from '../../shared/components/ErrorMessage';

interface Props {
  onComplete: (nickname: string) => void;
}

function NicknameInput({ onComplete }: Props) {
  const [nickname, setNickname] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!nickname.trim()) {
      setError('닉네임을 입력해주세요.');
      return;
    }

    setError('');
    onComplete(nickname);
  };

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  return (
    <>
      <Input placeholder="닉네임" value={nickname} onChange={handleNicknameChange} />
      {error && <ErrorMessage error={error} />}
      <Button type="submit" onClick={handleSubmit}>
        회원가입
      </Button>
    </>
  );
}

export default NicknameInput;
