# hiorder — higher-order function library

## steps to make this package

__project init__
```
npm init -y
npm install typescript
npx tsc --init
```

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

__increment version___
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
 x prettier
 x linter
 x jest
 x github ci
 x github package publishing
 x workflow to have a side-by-side test project
```
