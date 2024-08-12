module.exports = {
  root: true,
  env: {
    browser: true,
    es2024: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:sonarjs/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint'],
  settings: {
    'import/resolver': {
      typescript: {
        "alwaysTryTypes": true
      },
      node: true
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  'rules': {
    'import/order': [
      'error',
      {
        'newlines-between': 'always'
      }
    ],

    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'all',
        argsIgnorePattern: '^_',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],

    // Использование оберток
    '@typescript-eslint/no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'lodash',
            message: 'Import [module] from lodash/[module] instead.',
          },
          {
            name: 'react-redux',
            importNames: ['useSelector', 'useDispatch'],
            message: 'Use typed hooks `useAppDispatch` and `useAppSelector` instead.',
          },
          {
            name: 'dayjs',
            message: 'Use import from "@shared/lib/dayjs" instead',
          },
        ],

        patterns: [
          {
            group: ['antd', '!@refinedev/antd', '@ant-design', 'rc-*', '@lad-tech/mobydick-*', '@lad-tech/keyboard-aware'],
            message: 'Use import from "@shared/ui" instead',
          },
        ],
      },
    ],

    // При использовании `@ts-<directive>` нужно добавлять описание
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
        'ts-nocheck': true,
        'ts-check': false,
        'minimumDescriptionLength': 5,
      },
    ],

    // Отключаем Prop Types
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/no-unused-prop-types': 'off',

    // Отключаем обязательный импорт React
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': ['error', {extensions: ['.ts', '.tsx']}],

    // Предотвращение использования небезопасных `target="_blank"`
    'react/jsx-no-target-blank': 'warn',

    'sonarjs/no-duplicate-string': [
      'error',
      {ignoreStrings: 'lower-case,text/plain,Content-Type,space-between,flex-start,flex-end'},
    ],
  }
};
