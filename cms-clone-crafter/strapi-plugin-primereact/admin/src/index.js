
import pluginPkg from '../../package.json';
import DropdownIcon from './components/DropdownIcon';
import TextField from './components/TextField';

const name = pluginPkg.strapi.name;

export default {
  register(app) {
    app.customFields.register({
      name: "dropdown",
      pluginId: "primereact",
      type: "string",
      intlLabel: {
        id: "primereact.dropdown.label",
        defaultMessage: "Dropdown (PrimeReact)",
      },
      intlDescription: {
        id: "primereact.dropdown.description",
        defaultMessage: "Select a value from a list",
      },
      icon: DropdownIcon,
      components: {
        Input: TextField,
      },
      options: {
        base: [
          {
            name: "options",
            type: "array",
            items: {
              type: "object",
              keys: [
                {
                  name: "label",
                  type: "string",
                },
                {
                  name: "value",
                  type: "string",
                },
              ],
            },
            required: true,
          },
        ],
        advanced: [],
      },
    });
  },

  bootstrap(app) {},
};
