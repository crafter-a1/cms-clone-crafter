
import pluginPkg from '../../package.json';
import TextField from './components/TextField';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';

const name = pluginPkg.strapi.name;

export default {
  register(app) {
    app.customFields.register({
      name: 'primereact-dropdown',
      pluginId: name,
      type: 'string',
      intlLabel: {
        id: 'primereact-dropdown.dropdown.label',
        defaultMessage: 'PrimeReact Dropdown',
      },
      intlDescription: {
        id: 'primereact-dropdown.dropdown.description',
        defaultMessage: 'Select from dropdown options',
      },
      icon: 'caret-down',
      components: {
        Input: TextField,
      },
      options: {
        base: [
          {
            name: 'options',
            type: 'array',
            defaultValue: [
              { label: 'Option 1', value: 'option1' },
              { label: 'Option 2', value: 'option2' },
            ],
            items: {
              type: 'object',
              keys: [
                {
                  name: 'label',
                  type: 'string',
                  required: true,
                },
                {
                  name: 'value',
                  type: 'string',
                  required: true,
                },
              ],
            },
          },
        ],
        advanced: [
          {
            name: 'required',
            type: 'boolean',
            defaultValue: false,
          },
        ],
      },
    });
  },
  
  bootstrap(app) {
    // Bootstrap phase
  },
};
