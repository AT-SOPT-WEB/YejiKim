import { useMutation } from '@tanstack/react-query';
import { signup } from '../authAPI';
import type { SignupRequest, SignupResponse } from '../types';
import { STORAGE_KEY } from '../../../shared/constants/storageKey';
import type { AxiosError } from 'axios';

export const useSignup = () => {
  return useMutation({
    mutationFn: (request: SignupRequest) => signup(request),
    onSuccess: (response: SignupResponse) => {
      if (response.success && response.data) {
        localStorage.setItem(STORAGE_KEY.USER_ID, response.data.userId);
        alert(`${response.data.nickname}님, 회원가입이 완료되었습니다!`);
      }
    },
    onError: (error: AxiosError) => {
      console.error('❌ 회원가입 실패:', error.response?.data || error.message);
      alert(`${error.response?.data} 이유로 회원가입에 실패했어요. 다시 시도해주세요.`);
    },
  });
};
