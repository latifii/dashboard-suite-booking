import { ComponentBase } from "../../types/component-base.type";
import defaultImg from "../../assets/images/avatar-default.webp";
import Button from "./Button";
type AvatarProps = Pick<ComponentBase, "className"> & { img?: string };

const Avatar: React.FC<AvatarProps> = ({ className, img }) => {
  return (
    <Button
      size="small"
      shape="square"
      variant="ghost"
      className="overflow-hidden"
    >
      <img
        src={img ? img : defaultImg}
        alt="avatat"
        className="h-full w-full"
      />
    </Button>
  );
};

export default Avatar;
