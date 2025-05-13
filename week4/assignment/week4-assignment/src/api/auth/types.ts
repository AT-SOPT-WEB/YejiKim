import type { BaseResponse } from '../../shared/network/baseResponse';

// 로그인
export interface LoginRequest {
  loginId: string;
  password: string;
}

export interface LoginData {
  userId: string;
}

export type LoginResponse = BaseResponse<LoginData>;

// 회원가입
export interface SignupRequest {
  loginId: string;
  password: string;
  nickname: string;
}

export interface SignupData {
  userId: string;
  nickname: string;
}

export type SignupResponse = BaseResponse<SignupData>;
