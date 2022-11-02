# hiorder — higher-order function library

## steps to make this package

```
npm init -y
npm install typescript
npx tsc --init

# link local package to a test project

cd lib/
yarn link

# add linked package to test project
cd test/
yarn link @bhawick/hiorder

# to increment version
yarn version --major
yarn version --minor
yarn version --patch
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
