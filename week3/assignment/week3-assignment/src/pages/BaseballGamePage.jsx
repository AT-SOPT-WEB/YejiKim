/** @jsxImportSource @emotion/react */
import TextInput from '../components/Common/TextInput';
import {
  pageWrapper,
  formStyle,
  messageStyle,
  historyStyle,
  historyItemStyle,
} from './BaseballGame.style';
import { useState } from 'react';
import { generateAnswer, checkAnswer, isValidUserInput } from '../utils/baseballUtils';
import { MAX_LENGTH } from '../constants/maxLength';
function BaseballGamePage() {
  const [userInput, setUserInput] = useState('');
  const [answer, setAnswer] = useState(generateAnswer());
  const [message, setMessage] = useState('');
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);

  // 입력 핸들러
  const handleUserInputChange = (e) => {
    setUserInput(e.target.value);
  };

  // 제출 핸들러
  const handleSubmit = (e) => {
    console.log('정답 : ', answer);
    e.preventDefault();

    // 숫자 유효성 검사
    if (!isValidUserInput(userInput)) {
      setMessage('⚠️ 서로 다른 숫자 3자리를 입력해주세요!');
      setUserInput('');
      return;
    }

    // 시도 횟수 제한
    if (count >= 10) {
      resetGame(5000, '💥 게임 오버! 10번 넘겨서 실패하였습니다. 게임이 5초 뒤에 초기화됩니다.');
      return;
    }

    // 정답 확인
    if (userInput === answer.join('')) {
      resetGame(3000, '🎉 정답입니다! 3초 뒤에 게임이 리셋됩니다.');
      return;
    } else {
      const { strike, ball } = checkAnswer(userInput, answer);
      setMessage(`${strike} 스트라이크 ${ball} 볼`);
      setCount(count + 1);
      setHistory([...history, `${userInput} - ${strike}S ${ball}B`]);
      setUserInput('');
    }
  };

  // 게임 초기화
  const handleGameReset = () => {
    setAnswer(generateAnswer());
    setUserInput('');
    setMessage('');
    setHistory([]);
    setCount(0);
  };

  // 게임 초기화
  const resetGame = (time = 0, message = '') => {
    setMessage(message);
    setTimeout(() => {
      handleGameReset();
    }, time);
  };

  return (
    <section css={pageWrapper}>
      <form css={formStyle} onSubmit={handleSubmit} aria-label="숫자 야구 게임 입력">
        <TextInput
          placeholder="3자리 숫자를 입력해주세요"
          value={userInput}
          onChange={handleUserInputChange}
          maxLength={MAX_LENGTH}
        />
      </form>
      <p css={messageStyle} role="alert">
        {message}
      </p>
      <ul css={historyStyle} aria-label="게임 기록">
        {history.map((item, index) => (
          <li key={index} css={historyItemStyle}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default BaseballGamePage;
