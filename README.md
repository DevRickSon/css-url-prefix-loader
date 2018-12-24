# css-url-loader [![NPM version][npm-image]][npm-url] [![npm module downloads][npm-downloads-image]][npm-downloads-url] [![Dependency Status][depstat-image]][depstat-url] [![License: MIT][license-image]][license-url]

Webpack loader to transform URLs to other URLs in CSS.

## Description

Transform URLs to other URLs in the `url()`s in your CSS.

## Install

```bash
npm install --save-dev css-url-prefix-loader
```

Or

```bash
yarn add --dev css-url-prefix-loader
```

## Usage

### When you want to trasform `url(/images/...)` to `url(https://dev.com/images/...)` or `url(https://live.com/images/...)`, the `webpack.config.js` is below

```javascript
module.exports = {
  ...
  module: {
    rules: [
      ...
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'css-url-prefix-loader',
              query: {
                from: '/images',
                dev: 'https://dev.com',
                live: 'https://live.com'
              }
            }
          ],
        }),
      },
      ...
    ],
  },
  plugins: [
    ...
    new ExtractTextPlugin('bundle.css'),
    ...
  ],
```