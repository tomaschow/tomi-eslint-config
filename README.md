# Original README
## eslint-config-react

A custom eslint + prettier config for all React projects.

### Installation

```bash
npm install tomi-eslint-config --save-dev
```

### Usage

Create (or update) your .eslintrc\* file. Change the `extends` configuration to include the below. For more configuration options, see the [ESLint Docs](https://eslint.org/docs/user-guide/configuring)

#### For javascript code

```bash
"extends": "tomi-eslint-config",
```

OR

```bash
"extends": [
  "tomi-eslint-config",
  ...
],
```

#### For typescript code

```bash
"extends": "tomi-eslint-config/typescript",
```

OR

```bash
"extends": [
  "tomi-eslint-config/typescript",
  ...
],
```
