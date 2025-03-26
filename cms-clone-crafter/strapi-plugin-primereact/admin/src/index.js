
import { prefixPluginTranslations } from '@strapi/helper-plugin';
import pluginPkg from '../../package.json';
import pluginId from './pluginId';
import Initializer from './components/Initializer';
import PluginIcon from './components/PluginIcon';

// Import your custom field components
import InputDropdown from './components/InputDropdown';
import InputToggle from './components/InputToggle';
import InputSlider from './components/InputSlider';
import InputCheckbox from './components/InputCheckbox';
import InputJson from './components/InputJson';
import InputEditor from './components/InputEditor';

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

    // Register custom fields
    app.customFields.register({
      name: 'dropdown',
      pluginId: 'primereact',
      type: 'string',
      intlLabel: {
        id: 'primereact.dropdown.label',
        defaultMessage: 'PrimeReact Dropdown',
      },
      intlDescription: {
        id: 'primereact.dropdown.description',
        defaultMessage: 'Select a value from a list',
      },
      icon: PluginIcon,
      components: {
        Input: InputDropdown,
      },
    });

    app.customFields.register({
      name: 'toggle',
      pluginId: 'primereact',
      type: 'boolean',
      intlLabel: {
        id: 'primereact.toggle.label',
        defaultMessage: 'PrimeReact Toggle',
      },
      intlDescription: {
        id: 'primereact.toggle.description',
        defaultMessage: 'On/Off toggle switch',
      },
      icon: PluginIcon,
      components: {
        Input: InputToggle,
      },
    });

    app.customFields.register({
      name: 'slider',
      pluginId: 'primereact',
      type: 'integer',
      intlLabel: {
        id: 'primereact.slider.label',
        defaultMessage: 'PrimeReact Slider',
      },
      intlDescription: {
        id: 'primereact.slider.description',
        defaultMessage: 'Drag to select a value',
      },
      icon: PluginIcon,
      components: {
        Input: InputSlider,
      },
    });

    app.customFields.register({
      name: 'checkbox',
      pluginId: 'primereact',
      type: 'boolean',
      intlLabel: {
        id: 'primereact.checkbox.label',
        defaultMessage: 'PrimeReact Checkbox',
      },
      intlDescription: {
        id: 'primereact.checkbox.description',
        defaultMessage: 'Checkbox selection',
      },
      icon: PluginIcon,
      components: {
        Input: InputCheckbox,
      },
    });

    app.customFields.register({
      name: 'json',
      pluginId: 'primereact',
      type: 'json',
      intlLabel: {
        id: 'primereact.json.label',
        defaultMessage: 'PrimeReact JSON Editor',
      },
      intlDescription: {
        id: 'primereact.json.description',
        defaultMessage: 'Edit JSON data',
      },
      icon: PluginIcon,
      components: {
        Input: InputJson,
      },
    });

    app.customFields.register({
      name: 'editor',
      pluginId: 'primereact',
      type: 'richtext',
      intlLabel: {
        id: 'primereact.editor.label',
        defaultMessage: 'PrimeReact Rich Text Editor',
      },
      intlDescription: {
        id: 'primereact.editor.description',
        defaultMessage: 'Feature-rich text editor',
      },
      icon: PluginIcon,
      components: {
        Input: InputEditor,
      },
    });

    app.registerPlugin({
      id: pluginId,
      initializer: Initializer,
      isReady: false,
      name,
    });
  },

  bootstrap(app) {},

  async registerTrads({ locales }) {
    const importedTrads = await Promise.all(
      locales.map((locale) => {
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
