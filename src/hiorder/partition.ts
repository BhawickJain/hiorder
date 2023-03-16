/**
 * Takes an array with a function that can take each array item and evaluate it to a boolean value, returns one array containing an array of true items and false items respectively.
 * @example
 * ```ts
 * partition([1, -1, 2, -2, 3, -3], (it: number) => it < 0)
 * // => [ [ -1, -2, -3 ], [ 1, 2, 3 ] ]
 * ```
 * @param arr - array of type T to be partitioned into two arrays
 * @param predicateFn - function that will be used to partition the array, must take array item and return boolean.
 * @returns returns an array of length two containing an array item evaluated as true at index position 0 and array items evaluated as false at index position 1
 */
export function partition<T>(
  arr: Array<T>,
  predicateFn: (el: T) => boolean,
): [Array<T>, Array<T>] {
  const arrayFalse: Array<T> = [];
  const arrayTrue: Array<T> = [];
  arr.forEach((el) =>
    predicateFn(el) ? arrayTrue.push(el) : arrayFalse.push(el),
  );

  return [arrayTrue, arrayFalse];
}
