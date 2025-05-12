import { useMutation } from '@tanstack/react-query';
import { signup } from '../authAPI';
import type { SignupRequest } from '../types';

import type { AxiosError } from 'axios';

export const useSignup = ({
  onSuccess,
  onError,
}: {
  onSuccess: (nickname: string) => void;
  onError: (message: string) => void;
}) => {
  return useMutation({
    mutationFn: (request: SignupRequest) => signup(request),
    onSuccess: (res) => {
      if (res.success && res.data) {
        onSuccess(res.data.nickname);
      }
    },
    onError: (error: AxiosError) => {
      const data = error.response?.data as { message?: string };
      const msg = data?.message || error.message;
      onError(msg);
    },
  });
};
