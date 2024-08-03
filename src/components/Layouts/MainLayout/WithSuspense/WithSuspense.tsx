import React, { lazy, useMemo } from 'react';
import { Suspense } from 'react';
import { Spinner } from '../../../Spinner';

type WithSuspenseProps = {
  loader: () => Promise<{ default: React.ComponentType<any> }>;
};

const WithSuspense = ({ loader, ...props }: WithSuspenseProps) => {
  const LazyComponent = useMemo(() => lazy(loader), [loader]);

  return (
    <Suspense fallback={<Spinner />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export { WithSuspense };
