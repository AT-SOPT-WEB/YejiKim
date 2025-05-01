/** @jsxImportSource @emotion/react */
import TextInput from '../components/TextInput';
import {
  baseballGameWrapper,
  formStyle,
  messageStyle,
  historyStyle,
  historyItemStyle,
} from './BaseballGame.style';
import { useState } from 'react';

const generateAnswer = () => {
  const randomSet = new Set();
  while (randomSet.size < 3) {
    randomSet.add(Math.floor(Math.random() * 10));
  }
  return Array.from(randomSet);
};

function BaseballGamePage() {
  const [input, setInput] = useState('');
  const [answer, setAnswer] = useState(generateAnswer());
  console.log('1. 생성한 랜덤 정답 :', answer);
  const [message, setMessage] = useState('');
  const [count, setCount] = useState(0);

  const [history, setHistory] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('2. 입력한 숫자 :', input);

    if (!/^\d{3}$/.test(input) || new Set(input).size !== 3) {
      setMessage('⚠️ 서로 다른 숫자 3자리를 입력해주세요!');
      setInput('');
      return;
    }

    if (count >= 10) {
      setMessage('💥 게임 오버! 10번 넘겨서 실패하였습니다. 게임이 5초 뒤에 초기화됩니다.');

      setTimeout(() => {
        handleReset();
      }, 5000);
      return;
    }

    if (input === answer.join('')) {
      setMessage('🎉 정답입니다! 3초 뒤에 게임이 리셋됩니다.');
      setTimeout(() => {
        handleReset();
      }, 3000);
    } else {
      const { strike, ball } = checkAnswer(input, answer);
      setMessage(`${strike} 스트라이크 ${ball} 볼`);
      setCount(count + 1);
      setHistory([...history, `${input} - ${strike}S ${ball}B`]);
      setInput('');
    }
  };

  const checkAnswer = (input, answer) => {
    let strike = 0;
    let ball = 0;

    const inputArray = input.split('');
    const answerArray = answer.join('').split('');

    for (let i = 0; i < 3; i++) {
      if (inputArray[i] === answerArray[i]) {
        strike++;
      } else if (answerArray.includes(inputArray[i])) {
        ball++;
      }
    }

    return { strike, ball };
  };

  const handleReset = () => {
    setAnswer(generateAnswer());
    setInput('');
    setMessage('');
    setHistory([]);
    setCount(0);
  };

  return (
    <section css={baseballGameWrapper}>
      <form css={formStyle} onSubmit={handleSubmit}>
        <TextInput
          placeholder="3자리 숫자를 입력해주세요"
          value={input}
          onChange={handleInputChange}
        />
      </form>
      <p css={messageStyle}>{message}</p>
      <ul css={historyStyle}>
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
