import { useMutation } from '@tanstack/react-query';
import { searchUser } from '../userAPI';
import type { SearchUserRequest, SearchUserResponse } from '../types';

export const useSearchUser = () => {
  return useMutation<SearchUserResponse, Error, SearchUserRequest>({
    mutationFn: searchUser,
  });
};
