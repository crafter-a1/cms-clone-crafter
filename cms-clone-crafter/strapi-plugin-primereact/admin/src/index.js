
import pluginPkg from '../../package.json';
import DropdownIcon from './components/DropdownIcon';
import TextFieldInput from './components/TextField';

const name = pluginPkg.strapi.name;

export default {
  register(app) {
    app.customFields.register({
      name: 'primereact-dropdown',
      pluginId: 'strapi-plugin-primereact',
      type: 'string',
      intlLabel: {
        id: 'primereact.dropdown.label',
        defaultMessage: 'PrimeReact Dropdown',
      },
      intlDescription: {
        id: 'primereact.dropdown.description',
        defaultMessage: 'Select a value from PrimeReact dropdown',
      },
      components: {
        Input: DropdownIcon,
      },
      options: {
        base: [
          {
            sectionTitle: {
              id: 'global.settings',
              defaultMessage: 'Settings',
            },
            items: [
              {
                name: 'options',
                type: 'textarea',
                intlLabel: {
                  id: 'primereact.options.label',
                  defaultMessage: 'Options (JSON array)',
                },
                description: {
                  id: 'primereact.options.description',
                  defaultMessage: 'Enter options as JSON array: [{"label": "Label1", "value": "value1"}, ...]',
                },
              },
            ],
          },
        ],
      },
    });

    app.customFields.register({
      name: 'primereact-input',
      pluginId: 'strapi-plugin-primereact',
      type: 'string',
      intlLabel: {
        id: 'primereact.textinput.label',
        defaultMessage: 'PrimeReact Text Input',
      },
      intlDescription: {
        id: 'primereact.textinput.description',
        defaultMessage: 'Enter text using PrimeReact input',
      },
      components: {
        Input: TextFieldInput,
      },
    });
  },
};
