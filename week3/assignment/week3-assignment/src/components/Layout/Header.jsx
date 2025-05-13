/** @jsxImportSource @emotion/react */

import { headerWrapper, headerTitle, tabButtonWrapper, tabButton } from './Header.style';

function Header({ activeTab, setActiveTab }) {
  return (
    <div css={headerWrapper}>
      <h1 css={headerTitle}>⚾️ 숫자 야구 || 깃허브 검색 🔎</h1>
      <div css={tabButtonWrapper}>
        <button
          css={tabButton(activeTab === 'baseball')}
          onClick={() => setActiveTab('baseball')}
          aria-label="숫자 야구"
          role="tab"
        >
          ⚾️ 숫자 야구 ⚾️
        </button>
        <button
          css={tabButton(activeTab === 'github')}
          onClick={() => setActiveTab('github')}
          aria-label="깃허브 검색"
          role="tab"
        >
          🔍 깃허브 검색 🔍
        </button>
      </div>
    </div>
  );
}

export default Header;
