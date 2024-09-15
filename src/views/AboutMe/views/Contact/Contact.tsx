import { CONTACT_ID } from './constants';
import { FormContainer, Header, Wrapper } from './Contact.style';
import { Form } from './Form';

const Contact = () => {
  return (
    <Wrapper id={CONTACT_ID}>
      <FormContainer>
        <Header>¡Hablemos!</Header>
        <Form />
      </FormContainer>
    </Wrapper>
  );
};

export { Contact };
