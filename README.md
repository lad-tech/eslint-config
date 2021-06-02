## Для чего этот пакет:

Для унификации конфигурации ESLint и использования его во всех смежных проектах

## Установка:

- Проделываем манипуляции по инструкции из нашего [registry](https://glab.lad24.ru/npm/registry)
  
- Скачиваем конфиг + eslint + prettier 
```bahs
yarn add -D eslint prettier @npm/eslint-config
```

## Использование
- Создаём 2 файла `.eslintignore` и `eslintrc.js`

- В `.eslintignore` добавляются все файлы которые не нужно форматировать

Обычно состоит из таких файлов/директорий:
```
.idea
ios
android
node_modules
assets
*.md
*.config.js
```

- В `eslintrc.js` добавляем:

```js
module.exports = {
  extends: [
    '@npm/eslint-config',
  ],
};
```

