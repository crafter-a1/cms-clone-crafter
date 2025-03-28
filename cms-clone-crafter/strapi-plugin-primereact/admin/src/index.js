
import pluginPkg from '../../package.json';
import TextField from './components/TextField';
import pluginId from './pluginId';

const name = pluginPkg.strapi.name;

export default {
  register(app) {
    // Register the plugin
    app.registerPlugin({
      id: pluginId,
      name,
    });

    // Register custom field
    app.customFields.register({
      name: 'primereact-field',
      pluginId: 'primereact',
      type: 'string',
      intlLabel: {
        id: 'primereact.form.label',
        defaultMessage: 'PrimeReact Field',
      },
      intlDescription: {
        id: 'primereact.form.description',
        defaultMessage: 'A field using PrimeReact components',
      },
      components: {
        Input: TextField,
      },
    });

    // Register dropdown field
    app.customFields.register({
      name: 'primereact-dropdown',
      pluginId: 'primereact',
      type: 'select',
      intlLabel: {
        id: 'primereact.dropdown.label',
        defaultMessage: 'PrimeReact Dropdown',
      },
      intlDescription: {
        id: 'primereact.dropdown.description',
        defaultMessage: 'A dropdown field using PrimeReact components',
      },
      components: {
        Input: TextField,
      },
      options: {
        base: [
          {
            name: 'options',
            type: 'array',
            items: {
              type: 'string',
            },
            required: true,
          },
        ],
      },
    });
  },
};
