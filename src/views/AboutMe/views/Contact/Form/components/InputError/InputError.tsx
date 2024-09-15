import { motion } from 'framer-motion';
import ErrorImg from 'assets/svg/error.svg';
import { Wrapper, Error, ErrorContainer } from './InputError.style';

type InputErrorProps = {
  message: string;
};

const InputError = ({ message }: InputErrorProps) => {
  const framer_error = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
    transition: { duration: 0.2 },
  };

  return (
    <Wrapper>
      <motion.div {...framer_error}>
        <ErrorContainer>
          <Error src={ErrorImg} />
          {message}
        </ErrorContainer>
      </motion.div>
    </Wrapper>
  );
};

export { InputError };
