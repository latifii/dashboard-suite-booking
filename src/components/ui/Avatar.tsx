import defaultImg from "../../assets/images/default-user.jpg";
type AvatarProps = { img?: string };

const Avatar: React.FC<AvatarProps> = ({ img }) => {
  return (
    <div className="h-9 w-9 overflow-hidden rounded-full">
      <img
        src={img ? img : defaultImg}
        alt="avatat"
        className="h-full w-full"
      />
    </div>
  );
};

export default Avatar;
