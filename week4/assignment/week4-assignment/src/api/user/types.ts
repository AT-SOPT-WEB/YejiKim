import type { BaseResponse } from '../../shared/network/baseResponse';

// 내 닉네임 조회
export interface MyNicknameData {
  nickname: string;
}

export type MyNicknameResponse = BaseResponse<MyNicknameData>;

// 내 닉네임 수정
export interface UpdateNicknameRequest {
  nickname: string;
}

export type UpdateNicknameResponse = BaseResponse<null>;

// 유저 조회
export interface SearchUsersByNicknameRequest {
  keyword: string;
}

export interface UserSearchResult {
  nicknameList: string[];
}

export type SearchUsersByNicknameResponse = BaseResponse<UserSearchResult>;
