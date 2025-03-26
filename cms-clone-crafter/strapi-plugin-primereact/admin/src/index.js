import pluginPkg from '../../package.json';
import TextField from './components/TextField';
// Import any other components you have

const name = pluginPkg.strapi.name;

export default {
  register(app) {
    // Register the plugin
    app.registerPlugin({
      id: name,
      name,
    });

    // Register custom fields
    app.customFields.register({
      name: 'primereact-text',
      pluginId: 'primereact',
      type: 'string',
      intlLabel: {
        id: 'primereact.form.input.text',
        defaultMessage: 'PrimeReact Text',
      },
      intlDescription: {
        id: 'primereact.form.input.text.description',
        defaultMessage: 'Enhanced text input with PrimeReact',
      },
      components: {
        Input: TextField,
      },
    });

    // Register other custom fields here...
  },

  bootstrap(app) {
    // Execute bootstrap code
  },
};
