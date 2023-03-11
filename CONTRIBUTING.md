# Contributing

## steps to build this package

__install dependencies__
```ts
cd lib/
yarn
```

__build project__
```ts
cd lib/
yarn build
```

## create a test project to use local package build

__project init__
```
npm init -y
npm install typescript
npx tsc --init
```

### import published build and run sample

```
cd test/
yarn add @bhawick/hiorder
```

```ts
// index.ts
import {reduce} from "@bhawick/hiorder/dist";

console.log(reduce([1, 2, 3], (a: number, b: number) => a+b, 0))
```

### import and run the local package build

__link local package to a test project__
```
cd lib/
yarn link
```
__add linked package to test project__
```
cd test/
yarn link @bhawick/hiorder
```

__add typescript compiler__
```
cd test/
yarn add --dev ts-node
```
```ts
// index.ts
import {reduce} from "@bhawick/hiorder/dist";

console.log(reduce([1, 2, 3], (a: number, b: number) => a+b, 0))
```

__run index.ts__
```
npx ts-node index.ts //=> 6
```

## steps for incrementing package versions and publishing

__increment version__
increment version in package.json and add version git tag
```
yarn patch # !! only use when ready to release
# to increment version
yarn version --major
yarn version --minor
yarn version --patch
```

push git version tag and trigger deployment
```
git push --tags
```

## TODO
```
 : prettier
 : linter
 : jest
 : github ci
 : github package publishing
 : workflow to have a side-by-side test project
```
