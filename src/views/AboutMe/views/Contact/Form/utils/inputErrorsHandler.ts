import { FieldErrors, FieldValues } from 'react-hook-form';

type HandlerProps = {
  errors: FieldErrors<FieldValues>;
  label: string;
};

const inputErrorsHandler = ({ errors, label }: HandlerProps) => {
  let isInvalid = false;

  const filteredErrors = Object.keys(errors).filter(key => key.includes(label));
  const reducedErrors: FieldErrors<FieldValues> = filteredErrors.reduce((_, curr) => {
    return Object.assign({ error: errors[curr] });
  }, {});

  if (Object.keys(reducedErrors).length > 0) isInvalid = true;

  return { inputErrors: reducedErrors, isInvalid };
};

export { inputErrorsHandler };
