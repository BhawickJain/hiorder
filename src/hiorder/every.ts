/**
 * Returns true if every elements is true according to the provided predicate function
 *
 * @example
 * ```ts
 * every([1, 2, 3, 4], (it: number) => it < 10)
 * // => true
 * ```
 *
 * @param arr {el: Array<T>} - array of elements
 * @param predicateFn {(el: T) => boolean} - predicate function
 * @returns true if all items in array evaluate true according to the predicate function
 */
export function every<T>(
  arr: Array<T>,
  predicateFn: (el: T) => boolean,
): boolean {
  let allTrue = true;
  arr.forEach((el) => {
    allTrue = allTrue === false || !predicateFn(el) ? false : true;
  });
  return allTrue;
}
