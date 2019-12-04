# js-tldr

![logo](logo.png)

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Development scripts

 - `npm install` - installs required dependencies
 - `npm run dev` - runs application in development mode
 - `npm run test` - runs unitary and end-to-end tests
 - `npm run test:u` - runs unitary tests only
 - `npm run test:e2e` - runs end-to-end tests only headlessly in an electron browser
 - `npm run cypress:open` - runs cypress interactive mode, allowing to run end-to-end tests individually with a non-headless electron browser

## Contribution guide

### Vision

We strive to provide **noiseless** experience for developers in order to let them stay focused on what they're doing at the moment

### Goals

When developing the js-tldr we emphasize on the following requirements to every new feature or change:

- consistency
- minimalistic UX
- speed

### Documentation guideline

#### Location

We write docs as markdown files which are public and can be accessed by the doc's URL, suffixed with `.md`.
For example:
https://js-tldr.info/docs/Array/concat - doc page
https://js-tldr.info/docs/Array/concat.md - doc markdown sheet

#### Shape

Every doc meet the strict shape requirement. It should consist of the following parts:

- title
- short exhaustive description
- syntax - mandatory for methods, may be omitted for properties
- usage examples
- reference link

Doc skeleton example:

````md
# Array.prototype.concat()

<description>

## Syntax

```js
<syntax definition>
```

## Usage examples

```js
<usage examples code>
```

---

[reference](link)
````

##### Description

In the description body:

- use **bold + code** markup for the name of the property or method - `` **`methodName`** ``
- _do not_ use parentheses `()` with method name
- use **code** markup for syntax's terms and reflect them in syntax code example. For instance:

![description example](description_example.png)

##### Code

In the syntax and usage examples code body:

- _do not_ use abbreviations for variables names, eg DONT `const str = ...`, DO `const string = ...`
- use the stdout comment `// ->` to show results
- try to avoid using `console.log`, just use stdout comment and the end of method call or property expression
