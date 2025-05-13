import type { LoginRequest, LoginResponse, SignupRequest, SignupResponse } from './types';
import axiosInstance from '../../shared/network/axiosInstance';

// 로그인 API
export const login = async (request: LoginRequest): Promise<LoginResponse> => {
  const response = await axiosInstance.post('/api/v1/auth/signin', request);
  return response.data;
};

// 회원가입 API
export const signup = async (request: SignupRequest): Promise<SignupResponse> => {
  const response = await axiosInstance.post('/api/v1/auth/signup', request);
  return response.data;
};
