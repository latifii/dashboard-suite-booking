import { ComponentBase } from "../../types/component-base.type";

type AvatarProps = Pick<ComponentBase, "className">;

const Avatar: React.FC<AvatarProps> = ({ className }) => {
  return (
    <div className={`h-8 w-8 bg-gray-400 rounded-full ${className}`}>AV</div>
  );
};

export default Avatar;
