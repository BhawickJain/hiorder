/**
 * Return an array of results that are collected after repeated calls to a given function. 
 * 
 * @example
 * ```ts
 * collect(10, () => Date.now())
 * // => array of 10 readings of the number of milliseconds passed since the Midnight January 1, 1970 UTC
 * ```
 * 
 * @param repeat - number of the callback function is called
 * @param callbackFn  - the callback function be called
 * @returns an array of returned results from the callback function.
 */
export function collect<T>(repeat: number, callbackFn: () => T): Array<T> {
  const arrOfT: T[] = [];
  for (let i = 0; i < repeat; i++) {
    arrOfT.push(callbackFn());
  }

  return arrOfT;
}
