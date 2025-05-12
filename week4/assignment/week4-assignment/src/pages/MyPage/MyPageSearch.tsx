import { useState } from 'react';
import Input from '../../shared/components/Input';
import Button from '../../shared/components/Button';
import * as styles from './MyPageSearch.style.css.ts';

function MyPageSearch() {
  const [nickname, setNickname] = useState('');

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(nickname);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>SOPT 회원 조회하기</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          placeholder="검색할 닉네임을 입력하세요"
          type="text"
          value={nickname}
          onChange={handleNicknameChange}
        />
        <Button type="submit">확인</Button>
      </form>
    </div>
  );
}

export default MyPageSearch;
