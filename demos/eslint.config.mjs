import globals from "globals";
import pluginJs from "@eslint/js";
import jest from 'eslint-plugin-jest';


export default [
  {
    files: ["**/*.js"], 
    languageOptions: {
      sourceType: "commonjs"
    }
  },
  {
    languageOptions: { 
      globals: globals.node 
    }
  },
  pluginJs.configs.recommended,
  {
    rules: {
        "no-unused-vars": "error",
        "no-undef": "error",
        "prefer-const": "error",
        semi: "error"
    }
  },
  {
    linterOptions: {
        reportUnusedDisableDirectives: "error"
    }
},
  jest.configs['flat/recommended'],
];