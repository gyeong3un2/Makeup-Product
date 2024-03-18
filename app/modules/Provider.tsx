'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const defaultOptions = {
  queries: {
    retry: false,
    staleTime: 1000 * 60,
    refetchOnWindowFocus: false,
  },
};

interface IProviderProps {
  children: React.ReactNode;
}

function Provider({ children }: IProviderProps) {
  const queryClient = new QueryClient({ defaultOptions });

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default Provider;
