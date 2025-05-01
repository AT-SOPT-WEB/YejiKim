/** @jsxImportSource @emotion/react */
import TextInput from '../components/TextInput';
import {
  githubSearchPageWrapper,
  formStyle,
  userInfoCardStyle,
  historySectionStyle,
  historyListStyle,
  historyItemStyle,
  clearButtonStyle,
  userInfoImageStyle,
  userInfoAnchorStyle,
  userInfoTextStyle,
  userFollowStyle,
  userFollowWrapperStyle,
  userFollowTextStyle,
  historyDeleteButtonStyle,
  historyItemButtonStyle,
} from './GithubSearchPage.style';
import { useState, useEffect } from 'react';
import { getGithubUserInfo } from '../api/getGithubUserInfo';
import { AiOutlineClose } from 'react-icons/ai';
function GithubSearchPage() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [userInfo, setUserInfo] = useState({ status: 'idle', data: null });

  const handleInputChange = (e) => setInput(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setUserInfo({ status: 'pending', data: null });

    try {
      const data = await getGithubUserInfo(input);
      setUserInfo({ status: 'resolved', data });
      setHistory((prev) => updateSearchHistory(prev, input));
    } catch (err) {
      console.error('에러 발생 : ', err);
      setUserInfo({ status: 'rejected', data: null });
    }
    setInput('');
  };

  const handleClear = () => {
    setUserInfo({ status: 'idle', data: null });
  };

  const handleDeleteHistory = (item) => {
    setHistory(history.filter((historyItem) => historyItem !== item));
  };

  const handleRecentSearch = async (item) => {
    setUserInfo({ status: 'pending', data: null });

    try {
      const data = await getGithubUserInfo(item);
      setUserInfo({ status: 'resolved', data });

      setHistory((prev) => updateSearchHistory(prev, item));
    } catch (err) {
      console.error('에러 발생 : ', err);
      setUserInfo({ status: 'rejected', data: null });
    }
  };

  const updateSearchHistory = (prev, keyword) => {
    if (prev.includes(keyword)) return prev;
    return [...prev, keyword].slice(-3);
  };

  useEffect(() => {
    const storedHistory = localStorage.getItem('history');
    if (storedHistory) {
      setHistory(JSON.parse(storedHistory));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('history', JSON.stringify(history));
  }, [history]);

  return (
    <section css={githubSearchPageWrapper}>
      <form css={formStyle} onSubmit={handleSubmit}>
        <TextInput
          id="github-search"
          placeholder="Github 프로필을 검색해보세요"
          value={input}
          onChange={handleInputChange}
        />
      </form>

      {history.length > 0 && (
        <section css={historySectionStyle}>
          <p>최근 검색어</p>
          <ul css={historyListStyle}>
            {history.map((item, index) => (
              <li key={index} css={historyItemStyle}>
                <button onClick={() => handleRecentSearch(item)} css={historyItemButtonStyle}>
                  {item}
                </button>
                <button onClick={() => handleDeleteHistory(item)} css={historyDeleteButtonStyle}>
                  <AiOutlineClose />
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}

      {userInfo.status === 'resolved' && (
        <article css={userInfoCardStyle}>
          <button css={clearButtonStyle} onClick={handleClear}>
            <AiOutlineClose />
          </button>

          <a
            css={userInfoAnchorStyle}
            href={userInfo.data.html_url}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={userInfo.data.avatar_url}
              alt={`${userInfo.data.login} 프로필 이미지`}
              css={userInfoImageStyle}
            />
          </a>

          <header>
            <a
              css={userInfoAnchorStyle}
              href={userInfo.data.html_url}
              target="_blank"
              rel="noreferrer"
            >
              <h2>{userInfo.data.name || userInfo.data.login}</h2>
            </a>
            <p css={userInfoTextStyle}>@{userInfo.data.login}</p>
            {userInfo.data.bio && <p css={userInfoTextStyle}>{userInfo.data.bio}</p>}
          </header>

          <section css={userFollowWrapperStyle}>
            <div css={userFollowStyle}>
              [ Followers ]
              <strong>
                <span css={userFollowTextStyle}>{userInfo.data.followers}</span>
              </strong>
            </div>
            <div css={userFollowStyle}>
              [ Following ]
              <strong>
                <span css={userFollowTextStyle}>{userInfo.data.following}</span>
              </strong>
            </div>
          </section>
        </article>
      )}
    </section>
  );
}

export default GithubSearchPage;
