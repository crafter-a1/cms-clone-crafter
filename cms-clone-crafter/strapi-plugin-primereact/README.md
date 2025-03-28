
# Strapi Plugin PrimeReact

A Strapi plugin that integrates PrimeReact UI components into the Strapi admin panel.

## Installation

```bash
# Using npm
npm install strapi-plugin-primereact --save

# Using yarn
yarn add strapi-plugin-primereact
```

### Enable the plugin

Edit your `config/plugins.js` file:

```js
module.exports = {
  // ...
  'primereact': {
    enabled: true,
    resolve: './node_modules/strapi-plugin-primereact'
  },
  // ...
}
```

## Requirements

- Strapi v4.x
- Node.js v14 or higher

## Usage

After installation, PrimeReact components will be available in your Strapi admin panel for use in custom fields.

## Components

Currently available components:

- TextField - Enhanced text input using PrimeReact's InputText

## License

MIT
