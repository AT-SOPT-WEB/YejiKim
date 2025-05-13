// 랜덤 정답 생성 
export const generateAnswer = () => {
    const randomSet = new Set();
    while (randomSet.size < 3) {
        randomSet.add(Math.floor(Math.random() * 10));
    }
    return Array.from(randomSet);
};

// 숫자 유효성 검사 
export const isValidUserInput = (userInput) => {
    return /^\d{3}$/.test(userInput) && new Set(userInput).size === 3;
};

// 숫자 게임 입력 값 <-> 정답 확인
export const checkAnswer = (userInput, answer) => {
    let strike = 0;
    let ball = 0;

    const inputArray = userInput.split('');
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