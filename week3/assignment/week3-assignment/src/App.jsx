/** @jsxImportSource @emotion/react */
import Header from './components/Layout/Header';
import GithubSearchPage from './pages/GithubSearchPage';
import BaseballGamePage from './pages/BaseballGamePage';
import { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('baseball');

  return (
    <>
      <header>
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      </header>
      <main>
        {activeTab === 'baseball' && <BaseballGamePage />}
        {activeTab === 'github' && <GithubSearchPage />}
      </main>
    </>
  );
}

export default App;
