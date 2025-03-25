
import pluginPkg from '../../package.json';
import pluginId from './pluginId';
import Initializer from './components/Initializer';
import { TextField } from './components/TextField';
import { MultiSelectField } from './components/MultiSelectField';
import { TagInputField } from './components/TagInputField';
import { CalendarField } from './components/CalendarField';
import { RichTextEditor } from './components/RichTextEditor';

const name = pluginPkg.strapi.name;

export default {
  register(app) {
    app.registerPlugin({
      id: pluginId,
      initializer: Initializer,
      isReady: false,
      name,
    });

    // Register custom fields
    app.customFields.register({
      name: 'primereact-text',
      type: 'string',
      intlLabel: {
        id: `${pluginId}.fields.text.label`,
        defaultMessage: 'PrimeReact Text',
      },
      intlDescription: {
        id: `${pluginId}.fields.text.description`,
        defaultMessage: 'Enhanced text input with PrimeReact',
      },
      icon: 'underline',
      components: {
        Input: TextField,
      },
    });

    app.customFields.register({
      name: 'primereact-multiselect',
      type: 'json',
      intlLabel: {
        id: `${pluginId}.fields.multiselect.label`,
        defaultMessage: 'PrimeReact MultiSelect',
      },
      intlDescription: {
        id: `${pluginId}.fields.multiselect.description`,
        defaultMessage: 'Enhanced MultiSelect with PrimeReact',
      },
      icon: 'layer',
      components: {
        Input: MultiSelectField,
      },
    });

    app.customFields.register({
      name: 'primereact-taginput',
      type: 'json',
      intlLabel: {
        id: `${pluginId}.fields.taginput.label`,
        defaultMessage: 'PrimeReact Tag Input',
      },
      intlDescription: {
        id: `${pluginId}.fields.taginput.description`,
        defaultMessage: 'Tag input field with PrimeReact',
      },
      icon: 'hashtag',
      components: {
        Input: TagInputField,
      },
    });

    app.customFields.register({
      name: 'primereact-calendar',
      type: 'datetime',
      intlLabel: {
        id: `${pluginId}.fields.calendar.label`,
        defaultMessage: 'PrimeReact Calendar',
      },
      intlDescription: {
        id: `${pluginId}.fields.calendar.description`,
        defaultMessage: 'Date/time picker with PrimeReact',
      },
      icon: 'calendar',
      components: {
        Input: CalendarField,
      },
    });

    app.customFields.register({
      name: 'primereact-richtext',
      type: 'richtext',
      intlLabel: {
        id: `${pluginId}.fields.richtext.label`,
        defaultMessage: 'PrimeReact Rich Text',
      },
      intlDescription: {
        id: `${pluginId}.fields.richtext.description`,
        defaultMessage: 'Rich text editor with PrimeReact',
      },
      icon: 'text-formatting',
      components: {
        Input: RichTextEditor,
      },
    });
  },

  bootstrap(app) {
    // Add PrimeReact CSS to the admin panel
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = 'https://unpkg.com/primereact@10.0.0/resources/themes/lara-light-indigo/theme.css';
    document.head.appendChild(linkElement);

    const primeCssElement = document.createElement('link');
    primeCssElement.rel = 'stylesheet';
    primeCssElement.href = 'https://unpkg.com/primereact@10.0.0/resources/primereact.min.css';
    document.head.appendChild(primeCssElement);

    const primeIconsElement = document.createElement('link');
    primeIconsElement.rel = 'stylesheet';
    primeIconsElement.href = 'https://unpkg.com/primeicons@6.0.1/primeicons.css';
    document.head.appendChild(primeIconsElement);
  },
};
