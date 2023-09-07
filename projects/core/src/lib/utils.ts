import { defer, MonoTypeOperatorFunction, Observable } from 'rxjs';

export function initialize<T>(initializer: () => void): MonoTypeOperatorFunction<T> {
  return (source: Observable<T>) => defer(() => {
    initializer();
    return source;
  });
}

export function uniqueString(length: number): string {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
