
import pluginId from './pluginId';

// Original components
import TextInput from './components/TextInput';
import Button from './components/Button';
import DatePicker from './components/DatePicker';
import Checkbox from './components/Checkbox';
import Dropdown from './components/Dropdown';
import FileUpload from './components/FileUpload';
import Password from './components/Password';
import Calendar from './components/Calendar';
import InputNumber from './components/InputNumber';
import MultiSelect from './components/MultiSelect';
import Slider from './components/Slider';
import Editor from './components/Editor';

// New enhanced components
import InputRegex from './components/InputRegex';
import InputMask from './components/InputMask';
import InputWithAffixes from './components/InputWithAffixes';
import OTPInput from './components/OTPInput';
import ConditionalField from './components/ConditionalField';

// Hooks
import useAutoSave from './hooks/useAutoSave';

export default {
  register(app) {
    // Register original components as custom fields
    app.customFields.register({
      name: 'text-input',
      pluginId: pluginId,
      type: 'string',
      intlLabel: {
        id: `${pluginId}.text-input.label`,
        defaultMessage: 'Text Input',
      },
      intlDescription: {
        id: `${pluginId}.text-input.description`,
        defaultMessage: 'A customizable text input',
      },
      components: {
        Input: TextInput,
      },
    });

    app.customFields.register({
      name: 'dropdown',
      pluginId: pluginId,
      type: 'string',
      intlLabel: {
        id: `${pluginId}.dropdown.label`,
        defaultMessage: 'Dropdown',
      },
      intlDescription: {
        id: `${pluginId}.dropdown.description`,
        defaultMessage: 'A customizable dropdown selector',
      },
      components: {
        Input: Dropdown,
      },
    });

    app.customFields.register({
      name: 'checkbox',
      pluginId: pluginId,
      type: 'boolean',
      intlLabel: {
        id: `${pluginId}.checkbox.label`,
        defaultMessage: 'Checkbox',
      },
      intlDescription: {
        id: `${pluginId}.checkbox.description`,
        defaultMessage: 'A customizable checkbox',
      },
      components: {
        Input: Checkbox,
      },
    });

    app.customFields.register({
      name: 'date-picker',
      pluginId: pluginId,
      type: 'date',
      intlLabel: {
        id: `${pluginId}.date-picker.label`,
        defaultMessage: 'Date Picker',
      },
      intlDescription: {
        id: `${pluginId}.date-picker.description`,
        defaultMessage: 'A customizable date picker',
      },
      components: {
        Input: DatePicker,
      },
    });

    app.customFields.register({
      name: 'file-upload',
      pluginId: pluginId,
      type: 'media',
      intlLabel: {
        id: `${pluginId}.file-upload.label`,
        defaultMessage: 'File Upload',
      },
      intlDescription: {
        id: `${pluginId}.file-upload.description`,
        defaultMessage: 'A customizable file upload component',
      },
      components: {
        Input: FileUpload,
      },
    });

    app.customFields.register({
      name: 'password',
      pluginId: pluginId,
      type: 'password',
      intlLabel: {
        id: `${pluginId}.password.label`,
        defaultMessage: 'Password Input',
      },
      intlDescription: {
        id: `${pluginId}.password.description`,
        defaultMessage: 'A secure password input',
      },
      components: {
        Input: Password,
      },
    });

    app.customFields.register({
      name: 'calendar',
      pluginId: pluginId,
      type: 'date',
      intlLabel: {
        id: `${pluginId}.calendar.label`,
        defaultMessage: 'Calendar',
      },
      intlDescription: {
        id: `${pluginId}.calendar.description`,
        defaultMessage: 'A calendar date picker',
      },
      components: {
        Input: Calendar,
      },
    });

    app.customFields.register({
      name: 'input-number',
      pluginId: pluginId,
      type: 'integer',
      intlLabel: {
        id: `${pluginId}.input-number.label`,
        defaultMessage: 'Number Input',
      },
      intlDescription: {
        id: `${pluginId}.input-number.description`,
        defaultMessage: 'A numeric input field',
      },
      components: {
        Input: InputNumber,
      },
    });

    app.customFields.register({
      name: 'multi-select',
      pluginId: pluginId,
      type: 'json',
      intlLabel: {
        id: `${pluginId}.multi-select.label`,
        defaultMessage: 'Multi Select',
      },
      intlDescription: {
        id: `${pluginId}.multi-select.description`,
        defaultMessage: 'A multi-selection dropdown',
      },
      components: {
        Input: MultiSelect,
      },
    });

    app.customFields.register({
      name: 'slider',
      pluginId: pluginId,
      type: 'integer',
      intlLabel: {
        id: `${pluginId}.slider.label`,
        defaultMessage: 'Slider',
      },
      intlDescription: {
        id: `${pluginId}.slider.description`,
        defaultMessage: 'A slider input for numeric values',
      },
      components: {
        Input: Slider,
      },
    });

    app.customFields.register({
      name: 'editor',
      pluginId: pluginId,
      type: 'richtext',
      intlLabel: {
        id: `${pluginId}.editor.label`,
        defaultMessage: 'Rich Text Editor',
      },
      intlDescription: {
        id: `${pluginId}.editor.description`,
        defaultMessage: 'A rich text editor component',
      },
      components: {
        Input: Editor,
      },
    });

    // Register new enhanced components
    app.customFields.register({
      name: 'input-regex',
      pluginId: pluginId,
      type: 'string',
      intlLabel: {
        id: `${pluginId}.input-regex.label`,
        defaultMessage: 'Regex Validated Input',
      },
      intlDescription: {
        id: `${pluginId}.input-regex.description`,
        defaultMessage: 'A text input with regex validation',
      },
      components: {
        Input: InputRegex,
      },
    });

    app.customFields.register({
      name: 'input-mask',
      pluginId: pluginId,
      type: 'string',
      intlLabel: {
        id: `${pluginId}.input-mask.label`,
        defaultMessage: 'Masked Input',
      },
      intlDescription: {
        id: `${pluginId}.input-mask.description`,
        defaultMessage: 'An input with formatting mask',
      },
      components: {
        Input: InputMask,
      },
    });

    app.customFields.register({
      name: 'input-with-affixes',
      pluginId: pluginId,
      type: 'string',
      intlLabel: {
        id: `${pluginId}.input-with-affixes.label`,
        defaultMessage: 'Input with Prefix/Suffix',
      },
      intlDescription: {
        id: `${pluginId}.input-with-affixes.description`,
        defaultMessage: 'An input with prefix and/or suffix',
      },
      components: {
        Input: InputWithAffixes,
      },
    });

    app.customFields.register({
      name: 'otp-input',
      pluginId: pluginId,
      type: 'string',
      intlLabel: {
        id: `${pluginId}.otp-input.label`,
        defaultMessage: 'OTP Input',
      },
      intlDescription: {
        id: `${pluginId}.otp-input.description`,
        defaultMessage: 'A one-time password input field',
      },
      components: {
        Input: OTPInput,
      },
    });
  },
};
