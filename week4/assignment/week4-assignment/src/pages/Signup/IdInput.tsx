import Input from '../../shared/components/Input';
import Button from '../../shared/components/Button';
import { useState } from 'react';
import ErrorMessage from '../../shared/components/ErrorMessage';
interface Props {
  onComplete: (loginId: string) => void;
}

function IdInput({ onComplete }: Props) {
  const [id, setId] = useState('');
  const [error, setError] = useState('');

  const isLong = id.length > 20;
  const isValidLength = id.length >= 8 && !isLong;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setId(value);

    if (value.length > 20) {
      setError('최대 20자 이하로 입력해주세요.');
    } else {
      setError('');
    }
  };

  const handleNext = () => {
    if (!isValidLength) return;
    onComplete(id);
  };

  return (
    <>
      <Input
        placeholder="아이디를 입력해주세요 (8~20자, 대소문자/숫자만 가능)"
        value={id}
        onChange={handleChange}
      />
      {error && <ErrorMessage error={error} />}
      <Button type="button" onClick={handleNext} disabled={!isValidLength}>
        다음
      </Button>
    </>
  );
}

export default IdInput;
