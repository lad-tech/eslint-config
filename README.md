## What is this package for?:

To unify the design of ESLint and use it in all related projects

## Installation:

```bahs
yarn add -D eslint prettier jest @npm/eslint-config
```

## Usage
- Create 2 files `.eslintignore` and `.eslintrc.js`

- All files that do not need to be formatted are added to `.eslintignore`

It usually consists of the following files/directories:
```
.idea
ios
android
node_modules
assets
*.md
*.config.js
```

- Add to `eslintrc.js`:

```js
module.exports = {
  extends: [
    '@npm/eslint-config',
  ],
};
```

