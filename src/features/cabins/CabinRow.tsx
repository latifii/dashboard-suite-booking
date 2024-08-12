import { HiPencil, HiTrash } from "react-icons/hi2";
import Button from "../../components/ui/Button";
import { Cabin } from "../../types/cabin.interface";
import Modal from "../../components/ui/Modal";
import ConfirmDelete from "../../components/ui/ConfirmDelete";
import { useDeleteCabin } from "./useDeleteCabin";
import EditCabinFrom from "./EditCabinFrom";

type BodyData = Cabin;

const CabinRow: React.FC<BodyData> = (props) => {
  const { id, name, maxCapacity, regularPrice, discount, image } = props;
  const { deleteCabinApi, isDeleting } = useDeleteCabin();
  return (
    <>
      <td className="border px-4 py-2">
        <img src={image} alt={name} className="h-10 w-10" />
      </td>
      <td className="border px-4 py-2">{name}</td>
      <td className="border px-4 py-2">{maxCapacity}</td>
      <td className="border px-4 py-2">{regularPrice}</td>
      <td className="border px-4 py-2">{discount}</td>
      <td className="border px-4 py-2">
        <Modal>
          <Modal.Open opens="remove-cabin">
            <Button size="tiny" variant="ghost">
              <HiTrash className="text-lg" />
            </Button>
          </Modal.Open>
          <Modal.Open opens="edit-cabin">
            <Button size="tiny" variant="ghost">
              <HiPencil className="text-lg" />
            </Button>
          </Modal.Open>
          <Modal.Window name="remove-cabin">
            <ConfirmDelete
              resourceName="سوییت"
              disabled={isDeleting}
              onConfirm={() => deleteCabinApi(id)}
            />
          </Modal.Window>
          <Modal.Window name="edit-cabin">
            <EditCabinFrom cabin={props} />
          </Modal.Window>
        </Modal>
        {/* <Button size="tiny" variant="ghost">
          <HiTrash className="text-lg" />
        </Button>
        <Button size="tiny" variant="ghost">
          <HiPencil className="text-lg" />
        </Button> */}
      </td>
    </>
  );
};

export default CabinRow;
