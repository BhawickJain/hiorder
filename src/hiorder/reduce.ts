/**
 * Given an array of type T, return an array of T or U when reduced with a function that take two argument and returns one of either type T or a new type U
 *
 * @remarks
 * read about reduce (also known as Fold) on [wikipedia](https://en.wikipedia.org/wiki/Fold_%28higher-order_function%29)
 *
 * @example
 * Sum an array of Numbers with reduce (type T -> T example)
 * ```ts
 * reduce([1, 2, 3], (a: number, b: number) => a+b, 0)
 * // 6
 * ```
 *
 * @example
 * Return a contenated string of numbers from array of numbers (type T -> U example)
 * ```ts
 * reduce([1, 2, 3], (a: string, b: number) => `${a}${b}`, "")
 * // "123"
 * ```
 *
 * @param arr - array of type T to be reduced
 * @param callbackFn  - function that will perform the reduction (previous_result, current_value) => new_result
 * @param initialValue - initial value of previous_result, if another type U is returned, previous_result must also be type U.
 * @returns single value of T or U, respective of the return type of the function.
 */
export function reduce<T, U>(
  arr: T[],
  callbackFn: (prev: U, curr: T, currentIndex?: number, arr?: T[]) => U,
  initialValue: U,
): U {
  let prev: U = initialValue;

  for (let i = 0; i < arr.length; i++) {
    const curr: T = arr[i];
    prev = callbackFn(prev, curr, i, arr);
  }

  return prev;
}

export default reduce;
