import { Button } from 'components';
import { FORM_CONSTANTS } from './constants';
import { FormProvider, useForm } from 'react-hook-form';
import { StyledForm, Wrapper } from './Form.style';
import { Input, SentLetter } from './components';
import { InputDefs } from './utils';
import { useState } from 'react';

const Form = () => {
  const [isSent, setIsSent] = useState<boolean>(false);
  const methods = useForm();
  const { handleSubmit } = methods;
  const { PLACEHOLDERS } = FORM_CONSTANTS;

  const onSubmit = handleSubmit(data => {
    setIsSent(true);
  });

  const closeSentWindow = () => {
    setIsSent(false);
  };

  return (
    <FormProvider {...methods}>
      <Wrapper>
        <StyledForm onSubmit={event => event.preventDefault()} noValidate autoComplete="off">
          <Input {...InputDefs.name} />
          <Input {...InputDefs.email} />
          <Input {...InputDefs.cc} />
          <Input {...InputDefs.message} />
          <Button title={PLACEHOLDERS.SUBMIT} onClick={onSubmit} />
        </StyledForm>
        {isSent && <SentLetter onClick={closeSentWindow} />}
      </Wrapper>
    </FormProvider>
  );
};

export { Form };
