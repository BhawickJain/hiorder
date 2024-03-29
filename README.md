# `@bhawick/hiorder` — higher-order function and array library

[![CI](https://github.com/BhawickJain/hiorder/actions/workflows/ci.yaml/badge.svg)](https://github.com/BhawickJain/hiorder/actions/workflows/ci.yaml)


This is a series of high-order generic functions which allow useful array manipulation and function evaluations. Examples include `partition` which takes an array with a predicate function and returns two arrays of elements, the first containing those evaluated as `true` and the latter as `false`. Another example is the `collect` method which allows you to call a function for a set number of times and 'collect' all returned results into an array. 

This is a fun side-project of mine so if are there any issues, feel free to raise them [here](https://github.com/BhawickJain/hiorder/issues)

## how to use

```bash
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
