import { useState } from 'react';
import Input from '../../shared/components/Input';
import Button from '../../shared/components/Button';
import * as styles from './MyPageSearch.style.css.ts';
import { useSearchUsersByNickname } from '../../api/user/hooks';

function MyPageSearch() {
  const [nickname, setNickname] = useState<string>('');
  const { mutate } = useSearchUsersByNickname();
  const [searchResult, setSearchResult] = useState<string[]>([]);

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchResult([]);

    mutate(
      { keyword: nickname },
      {
        onSuccess: (res) => {
          setSearchResult(res.data?.nicknameList || []);
        },
      },
    );
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

      {searchResult.length > 0 && (
        <ul className={styles.searchResultList}>
          {searchResult.map((nick, index) => (
            <li key={index} className={styles.searchResultItem}>
              {nick}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MyPageSearch;
