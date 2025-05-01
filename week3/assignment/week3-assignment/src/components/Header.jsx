/** @jsxImportSource @emotion/react */

import { headerWrapper, headerTitle, tabButtonWrapper, tabButton } from './Header.style';

function Header({ activeTab, setActiveTab }) {
  return (
    <header css={headerWrapper}>
      <h1 css={headerTitle}>⚾️ 숫자 야구 || 깃허브 검색 🔎</h1>
      <div css={tabButtonWrapper}>
        <button css={tabButton(activeTab === 'baseball')} onClick={() => setActiveTab('baseball')}>
          ⚾️ 숫자 야구 ⚾️
        </button>
        <button css={tabButton(activeTab === 'github')} onClick={() => setActiveTab('github')}>
          🔍 깃허브 검색 🔍
        </button>
      </div>
    </header>
  );
}

export default Header;
