import React, { lazy, useMemo } from 'react';
import { Suspense } from 'react';
import { Spinner } from '../Spinner';

type SuspendedElementProps = {
  loader: () => Promise<any>;
};

const WithSuspense = ({ loader, ...props }: SuspendedElementProps) => {
  const LazyComponent = useMemo(() => lazy(loader), [loader]);

  return (
    <Suspense fallback={<Spinner />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export { WithSuspense };
