# hiorder — higher-order function library

## steps to make this package
__Prerequisites__  
[You need an npm automation token for the library](https://docs.npmjs.com/creating-and-viewing-access-tokens/)

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

# increment version
yarn patch # !! only use when ready to release
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

## Thanks

[github-actions](https://github.com/marketplace/actions/create-release)
[keep-a-changelog](https://keepachangelog.com/en/1.0.0/)
[extract-release-notes](https://github.com/ffurrer2/extract-release-notes)
[release-process-on-github-actions -- rebecca franks](https://riggaroo.dev/using-github-actions-to-automate-our-release-process/)
[write-and-public-your-first-typescript-library](https://www.youtube.com/watch?v=nh9xw2-zoeU)
[about-semantic-versioning -- npm docs](https://docs.npmjs.com/about-semantic-versioning)
[publishing-nodejs-packages -- github docs](https://docs.github.com/en/actions/publishing-packages/publishing-nodejs-packages)
[environment-variables -- github docs](https://docs.github.com/en/actions/learn-github-actions/environment-variables)