
# Strapi PrimeReact Plugin

This plugin integrates PrimeReact components into Strapi, providing enhanced UI components for your content types.

## Installation

```bash
# Install the plugin in your Strapi project
cd /path/to/your/strapi/project
npm install strapi-plugin-primereact

# Install required dependencies
npm install primereact primeicons react-transition-group --legacy-peer-deps
```

## Usage

After installing the plugin, you can use PrimeReact components in your content types:

1. Go to Content-Type Builder
2. Add a new custom field
3. Choose "PrimeReact Field" or "PrimeReact Dropdown" from the list
4. Configure the field as needed

## Features

- Text input with PrimeReact styling
- Dropdown select with PrimeReact styling
- Integration with Strapi's field system

## Development

```bash
# Clone the repository
git clone https://github.com/your-repo/strapi-plugin-primereact.git

# Install dependencies
cd strapi-plugin-primereact
npm install

# Build the plugin
npm run build
```

## License

MIT
