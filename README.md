# gatsby-plugin-webpack-bundle-analyzer

A Gatsby plugin to help analyze your bundle content with [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer).

## Install

With Yarn:

```bash
yarn add gatsby-plugin-webpack-bundle-analyzer
```

Or with npm:

```bash
npm install --save gatsby-plugin-webpack-bundle-analyzer
```

## Usage

```javascript
// In your gatsby-config.js
plugins: [
	'gatsby-plugin-webpack-bundle-analyzer',
]
```

## Options

See [original plugin](https://github.com/webpack-contrib/webpack-bundle-analyzer#options-for-plugin) for a list of available options.

Additional options:

- `production`: Run the analyzer on a production build. Defaults to `false`
- `disable`: Set to true to toggle off the analyzer. Defaults to `false`

```javascript
plugins: [
	{
		resolve: 'gatsby-plugin-webpack-bundle-analyzer',
		options: {
			analyzerPort: 3000,
			production: true,
		},
	},
]
```

