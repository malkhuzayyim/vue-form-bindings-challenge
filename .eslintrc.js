module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "linebreak-style": ["off"],
    "no-console": "off",
    "require-await": "warn",
    "no-unused-vars": "warn",
    eqeqeq: "off",
    "vue/no-v-html": "off",
    "vue/valid-v-slot": "off",
    "vue/comment-directive": "off",
    "import/no-named-as-default": "off",
    "vue/require-component-is": "off"
  },
};
