import { Tech } from "./Technology.style";

type TechnologyProps = { tech: string };

const Technology = ({ tech }: TechnologyProps) => {
  return <Tech>{tech}</Tech>;
};

export { Technology };
