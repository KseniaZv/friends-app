import { ElementType, Suspense } from 'react';
import { Loader } from '../loader';

export function Loadable(Component: ElementType) {
  return function fn(props: any) {
    return (
      <Suspense fallback={<Loader />}>
        <Component {...props} />
      </Suspense>
    );
  };
}
