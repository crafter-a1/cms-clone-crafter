
import pluginPkg from '../../package.json';
import TextField from './components/TextField';
import DropdownIcon from './components/DropdownIcon';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const name = pluginPkg.strapi.name;

export default {
  register(app) {
    app.customFields.register({
      name: 'primereact-text',
      pluginId: 'primereact',
      type: 'string',
      intlLabel: {
        id: 'primereact.text.label',
        defaultMessage: 'PrimeReact Text',
      },
      intlDescription: {
        id: 'primereact.text.description',
        defaultMessage: 'Enhanced text input using PrimeReact',
      },
      icon: DropdownIcon,
      components: {
        Input: TextField,
      },
    });
  },

  bootstrap(app) {
    // Add custom bootstrap code here
  },
};
