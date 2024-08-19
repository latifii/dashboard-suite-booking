import { AsTag, HeadingProps } from "./types/Heading.types";

const headingClasses: Record<AsTag, string> = {
  h1: "text-3xl font-semibold",
  h2: "text-2xl font-semibold",
  h3: "text-xl font-medium",
  h4: "text-lg font-semibold text-center",
};

const Heading: React.FC<HeadingProps> = ({
  as = "h1",
  children,
  className,
}) => {
  const Tag = as;

  return (
    <Tag className={`leading-tight ${className} ${headingClasses[as]} `}>
      {children}
    </Tag>
  );
};

export default Heading;
