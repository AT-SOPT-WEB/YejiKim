import type { BaseResponse } from '../../../shared/network/baseResponse';

export interface LoginRequest {
  loginId: string;
  password: string;
}

export interface LoginData {
  userId: string;
}

export type LoginResponse = BaseResponse<LoginData>;
