/**
 * Given a function that takes one arguement and returns a value, take an array and operate the function on each item and return a new array. The function can take an argument of Type A and return Type B, thereby returning an array of type B from an array of Type A, via this map function.
 * 
 * @remarks
 * for further detail on map functions, see respective article on [Wikipedia](https://en.wikipedia.org/wiki/Map_(higher-order_function))
 * 
 * @example
 * A map operation by increment each number in the array by one. (Type A -> Type A)
 * ```ts
 * map([1, 2, 3], (it: number) => it + 1) //=> [2, 3, 4]
 * ```
 * 
 * @example
 * A map operation to take each number and turn it into a string. (Type A -> Type B)
 * ```ts
 * map([1, 2, 3], (it: number) => `${it}`) //=> ["2", "3", "4"]
 * ```
 * @param inputArray - array is to be mapped with a function
 * @param fn - function that will map each item over from type A to type B, where type B can type A or another type
 * @returns - an array of items of either Type A or another type depending on the function used to map.
 */
export function map<TypeA, TypeB>(
  inputArray: TypeA[],
  fn: (el: TypeA) => TypeB,
): TypeB[] {
  const mappedArray: TypeB[] = [];

  inputArray.forEach((el) => {
    mappedArray.push(fn(el));
  });

  return mappedArray;
}
