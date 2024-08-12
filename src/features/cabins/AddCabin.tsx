import Button from "../../components/ui/Button";
import Modal from "../../components/ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

const AddCabin: React.FC = () => {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>اضافه کردن سوییت</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
};

export default AddCabin;
