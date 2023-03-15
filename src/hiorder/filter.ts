/**
 * Return subset of elements that evaluate true by the a given predicate function and element array
 *
 * @example
 * ```ts
 * filter([1, -1, 2, -2, 3, -3], (it: number) => it < 0)
 *  // => [-1, -2, -3]
 * ```
 *
 * @param inputArray - array to be filtered with the predicate function
 * @param fn - predicate function that takes an element in the array and returns boolean
 * @returns an array of element that are evaluated as true by the predicate function
 */
export function filter<T>(inputArray: T[], fn: (el: T) => boolean): T[] {
  const filteredArr: T[] = [];

  inputArray.forEach((el: T) => {
    fn(el) && filteredArr.push(el);
  });

  return filteredArr;
}
