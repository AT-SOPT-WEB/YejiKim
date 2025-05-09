import { useMutation } from '@tanstack/react-query';
import { login } from '../authAPI';
import type { LoginRequest, LoginResponse } from '../types';
import { STORAGE_KEY } from '../../../shared/constants/storageKey';
import type { AxiosError } from 'axios';

export const useLogin = (navigate: (path: string) => void) => {
  return useMutation({
    mutationFn: (request: LoginRequest) => login(request),
    onSuccess: (response: LoginResponse) => {
      if (response.success && response.data) {
        localStorage.setItem(STORAGE_KEY.USER_ID, response.data.userId);
        navigate('/mypage');
      }
    },
    onError: (error: AxiosError) => {
      console.error('❌ 로그인 실패:', error.response?.data || error.message);
    },
  });
};
