# node-ts-module

Seed create a npm module/library in Node.js, TypeScript

## Getting starting

```bash
git clone git@github.com:kushwahashiv/node-ts-module.git {my-folder}
cd {my-folder}
rm -rf .git
git init
npm install
npm run typings -- -install

npm test -- -w

# Enjoy!
```

## Files to update

- `package.json` (name, author, repository ...)
- `typings.json` (name)
- `Readme.md`

## npm scripts available

- `build`: compiles the app into `lib` folder
- `lint`: runs tslint for `src` and `tests` folders
- `test`: runs mocha test without any compilation needed (uses `ts-node`)
- `tsc`: proxy to the locally installed `typescript` package


## tsconfig Files

- `tsconfig.json`: configuration file for build

## Running test

```bash
# optional pass a reporter or any other mocha options.
npm test -- --reporter list
```

## Resources

- [What's new in TypeScript](https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript)

## License

MIT
