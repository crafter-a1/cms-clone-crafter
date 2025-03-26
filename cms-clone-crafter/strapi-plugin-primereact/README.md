
# Strapi PrimeReact Plugin

This plugin integrates PrimeReact components into your Strapi application, starting with a custom dropdown field.

## Installation

```bash
npm install strapi-plugin-primereact
# or
yarn add strapi-plugin-primereact
```

## Configuration

Add the plugin to your `config/plugins.js` file:

```js
module.exports = {
  // ...
  'primereact': {
    enabled: true,
    resolve: './src/plugins/strapi-plugin-primereact'
  },
  // ...
}
```

## Usage

After installing the plugin, you'll have access to the following custom fields:

- **PrimeReact Dropdown**: A dropdown select field using PrimeReact's Dropdown component.

You can use these custom fields when creating new content types or editing existing ones through the Content-Type Builder.

## License

MIT
