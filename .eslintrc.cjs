/** @type {import('@types/eslint').Linter.BaseConfig} */
module.exports = {
	extends: [
		'eslint-config-kentcdodds',
		'eslint-config-kentcdodds/jest',
		'eslint-config-kentcdodds/jsx-a11y',
		'eslint-config-kentcdodds/react',
	],
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: './tsconfig.json',
		ecmaVersion: 2022,
	},
	rules: {
		'no-console': 'off',

		// meh...
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/sort-type-union-intersection-members': 'off',
		'jsx-a11y/media-has-caption': 'off',
		'jsx-a11y/label-has-associated-control': 'off',
		'jsx-a11y/alt-text': 'off', // it's not smart enough...
		'@babel/new-cap': 'off',
		'react/jsx-filename-extension': 'off',
		'react/react-in-jsx-scope': 'off',
		'@typescript-eslint/no-namespace': 'off',
		'@typescript-eslint/prefer-nullish-coalescing': 'off',

		// I can't figure these out:
		'@typescript-eslint/no-unsafe-call': 'off',
		'@typescript-eslint/no-unsafe-assignment': 'off',
		'@typescript-eslint/no-unsafe-member-access': 'off',

		// enable these again someday:
		'@typescript-eslint/no-unsafe-argument': 'off',

		// this one isn't smart enough for our "~/" imports
		'import/order': 'off',

		// for CatchBoundaries
		'@typescript-eslint/no-throw-literal': 'off',
		'testing-library/no-await-sync-events': 'off',
		'testing-library/prefer-implicit-assert': 'off',

		// this auto-fixes and it's nice to have types and actual stuff separate
		'@typescript-eslint/consistent-type-imports': 'warn',

		// conflicts with jsx-a11y/prefer-tag-over-role
		'jsx-a11y/accessible-emoji': 'off',

		'jest/no-deprecated-functions': 'off',

		// typescript handles this:
		'react/no-unknown-property': 'off',
	},
}
