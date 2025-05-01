import Header from './components/Header';
import GithubSearchPage from './pages/GithubSearchPage';
import BaseballGamePage from './pages/BaseballGamePage';
import { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('github');

  return (
    <>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main>
        {activeTab === 'github' && <GithubSearchPage />}
        {activeTab === 'baseball' && <BaseballGamePage />}
      </main>
    </>
  );
}

export default App;
