/**
 * Given a callback function, repeated call the function for a specified number. Returned result from the function is not captured and returned.
 * @example
 * ```ts
 * repeat(3, () => console.log('hello world'))
 * // => hello world
 * // => hello world
 * // => hello world
 * ```
 * @param repeat - the number of times callbackFn is called
 * @param callbackFn - the callback function to be run repeatedly
 */
export function repeat<T>(repeat: number, callbackFn: () => T): void {
  for (let i = 0; i < repeat; i++) {
    callbackFn();
  }
}

export default repeat;
