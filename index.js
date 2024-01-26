module.exports = {
  env: {
    browser: true,
    es2024: true,
    node: true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:react-hooks/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "jsxPragma": null // for @typescript/eslint-parser
  },
  "plugins": [
    "react",
    "@typescript-eslint",
    "jest",
    "import"
  ],
  "rules": {
    'react/react-in-jsx-scope': 0,
    'react/jsx-uses-react': 0,
    "linebreak-style": [
      "error",
      "unix"
    ],
    "prettier/prettier": ["error", {"singleQuote": true}],
    "react/prop-types": "off",
    "react/display-name": "off",
    "@typescript-eslint/no-use-before-define": 0,
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "interface",
        "format": [
          "PascalCase"
        ],
        "custom": {
          "regex": "^I[A-Z]",
          "match": true
        }
      }
    ],
    "@typescript-eslint/no-empty-interface": 0,
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
      },
    ],
    "import/no-unresolved": [
      2,
      {
        "commonjs": true,
        "amd": true
      }
    ],
    "import/named": 2,
    "import/namespace": 2,
    "import/default": 2,
    "import/export": 2,
    "import/first": 2,
    "import/no-absolute-path": 2,
    "import/order": [
      "error",
      {
        "newlines-between": "always"
      }
    ],
    "import/prefer-default-export": 1
  },
  "settings": {
    "import/ignore": [
      "node_modules"
    ],
    'import/resolver': {
      typescript: {},
    },
  },
  "ignorePatterns": [
    "node_modules",
    ".babelrc",
    "babel.config.js",
    "metro.config.js",
    "jest.config.js"
  ]
}
