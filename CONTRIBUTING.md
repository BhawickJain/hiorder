# Contributing

## steps to build this package

__install dependencies__
```bash
cd lib/
yarn
```

__build project__
```bash
cd lib/
yarn build
```

## create a test project to use local package build

__project init__
```bash
npm init -y
npm install typescript
npx tsc --init
```

### import published build and run sample
```bash
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
```bash
cd lib/
yarn link
```

__build package with latest changes__
```bash
yarn build
```

__add linked package to test project__
```bash
cd test/
yarn link @bhawick/hiorder
yarn add @bhawick/hiorder
```

__add typescript compiler__
```bash
cd test/
yarn add --dev ts-node
```
```ts
// index.ts
import {reduce} from "@bhawick/hiorder/dist";

console.log(reduce([1, 2, 3], (a: number, b: number) => a+b, 0))
```

__run index.ts__
```bash
npx ts-node index.ts //=> 6
```

## steps for incrementing package versions and publishing

__increment version__
increment version in package.json and add version git tag. Only use when ready to release. This will update the project.json, and add a git tag. Once done, the commit will be associate to that tag, so make sure this the commit you want to release! For more information see [yarn docs](https://classic.yarnpkg.com/lang/en/docs/cli/version/).
```bash
yarn version --major
yarn version --minor
yarn version --patch
```

push git version tag and trigger deployment
```bash
git push --tags
```
