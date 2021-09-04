module.exports = {
  fields: {
    email: 'Email',
    password: 'Password',
  },
  placeholders: {
    email: 'email@domain.com',
    password: '******',
  },
  errors: {
    email: {
      required: 'Please enter your email address',
      invalid: 'Please enter a valid email address',
    },
    password: {
      required: 'Please enter your password',
      short: 'Your password must be at least 6 characters long',
      invalid:
        'Your password must be at least 6 characters long and include at least: an uppercase letter, a number and a special character',
    },
  },
  dropdown: {
    placeholder: 'Select',
    multiSelected: '%{count} items selected',
  },
};
