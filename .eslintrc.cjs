module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"ignorePatterns": ['dist', '.eslintrc.cjs'],
	"extends": [
		"standard-with-typescript",
		"plugin:react/recommended"
	],
	"overrides": [
		{
			"env": {
				"node": true
			},
			"files": [
				".eslintrc.{js,cjs}"
			],
			"parserOptions": {
				"sourceType": "script"
			}
		}
	],
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module",
		"project": "./tsconfig.json"
	},
	"plugins": [
		"react"
	],
	"rules": {
		"indent": [2, "error"],
		"react/prop-types": "off",
		"react/react-in-jsx-scope": "off", //para que no moleste el error de react
		'jsx-quotes': [2, 'prefer-single'],
		'no-multiple-empty-lines': ['error', { max: 1 }]
	}
}
