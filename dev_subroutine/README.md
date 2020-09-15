# Ehhh dev server

## General

This is ehhh project serving server based on [express](https://expressjs.com/en/starter/generator.html) template `npx express-generator --css less subroutine` with [nunjucks](https://mozilla.github.io/nunjucks/templating.html) templating engine.

Use `haxe subroutine.hxml` from root folder to run dev environment.

## Paths

| {EHHH_ROOT} relative     | dev server route | JS code |
| :----------------------- | :--------------: | ------: |
| `/`                      |     `/ehhh`      |     `-` |
| `/dev_subroutine/public` |       `/`        |     `-` |

## Server enabled features

- [water.css](https://watercss.kognise.dev/) as default styles
- less styles
- nunjucks views
- md views

## Externals

- [express](https://expressjs.com/en/guide/routing.html), [examples](https://expressjs.com/en/starter/examples.html), [template engines](https://expressjs.com/en/resources/template-engines.html)
- [nunjucks](https://mozilla.github.io/nunjucks/templating.html)
- [less](http://lesscss.org/features/)
- [water.css](https://watercss.kognise.dev/)
