import Button from '../../shared/components/Button';
import Input from '../../shared/components/Input';
import * as styles from './MyPageInfo.style.css';
import { useUpdateMyNickname } from '../../api/user/hooks/useUpdateMyNickname';
import { useState } from 'react';

function MyPageInfo() {
  const [nickname, setNickname] = useState('');

  const { mutate } = useUpdateMyNickname({
    onSuccess: () => {
      alert('닉네임이 수정되었습니다.');
      setNickname('');
    },
    onError: (message) => {
      alert(message);
      setNickname('');
    },
  });

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ nickname });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>내 정보 수정하기</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          placeholder="새 닉네임을 입력하세요"
          type="text"
          value={nickname}
          onChange={handleNicknameChange}
        />
        <Button type="submit">저장</Button>
      </form>
    </div>
  );
}

export default MyPageInfo;
