import Input from '../../shared/components/Input';
import Button from '../../shared/components/Button';
import { useState } from 'react';
import ErrorMessage from '../../shared/components/ErrorMessage';
interface Props {
  onComplete: (loginId: string) => void;
}

function IdInput({ onComplete }: Props) {
  const [id, setId] = useState<string>('');

  const getErrorMessage = (value: string): string => {
    if (value.length > 20) return '최대 20자 이하로 입력해주세요.';
    return '';
  };

  const error = getErrorMessage(id);
  const isValid = id.length >= 8 && id.length <= 20;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handleNext = () => {
    if (!isValid) return;
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

      <Button type="button" onClick={handleNext} disabled={!isValid}>
        다음
      </Button>
    </>
  );
}

export default IdInput;
