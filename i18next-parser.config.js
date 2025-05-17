module.exports = {
    locales: ['en-US', 'ru-RU', 'uk-UA'],
    output: './i18n/locales/$LOCALE/$NAMESPACE.json',
    input: ['components/**/*.{js,ts,jsx,tsx}', 'app/**/*.{js,ts,jsx,tsx}', 'i18n.dynamic.js'],
    defaultNamespace:'translation',
    defaultValue: (lng, ns, key) => '__STRING_NOT_TRANSLATED__',
    useKeysAsDefaultValue: false,
    indentation: 2,
    createOldCatalogs: false,
    keepRemoved: false,
    keySeparator: ".",
    namespaceSeparator: true,
    lexers: {
      js: ['JavascriptLexer'],
      ts: ['JavascriptLexer'],
      jsx: ['JsxLexer'],
      tsx: ['JsxLexer']
    },
    sort: true,
    verbose: true
  };
  