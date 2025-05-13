import axiosInstance from '../../shared/network/axiosInstance';
import type {
  MyNicknameResponse,
  SearchUsersByNicknameRequest,
  SearchUsersByNicknameResponse,
  UpdateNicknameRequest,
  UpdateNicknameResponse,
} from './types';

// 내 닉네임 조회 API
export const fetchMyNickname = async (): Promise<MyNicknameResponse> => {
  const response = await axiosInstance.get('/api/v1/users/me');
  return response.data;
};

// 내 닉네임 수정 API
export const updateMyNickname = async (
  request: UpdateNicknameRequest,
): Promise<UpdateNicknameResponse> => {
  const response = await axiosInstance.patch('/api/v1/users', request);
  return response.data;
};

// 전체 유저 조회 API
export const searchUsersByNickname = async (
  request: SearchUsersByNicknameRequest,
): Promise<SearchUsersByNicknameResponse> => {
  const response = await axiosInstance.get('/api/v1/users', { params: request });
  return response.data;
};
