import { useFormContext } from 'react-hook-form';
import { StyledInput, TextArea, Label, TopContainer } from './Input.style';
import { AnimatePresence } from 'framer-motion';
import { InputError } from '../InputError';
import { inputErrorsHandler } from '../../utils';

type InputProps = {
  id: string;
  label: string;
  labelPlaceholder: string;
  placeholder?: string;
  type?: string;
  required?: { value: boolean; message: string };
  pattern?: { value: RegExp; message: string };
  multiline?: boolean;
};
const Input = ({
  id,
  label,
  labelPlaceholder,
  placeholder,
  type,
  required,
  pattern,
  multiline,
}: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const { inputErrors, isInvalid } = inputErrorsHandler({ errors, label });

  return (
    <>
      <TopContainer>
        <Label>{labelPlaceholder}:</Label>
        <AnimatePresence mode="wait" initial={false}>
          {isInvalid && (
            <InputError
              message={String(inputErrors?.error?.message)}
              key={String(inputErrors?.error?.message)}
            />
          )}
        </AnimatePresence>
      </TopContainer>
      {multiline ? (
        <TextArea id={id} {...register(label, { required })} />
      ) : (
        <StyledInput
          id={id}
          type={type}
          placeholder={placeholder}
          {...register(label, { required, pattern })}
        />
      )}
    </>
  );
};

export { Input };
