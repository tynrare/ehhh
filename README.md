# Launch

## Preinstall

- You need [haxe](https://haxe.org/download/) and [npm](https://www.npmjs.com/get-npm) installed

## Run

```
> haxe install.hxml
> haxe serve.hxml
```

- `haxe install.hxml` all project installations.
- `haxe subroutine.hxml` launches default environment

# Draft

## Paths

| this file relative | [Format][1] | JS code |
| :----------------- | :---------: | ------: |
| `./src/`           |   `src/`    | `@src/` |

[1]: (https://git-scm.com/docs/gitignore#_pattern_format)

## Formats

You can `imprort` this from JS code:

- `.js` webpack-parsed JS code with babel processing
- `.hx` haxe code
- `.md` markdown. Will be parsed into HTML

## Get and run

[degit](https://github.com/Rich-Harris/degit) is cool option:

`npm install -g degit`

And than copy and run template:

## npm

- `npm watch`

```
degit tynrare/webpack-template my-new-project
cd my-new-project
npm install
npm run
manual-test-watch
```

### Builds

all builds lays in ./dist folder

`npm run build-prod` builds in production mode with minification, without source maps.
`npm run build-dev` builds with source maps
`npm run manual-test-build` builds manual tests with source maps

### Docs

`npm run docs` builds jsdoc docs. You can find it in ./docs folder

# Glossary

## Paths

In docs paths may be:

- `./path/to` or `./path/to.format` means path to file, relative to mention point
- `./path/to/` means path to folder, relative to mention point
- `/path/to` means path relative to project root
