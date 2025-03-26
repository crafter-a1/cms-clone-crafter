
# Strapi PrimeReact Plugin

This plugin provides custom fields for Strapi using PrimeReact UI components.

## Available Custom Fields

- **Dropdown**: Select a value from a list of options
- **Toggle**: On/Off toggle switch
- **Slider**: Drag to select a numeric value
- **Checkbox**: Standard checkbox selection
- **JSON Editor**: Edit JSON data with formatting
- **Rich Text Editor**: Feature-rich text editor

## Usage

1. Install the plugin:
```bash
cd /path/to/your/strapi-project
npm install /path/to/strapi-plugin-primereact
```

2. Enable the plugin in your `config/plugins.js` file:
```js
module.exports = {
  // ...
  primereact: {
    enabled: true,
  },
  // ...
}
```

3. Restart your Strapi server

4. When creating a new Content-Type or editing an existing one, you'll now see the PrimeReact custom fields available in the field type dropdown.

## Configuration

Some fields support additional configuration through the "Advanced Settings" tab when adding or editing a field.
