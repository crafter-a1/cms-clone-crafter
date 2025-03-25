
# Strapi PrimeReact Integration

This plugin integrates PrimeReact UI components with Strapi admin panel, providing enhanced UI components for custom fields.

## Features

- PrimeReact TextField component 
- PrimeReact MultiSelectField component
- PrimeReact TagInputField component
- PrimeReact Calendar component
- PrimeReact RichTextEditor component

## Installation

```bash
# Using npm
npm install strapi-plugin-primereact

# Using yarn
yarn add strapi-plugin-primereact
```

## Configuration

Add the plugin to your `config/plugins.js` file:

```js
module.exports = {
  // ...
  'primereact': {
    enabled: true,
    resolve: './src/plugins/primereact'
  },
  // ...
}
```

## Usage

This plugin provides custom field components that can be used in your Strapi admin panel.

Example usage:

```jsx
import { TextField } from 'strapi-plugin-primereact';

const MyComponent = () => {
  return (
    <TextField
      name="title"
      label="Title"
      required
    />
  );
};
```

## Available Components

### TextField
Enhanced text input with PrimeReact styling.

### MultiSelectField
Multi-select component with chips, filtering, and dropdown support.

### TagInputField
Tag input field for managing arrays of string values.

### CalendarField
Date and time picker with various display modes.

### RichTextEditor
WYSIWYG editor for rich text content.

## License

MIT
