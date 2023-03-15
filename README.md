# hiorder — higher-order function library

This is a series of high-order generic function which allows useful array manipulation and function evaluation. Example include `partition` which takes an array with a predicate function and return two arrays of elemets, the first containing those evaluated as `true` and the latter as `false`. An example of function evaluation is the `collect` method which allows you to call a function for a set number of times and 'collect' all returned results into an array. 

This is a fun side-project of mine so if there any issues, feel free to raise them [here](https://github.com/BhawickJain/hiorder/issues)

## how to use

```
yarn add @bhawick/hiorder
```

__minimal example__
```ts
// index.ts
import {reduce} from "@bhawick/hiorder";

console.log(reduce([1, 2, 3], (a: number, b: number) => a+b, 0))
```

## Contributing

see the [CONTRIBUTING.md](CONTRIBUTING.md)
