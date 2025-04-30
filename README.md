# React, Lit, Vanilla-Extract

This repository's purpose is to showcase an issue with vite-plugin-vanilla-extract in an application context in combination with a "third-party" library using web-components with LitElement throws the `invalid exports` error when the component loads its own styles from an separate file, named `styles.css.ts` which clashes with the `.css.ts` files from vanilla-extract.

## Getting Started

```bash
npm i
npm run dev:app # running the application
npm run dev:lit # running the component library in dev-mode
npm run build   # build the application and the component library
```

## Issue

```text
[vite-plugin-vanilla-extract] Invalid exports.

You can only export plain objects, arrays, strings, numbers and null/undefined.

file: /packages/lit-component/dist/src/styles.css.js
```

## Reproduction

Creating a style file containing the styles for the web-component called `styles.css.ts` within the component library for the web-component in `MyCustomElement.ts` will produce the issue in the application.

## Possible Solution

Adding an additional option for the vanillaExtractPlugin which offers to set the file extension which is used for files which contains "vanilla-extract" content.

```js
vanillaExtractPlugin({
  fileExtension: '.css.ts',
});
```

### Expected

Configuring the fileExtension differently than the "default" `.css.ts` the external library's web-component styles can just be parsed as is and the application can be build without the vanilla-extract-plugin throwing an error.

```js
vanillaExtractPlugin({
  fileExtension: '.styles.ts',
});
```

## Working Application

revert styling the LitElement library component with a separate file, by reverting the commit.

```bash
git revert 67c0cc9
```
