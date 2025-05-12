import { useQuery } from '@tanstack/react-query';
import { myNickname } from '../userAPI';

export const useMyNickname = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['myNickname'],
    queryFn: () => myNickname(),
  });

  return { data, isLoading, error };
};
