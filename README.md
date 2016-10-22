# node-ts-module

To create a npm module/library using Node.js, TypeScript

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
- `typings`: proxy to the locally installed `typings` package

## tsconfig Files

The seed comes with two tsconfig files to enable greater dev experience in Visual Studio Code by enabling debuggig from source while running `mocha` tests:

- `tsconfig.json`: configuration file for build

## Visula Studio Code features

- vscode build-in build tasks setup (`build` & `build.dist`)
  - `build`: development build, sets `--watch` for continuous incremental compilation.
    This tasks builds `src` and `tests` folder to `dev` which is used by vscode debugging tools.
  - `build.dist` to compile the `src` folder only to `lib` folder.
- vscode debug configured (`launch`)
  - `launch.json` is set to run `mocha` test while debugging

## Running test

```bash
# optional pass a reporter or any other mocha options.
npm test -- --reporter list
```

## Resources

- [What's new in TypeScript](https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript)

## License

MIT
