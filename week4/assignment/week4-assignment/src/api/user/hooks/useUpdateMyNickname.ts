import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateNickname } from '../userAPI';
import type { UpdateNicknameRequest } from '../types';
import type { BaseResponse } from '../../../shared/network/baseResponse';

interface Props {
  onSuccess?: () => void;
  onError?: (message: string) => void;
}

export const useUpdateMyNickname = ({ onSuccess, onError }: Props) => {
  const queryClient = useQueryClient();

  return useMutation<BaseResponse<null>, Error, UpdateNicknameRequest>({
    mutationFn: updateNickname,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['myNickname'] });
      onSuccess?.();
    },
    onError: (error) => {
      onError?.(error.message);
    },
  });
};
