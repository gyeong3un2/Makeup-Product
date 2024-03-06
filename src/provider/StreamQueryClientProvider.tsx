'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';

const defaultOptions = {
  queries: {
    retry: false,
    staleTime: 1000 * 20,
    refetchOnWindowFocus: false,
  },
};

interface IProviderProps {
  children: React.ReactNode;
}

function StreamQueryClientProvider({ children }: IProviderProps) {
  const queryClient = new QueryClient({ defaultOptions });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default StreamQueryClientProvider;
