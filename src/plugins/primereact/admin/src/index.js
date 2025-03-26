
import { prefixPluginTranslations } from '@strapi/helper-plugin';
import pluginPkg from '../../package.json';
import pluginId from './pluginId';
import Initializer from './components/Initializer';
import PluginIcon from './components/PluginIcon';

// Import your custom field components
import TextInput from './components/TextInput';
import MultiSelect from './components/MultiSelect';
import Button from './components/Button';

const name = pluginPkg.strapi.name;

export default {
  register(app) {
    app.addMenuLink({
      to: `/plugins/${pluginId}`,
      icon: PluginIcon,
      intlLabel: {
        id: `${pluginId}.plugin.name`,
        defaultMessage: name,
      },
      Component: async () => {
        const component = await import('./pages/App');
        return component;
      },
      permissions: [
        // Uncomment to set the permissions of the plugin here
        // {
        //   action: '', // the action name should be plugin::plugin-name.actionType
        //   subject: null,
        // },
      ],
    });

    // Register the custom fields
    app.customFields.register({
      name: 'primereact-text',
      pluginId: 'primereact',
      type: 'string',
      intlLabel: {
        id: 'primereact.textinput.label',
        defaultMessage: 'PrimeReact Text',
      },
      intlDescription: {
        id: 'primereact.textinput.description',
        defaultMessage: 'Enhanced text input with PrimeReact',
      },
      icon: PluginIcon,
      components: {
        Input: TextInput,
      },
    });

    app.customFields.register({
      name: 'primereact-multiselect',
      pluginId: 'primereact',
      type: 'json',
      intlLabel: {
        id: 'primereact.multiselect.label',
        defaultMessage: 'PrimeReact MultiSelect',
      },
      intlDescription: {
        id: 'primereact.multiselect.description',
        defaultMessage: 'Enhanced multiselect with PrimeReact',
      },
      icon: PluginIcon,
      components: {
        Input: MultiSelect,
      },
    });

    app.customFields.register({
      name: 'primereact-button',
      pluginId: 'primereact',
      type: 'string',
      intlLabel: {
        id: 'primereact.button.label',
        defaultMessage: 'PrimeReact Button',
      },
      intlDescription: {
        id: 'primereact.button.description',
        defaultMessage: 'Enhanced button with PrimeReact',
      },
      icon: PluginIcon,
      components: {
        Input: Button,
      },
    });

    const plugin = {
      id: pluginId,
      initializer: Initializer,
      isReady: false,
      name,
    };

    app.registerPlugin(plugin);
  },

  bootstrap(app) {
    // Add PrimeReact styles if you're using them
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/primereact/resources/themes/lara-light-indigo/theme.css';
    document.head.appendChild(link);

    const primeStyles = document.createElement('link');
    primeStyles.rel = 'stylesheet';
    primeStyles.href = 'https://unpkg.com/primereact/resources/primereact.min.css';
    document.head.appendChild(primeStyles);

    const primeIcons = document.createElement('link');
    primeIcons.rel = 'stylesheet';
    primeIcons.href = 'https://unpkg.com/primeicons/primeicons.css';
    document.head.appendChild(primeIcons);
  },

  async registerTrads({ locales }) {
    const importedTrads = await Promise.all(
      locales.map(locale => {
        return import(`./translations/${locale}.json`)
          .then(({ default: data }) => {
            return {
              data: prefixPluginTranslations(data, pluginId),
              locale,
            };
          })
          .catch(() => {
            return {
              data: {},
              locale,
            };
          });
      })
    );

    return Promise.resolve(importedTrads);
  },
};
