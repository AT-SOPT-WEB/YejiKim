// userInfo 는 총 2개의 값을 포함하고 있어요.
// 1. data : 데이터를 가져오는 상태
// 2. status : 데이터
//    - status 는 3개의 값을 가질 수 있어요.
//      (1) idle : 데이터를 가져오지 않은 상태
//      (2) pending : 데이터를 가져오는 중
//      (3) resolved : 데이터를 가져오는 완료
//      (4) rejected : 데이터를 가져오는 중 에러 발생
//       심화과제에서는 pending, rejected 상태도 고려해야 해요.

// userInfo.status, userInfo.data 를 통해 접근 가능하겠죠?
// userInfo.status 는 데이터를 가져오는 상태를 확인할 수 있어요.
// console.log(userInfo.status) 와 같이 접근 가능해요.

// userInfo.data 는 말그대로 과제에서 사용자 정보를 표시하기 위한 값이에요.
// console.log(userInfo.data) 와 같이 접근 가능해요.

export const getGithubUserInfo = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}`);

  if (!response.ok) throw new Error('Network response was not ok');

  const data = await response.json();

  return data;
};
