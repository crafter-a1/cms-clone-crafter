
# Strapi PrimeReact Plugin

This plugin adds PrimeReact UI components as custom fields to your Strapi admin panel, allowing for enhanced form inputs and user experience.

## Installation

```
npm install strapi-plugin-primereact
```

## Configuration

In your `config/plugins.js` file:

```js
module.exports = {
  'primereact': {
    enabled: true,
  },
};
```

## Available Components

### Basic Components
- **Text Input**: Enhanced text input field
- **Dropdown**: Selection dropdown
- **Checkbox**: Boolean checkbox
- **Date Picker**: Date selection component
- **File Upload**: Media upload component
- **Password**: Secure password input
- **Calendar**: Calendar date picker
- **Input Number**: Numeric input field
- **Multi Select**: Multiple selection dropdown
- **Slider**: Slider for numeric values
- **Editor**: Rich text editor

### Enhanced Components
- **Input Regex**: Text input with regex validation
- **Input Mask**: Masked input for formatted data (phone, credit card, etc.)
- **Input With Affixes**: Input with prefix/suffix
- **OTP Input**: One-time password input with configurable options
- **Conditional Field**: Component that conditionally renders based on specified conditions

### Hooks
- **useAutoSave**: Hook for automatically saving form data after changes

## Usage Examples

### Regex Validation Input

```jsx
<InputRegex
  name="email"
  value={email}
  onChange={handleChange}
  label="Email Address"
  pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
  patternErrorMessage="Please enter a valid email address"
  required
/>
```

### Input Mask

```jsx
<InputMask
  name="phone"
  value={phone}
  onChange={handleChange}
  label="Phone Number"
  mask="(999) 999-9999"
  required
/>
```

### Input With Affixes

```jsx
<InputWithAffixes
  name="price"
  value={price}
  onChange={handleChange}
  label="Price"
  prefix="$"
  type="number"
  numberOptions={{ mode: 'currency', currency: 'USD' }}
/>
```

### OTP Input

```jsx
<OTPInput
  name="verification"
  value={verificationCode}
  onChange={handleChange}
  label="Verification Code"
  length={6}
  masked={false}
  expiresIn={300} // 5 minutes
  onExpire={() => console.log('OTP expired')}
  resendAction={() => requestNewCode()}
/>
```

### Conditional Field

```jsx
<ConditionalField condition={showAdvancedOptions}>
  <InputWithAffixes
    name="taxRate"
    value={taxRate}
    onChange={handleChange}
    label="Tax Rate"
    suffix="%"
    type="number"
  />
</ConditionalField>
```

### Auto Save Hook

```jsx
const { status, lastSaved } = useAutoSave(formData, saveFunction, { 
  delay: 2000,
  saveOnUnmount: true
});

return (
  <div>
    <form>
      {/* form fields */}
    </form>
    {status === 'saved' && 
      <small>Last saved at {lastSaved.toLocaleTimeString()}</small>
    }
  </div>
);
```

## Required Dependencies

This plugin requires the following dependencies:
- primereact
- primeicons
- react
- react-dom

## Critical Files Needed

Important: This project requires the following files to run properly:
- index.html
- vite.config.js
- package-lock.json

Please make sure these files are present in your project.
