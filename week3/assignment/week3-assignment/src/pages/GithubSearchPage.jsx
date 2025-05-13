/** @jsxImportSource @emotion/react */
import TextInput from '../components/Common/TextInput';
import { pageWrapper, formStyle, spinnerStyle } from './GithubSearchPage.style';
import { useState } from 'react';
import { getGithubUserInfo } from '../api/getGithubUserInfo';
import { ImSpinner2 } from 'react-icons/im';
import UserInfoCard from '../components/GithubSearch/UserInfoCard';
import SearchHistory from '../components/GithubSearch/SearchHistory';
import useLocalStorage from '../hooks/useLocalStorage';
import { STORAGE_KEYS } from '../constants/storageKeys';

function GithubSearchPage() {
  const [userInput, setUserInput] = useState('');
  const [history, setHistory] = useLocalStorage(STORAGE_KEYS.SEARCH_HISTORY, []);
  const [userInfo, setUserInfo] = useState({ status: 'idle', data: null });

  // 입력 핸들러
  const handleUserInputChange = (e) => setUserInput(e.target.value);

  // 제출 핸들러
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    fetchGithubUserInfo(userInput);

    setUserInput('');
  };

  // 유저 정보 초기화 핸들러
  const handleClearUserInfo = () => {
    setUserInfo({ status: 'idle', data: null });
  };

  // 검색 기록 삭제 핸들러
  const handleDeleteHistory = (item) => {
    setHistory(history.filter((historyItem) => historyItem !== item));
  };

  // 검색 기록 클릭 핸들러
  const handleClickHistory = (userId) => {
    fetchGithubUserInfo(userId);
  };

  // 깃허브 유저 정보 가져오기
  const fetchGithubUserInfo = async (userId) => {
    setUserInfo({ status: 'pending', data: null });
    try {
      const data = await getGithubUserInfo(userId);
      setUserInfo({ status: 'resolved', data });
      setHistory((prev) => updateHistory(prev, userId));
    } catch (err) {
      console.error('에러 발생 : ', err);
      setUserInfo({ status: 'rejected', data: null });
    }
  };

  // 히스토리 업데이트
  const updateHistory = (prev, keyword) => {
    if (prev.includes(keyword)) return prev;
    return [...prev, keyword].slice(-3);
  };

  return (
    <section css={pageWrapper}>
      <form css={formStyle} onSubmit={handleSubmit}>
        <TextInput
          id="github-search"
          placeholder="Github 프로필을 검색해보세요"
          value={userInput}
          onChange={handleUserInputChange}
        />
      </form>

      {history.length > 0 && (
        <SearchHistory
          history={history}
          onSelect={handleClickHistory}
          onDelete={handleDeleteHistory}
        />
      )}

      {userInfo.status === 'pending' && <ImSpinner2 css={spinnerStyle} aria-label="로딩 중" />}

      {userInfo.status === 'rejected' && (
        <p role="alert">결과를 찾을 수 없습니다. 다시 시도해 주세요.</p>
      )}

      {userInfo.status === 'resolved' && (
        <UserInfoCard user={userInfo.data} onClear={handleClearUserInfo} />
      )}
    </section>
  );
}

export default GithubSearchPage;
