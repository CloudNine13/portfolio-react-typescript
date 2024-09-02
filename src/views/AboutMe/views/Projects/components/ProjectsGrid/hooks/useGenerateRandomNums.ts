import { useMemo } from 'react';

const useGenerateRandomNums = (titlesLength: number) => {
  return useMemo(() => {
    let numbers = [];
    while (numbers.length < titlesLength) {
      let random = Math.floor(Math.random() * titlesLength);
      if (numbers.indexOf(random) === -1) numbers.push(random);
    }
    return numbers;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export { useGenerateRandomNums };
