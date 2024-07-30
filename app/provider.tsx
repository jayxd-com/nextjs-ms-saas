'use client';

import { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { RouterProvider } from 'react-aria-components';

declare module 'react-aria-components' {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>['push']>[1]
    >;
  }
}

interface ClientProvidersProps {
  children: ReactNode;
}

export function ClientProviders({ children }: ClientProvidersProps) {
  let router = useRouter();

  return (
    <RouterProvider navigate={router.push}>
      {children}
    </RouterProvider>
  );
}
