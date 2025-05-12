import axiosInstance from '../../shared/network/axiosInstance';
import type { MyNicknameResponse, UpdateNicknameRequest, UpdateNicknameResponse } from './types';

// 내 닉네임 조회 API
export const myNickname = async (): Promise<MyNicknameResponse> => {
  const response = await axiosInstance.get('/api/v1/users/me');
  return response.data;
};

// 내 닉네임 수정 API
export const updateNickname = async (
  request: UpdateNicknameRequest,
): Promise<UpdateNicknameResponse> => {
  const response = await axiosInstance.patch('/api/v1/users', request);
  return response.data;
};
