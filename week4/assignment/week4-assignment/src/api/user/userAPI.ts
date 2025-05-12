import axiosInstance from '../../shared/network/axiosInstance';
import type { MyNicknameResponse } from './types';

// 내 닉네임 조회 API
export const myNickname = async (): Promise<MyNicknameResponse> => {
  const response = await axiosInstance.get('/api/v1/users/me');
  return response.data;
};
