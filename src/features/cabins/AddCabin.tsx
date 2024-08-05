import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

export default function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens="add-cabin">
        <Button>Add new cabin</Button>
      </Modal.Open>
      <Modal.Window name="add-cabin">
        <CreateCabinForm />
      </Modal.Window>
    </Modal>
  );
}
