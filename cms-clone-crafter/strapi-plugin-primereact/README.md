
# Strapi PrimeReact Plugin

This plugin integrates PrimeReact components with Strapi's custom fields system.

## Installation

```bash
npm install strapi-plugin-primereact
```

Or using yarn:

```bash
yarn add strapi-plugin-primereact
```

## Configuration

Add the plugin to your `config/plugins.js` file:

```js
module.exports = {
  // ...
  'strapi-plugin-primereact': {
    enabled: true,
  },
  // ...
};
```

## Available Custom Fields

### PrimeReact Dropdown

A dropdown selection field built with PrimeReact's Dropdown component.

### PrimeReact Text Input

A text input field built with PrimeReact's InputText component.

## Usage

After installing and configuring the plugin, the custom fields will be available in the Content-Type Builder when adding new fields to your content types.

## Dependencies

This plugin requires:
- PrimeReact
- Strapi v4.x

## License

MIT
