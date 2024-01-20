import { ApiError } from '../infra/ApiError';
import { NetworkError } from '../infra/NetworkError';

export function HandleApiRequestExceptions(networkErrorMessage: string) {
  return function (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/ban-types
    target: Object,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      try {
        return await originalMethod.apply(this, args);
      } catch (e) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (!e.response) throw NetworkError.fromError(e, networkErrorMessage);
        throw ApiError.fromError(e);
      }
    };

    return descriptor;
  };
}
