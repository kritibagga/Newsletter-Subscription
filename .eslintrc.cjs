module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
	],
	ignorePatterns: ["dist", ".eslintrc.cjs"],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: 12,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ["react-refresh", "@typescript-eslint", "react", "react-hooks"],
	rules: {
		"react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true },
		],

		'@typescript-eslint/no-unused-vars': ["error", { argsIgnorePattern: "^_" }],
		'react/jsx-uses-react':'off',
		'react/react-in-jsx-scope':'off',
    'no-unused-vars': 'warn',
	},
	settings: {
		react: {
			version: "detect",
		},
	},
};
