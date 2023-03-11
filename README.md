# hiorder — higher-order function library

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
