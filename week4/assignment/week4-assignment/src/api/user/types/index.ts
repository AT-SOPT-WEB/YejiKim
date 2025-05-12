import type { BaseResponse } from '../../../shared/network/baseResponse';

export interface MyNicknameData {
  nickname: string;
}

export type MyNicknameResponse = BaseResponse<MyNicknameData>;
