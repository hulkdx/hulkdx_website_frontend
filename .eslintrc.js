module.exports = {
  "extends": [ 
    "airbnb",
    "prettier",
    "prettier/react"
  ],
  "plugins": ["prettier"],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2016,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "node": true,
    "es6": true,
    "browser": true
  }
}
