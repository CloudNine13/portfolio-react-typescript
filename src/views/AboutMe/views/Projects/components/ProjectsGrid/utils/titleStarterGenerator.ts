const starterTitles = ['Descubre', 'Explora', 'Conoce'];

const titleStarterGenerator = (randomNums: Array<number>, id: number) => {
  return starterTitles[randomNums[id]];
};

export { titleStarterGenerator };
