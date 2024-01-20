// eslint-disable-next-line @typescript-eslint/ban-types
type NonFunctional<T> = T extends Function ? never : T;

export class EnumUtils {
  /**
   * Helper to produce an array of enum values.
   * @param enumeration Enumeration object.
   */
  static enumToArray<T>(enumeration: T): NonFunctional<T[keyof T]>[] {
    return (
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      Object.keys(enumeration)
        .filter((key) => isNaN(Number(key)))
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        .map((key) => enumeration[key])
        .filter((val) => typeof val === 'number' || typeof val === 'string')
    );
  }
}
