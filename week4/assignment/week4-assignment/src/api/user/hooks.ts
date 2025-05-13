import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchMyNickname, updateMyNickname, searchUsersByNickname } from './api';
import type {
  UpdateNicknameRequest,
  SearchUsersByNicknameRequest,
  SearchUsersByNicknameResponse,
} from './types';
import type { AxiosError } from 'axios';

// 내 닉네임 조회
export const useFetchMyNickname = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['myNickname'],
    queryFn: () => fetchMyNickname(),
  });

  return { data, isLoading, error };
};

// 내 닉네임 수정
interface Props {
  onError: (message: string) => void;
}

export const useUpdateMyNickname = ({ onError }: Props) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (request: UpdateNicknameRequest) => updateMyNickname(request),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['myNickname'] });
    },
    onError: (error: AxiosError<{ message?: string }>) => {
      const message = error.response?.data?.message ?? error.message;
      onError?.(message);
    },
  });
};

export const useSearchUsersByNickname = () => {
  return useMutation<SearchUsersByNicknameResponse, Error, SearchUsersByNicknameRequest>({
    mutationFn: (request: SearchUsersByNicknameRequest) => searchUsersByNickname(request),
  });
};
