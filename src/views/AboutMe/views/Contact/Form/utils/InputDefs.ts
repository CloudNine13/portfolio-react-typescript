import { FORM_CONSTANTS } from '../constants';

const InputDefs = {
  name: {
    id: FORM_CONSTANTS.LABEL.FROM_NAME,
    type: FORM_CONSTANTS.TYPE.TEXT,
    labelPlaceholder: FORM_CONSTANTS.PLACEHOLDERS.NAME,
    label: FORM_CONSTANTS.LABEL.FROM_NAME,
    required: {
      value: true,
      message: FORM_CONSTANTS.VALIDATION.MESSAGE,
    },
  },
  email: {
    id: FORM_CONSTANTS.LABEL.FROM_EMAIL,
    type: FORM_CONSTANTS.TYPE.EMAIL,
    labelPlaceholder: FORM_CONSTANTS.PLACEHOLDERS.EMAIL,
    label: FORM_CONSTANTS.LABEL.FROM_EMAIL,
    required: {
      value: true,
      message: FORM_CONSTANTS.VALIDATION.MESSAGE,
    },
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: FORM_CONSTANTS.VALIDATION.EMAIL,
    },
  },
  cc: {
    id: FORM_CONSTANTS.LABEL.CC,
    type: FORM_CONSTANTS.TYPE.TEXT,
    labelPlaceholder: FORM_CONSTANTS.PLACEHOLDERS.CC,
    label: FORM_CONSTANTS.LABEL.CC,
    placeholder: FORM_CONSTANTS.PLACEHOLDERS.OPTIONAL,
  },
  message: {
    id: FORM_CONSTANTS.LABEL.MESSAGE,
    labelPlaceholder: FORM_CONSTANTS.PLACEHOLDERS.MESSAGE,
    label: FORM_CONSTANTS.LABEL.MESSAGE,
    required: {
      value: true,
      message: FORM_CONSTANTS.VALIDATION.MESSAGE,
    },
    multiline: true,
  },
};

export { InputDefs };
