/**
 * Return the first item that matched the predicate function
 * @example
 * ```ts
 * console.log(find([{a: 0, b: 1}, {a: 1, b: -1}, {a: 2, b: -2}], (it: {a: number, b: number}) => it.b == -1))
 * // => { a: 1, b: -1 }
 * ```
 * @param arrayOfT - array of items to be searched for
 * @param predicateFn - function that returns true when desired item is found
 * @returns returns entire item that first matches in the array
 */
export function find<T>(
  arrayOfT: T[],
  predicateFn: (el: T) => boolean,
): T | undefined {
  for (const el of arrayOfT) {
    if (predicateFn(el)) {
      return el;
    }
  }

  return undefined;
}
