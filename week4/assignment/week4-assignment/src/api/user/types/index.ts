import type { BaseResponse } from '../../../shared/network/baseResponse';

export interface MyNicknameData {
  nickname: string;
}

export type MyNicknameResponse = BaseResponse<MyNicknameData>;

export interface UpdateNicknameRequest {
  nickname: string;
}

export type UpdateNicknameResponse = BaseResponse<null>;

export interface SearchUserRequest {
  keyword: string;
}

export interface SearchUserData {
  nicknameList: string[];
}

export type SearchUserResponse = BaseResponse<SearchUserData>;
