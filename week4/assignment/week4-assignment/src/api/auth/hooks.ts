import { useMutation } from '@tanstack/react-query';
import { login, signup } from './api';
import type { LoginRequest, LoginResponse, SignupRequest } from './types';
import { STORAGE_KEY } from '../../shared/constants/storageKey';
import type { AxiosError } from 'axios';
import { useNavigate } from 'react-router';

// 로그인
export const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (request: LoginRequest) => login(request),
    onSuccess: (response: LoginResponse) => {
      if (response.success && response.data) {
        localStorage.setItem(STORAGE_KEY.USER_ID, response.data.userId);
        navigate('/mypage/info');
      }
    },
    onError: (error: AxiosError) => {
      console.error('❌ 로그인 실패:', error.response?.data || error.message);
    },
  });
};

// 회원가입
interface Props {
  onSuccess: (nickname: string) => void;
  onError: (message: string) => void;
}

export const useSignup = ({ onSuccess, onError }: Props) => {
  return useMutation({
    mutationFn: (request: SignupRequest) => signup(request),
    onSuccess: (res) => {
      if (res.success && res.data) {
        onSuccess(res.data.nickname);
      }
    },
    onError: (error: AxiosError) => {
      const data = error.response?.data as { message?: string };
      const msg = data?.message || error.message;
      onError(msg);
    },
  });
};
