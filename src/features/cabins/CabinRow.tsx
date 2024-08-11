import { Cabin } from "../../types/cabin.interface";

type BodyData = Pick<
  Cabin,
  "name" | "maxCapacity" | "regularPrice" | "discount" | "image"
>;

const CabinRow: React.FC<BodyData> = ({
  name,
  maxCapacity,
  regularPrice,
  discount,
  image,
}) => {
  return (
    <>
      <td className="border px-4 py-2">
        <img src={image} alt={name} className="h-10 w-10" />
      </td>
      <td className="border px-4 py-2">{name}</td>
      <td className="border px-4 py-2">{maxCapacity}</td>
      <td className="border px-4 py-2">{regularPrice}</td>
      <td className="border px-4 py-2">{discount}</td>
      <td className="border px-4 py-2">حذف</td>
    </>
  );
};

export default CabinRow;
