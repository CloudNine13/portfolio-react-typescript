const starterTitles = ['Descubre', 'Explora', 'Conoce a'];

const titleStarterGenerator = (randomNums: Array<number>, id: number) => {
  return starterTitles[randomNums[id]];
};

export { titleStarterGenerator };
