/** @jsxImportSource @emotion/react */
import Header from './components/Header';
import GithubSearchPage from './pages/GithubSearchPage';
import BaseballGamePage from './pages/BaseballGamePage';
import { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('baseball');

  return (
    <>
      <main>
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === 'baseball' && <BaseballGamePage />}
        {activeTab === 'github' && <GithubSearchPage />}
      </main>
    </>
  );
}

export default App;
