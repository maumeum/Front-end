module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'react'],
	rules: {
		indent: [
			'error',
			'tab',
			{ SwitchCase: 1, ignoredNodes: ['TemplateLiteral *'] },
		],
		semi: ['error', 'always'],
		quotes: ['error', 'single'],
		'jsx-quotes': ['error', 'prefer-single'],
		'comma-dangle': ['error', 'always-multiline'],
		'object-curly-spacing': ['error', 'always'],
		'arrow-parens': ['error', 'always'],
	},
};
/*

    
    
*/
