module.exports = {
	env: {
		node: true,
		es2021: true,
	},
	extends: ['airbnb-base', 'prettier'],
	plugins: ['import', 'prettier'],
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	rules: {
		'prettier/prettier': ['error', { endOfLine: 'auto' }],
		'arrow-body-style': 'off',
		'no-console': ['error', { allow: ['warn', 'error', 'log'] }],
		'prefer-const': ['error'],
		'no-var': ['error'],
		'no-new-object': ['error'],
		'object-shorthand': ['error'],
		'quote-props': ['error', 'as-needed'],
		'prefer-object-spread': ['error'],
		'array-callback-return': ['error'],
		'prefer-destructuring': [
			'error',
			{
				array: true,
				object: true,
			},
			{
				enforceForRenamedProperties: false,
			},
		],
		quotes: [2, 'single', { allowTemplateLiterals: true }],
		'prefer-template': ['error'],
		'no-useless-escape': ['error'],
		'prefer-rest-params': ['error'],
		'no-new-func': ['error'],
		'no-param-reassign': ['error'],
		'prefer-spread': ['error'],
		'function-paren-newline': ['error'],
		'prefer-arrow-callback': ['error'],
		'implicit-arrow-linebreak': ['error'],
		'no-useless-constructor': ['error'],
		semi: ['error', 'never'],
		'eol-last': 0,
		'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
	},
	settings: {
		'import/resolver': {
			'babel-module': {},
		},
	},
}
