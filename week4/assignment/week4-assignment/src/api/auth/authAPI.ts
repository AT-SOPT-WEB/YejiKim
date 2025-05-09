import type { LoginRequest, LoginResponse } from './types';
import axiosInstance from '../../shared/network/axiosInstance';

// 로그인 API
export const login = async (request: LoginRequest): Promise<LoginResponse> => {
  const response = await axiosInstance.post('/api/v1/auth/signin', request);
  return response.data;
};

// 회원가입 API
