import { Link } from 'react-router';
import * as styles from './style.css';
import { User } from 'lucide-react';
import { useMyNickname } from '../../../api/user/hooks/useMyNickname';
import { STORAGE_KEY } from '../../constants/storageKey';

function Header() {
  const { data, isLoading, error } = useMyNickname();

  const handleLogout = () => {
    localStorage.removeItem(STORAGE_KEY.USER_ID);
    location.href = '/';
  };

  const nickname = data?.data?.nickname;

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to="/mypage/info">내 정보</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/mypage/search">SOPT 회원 조회하기</Link>
          </li>
          <li className={styles.navItem}>
            <button onClick={handleLogout}>로그아웃</button>
          </li>
        </ul>
      </nav>

      <div className={styles.userInfo}>
        <User className={styles.userIcon} />
        <span className={styles.userName}>
          {isLoading ? '불러오는 중...' : error ? '에러 발생' : nickname}
        </span>
      </div>
    </header>
  );
}

export default Header;
