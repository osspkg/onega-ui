import { defer, MonoTypeOperatorFunction, Observable } from 'rxjs';

export function initialize<T>(initializer: () => void): MonoTypeOperatorFunction<T> {
  return (source: Observable<T>) => defer(() => {
    initializer();
    return source;
  });
}
