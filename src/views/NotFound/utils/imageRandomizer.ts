import DogOne from 'assets/images/sad_dog.png';
import DogTwo from 'assets/images/sad_dog1.png';
import DogThree from 'assets/images/sad_dog2.png';

const imageRandomizer = () => {
  const Dogs = [DogOne, DogTwo, DogThree];
  return Dogs[Math.floor(Math.random() * Dogs.length)];
};

export { imageRandomizer };
