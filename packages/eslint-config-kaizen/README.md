# @kaizentech/eslint-config

This package contains javascript, react, and react-native style guides

## Installation
```bash
yarn add -D @kaizentech/eslint-config eslint prettier
```

## Usage
first of all create a .eslintrc.json file in the root of your project.

if you want to use react config add this

```json
{
  "root": true,
  "extends": "@kaizentech"
}

```

if you want to use react-native config add this

```json
{
  "root": true,
  "extends": "@kaizentech/eslint-config/react-native"
}

```
