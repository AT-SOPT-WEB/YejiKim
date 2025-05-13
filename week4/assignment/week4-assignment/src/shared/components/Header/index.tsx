import { Link } from 'react-router';
import * as styles from './style.css';
import { Menu, User, X } from 'lucide-react';
import { useFetchMyNickname } from '../../../api/user/hooks';
import { STORAGE_KEY } from '../../constants/storageKey';
import { useState } from 'react';
import clsx from 'clsx';

function Header() {
  const { data } = useFetchMyNickname();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleLogout = () => {
    localStorage.removeItem(STORAGE_KEY.USER_ID);
    location.href = '/';
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const nickname = data?.data?.nickname;

  return (
    <header className={styles.header}>
      <div className={styles.topWrapper}>
        <div className={styles.navAndMenu}>
          <div className={styles.menuWrapper}>
            <button className={styles.menuButton} onClick={toggleMenu}>
              {menuOpen ? (
                <X className={styles.menuIcon} aria-label="메뉴 닫기" />
              ) : (
                <Menu className={styles.menuIcon} aria-label="메뉴 열기" />
              )}
            </button>
          </div>

          <nav className={clsx(styles.nav, menuOpen && styles.navOpen)}>
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
        </div>

        <div className={styles.userInfo}>
          <User className={styles.userIcon} />
          <span className={styles.userName}>{nickname}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
