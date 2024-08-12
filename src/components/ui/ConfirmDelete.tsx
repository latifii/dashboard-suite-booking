import Button from "./Button";
import Heading from "./Heading";
import { ConfirmDeleteProps } from "./types/ConfirmDeleteProps.types";

const ConfirmDelete: React.FC<ConfirmDeleteProps> = ({
  onCloseModal,
  onConfirm,
  resourceName,
  disabled,
}) => {
  function handleConfirm() {
    onConfirm();
    onCloseModal?.();
  }
  return (
    <div className="flex w-80 flex-col gap-3">
      <Heading as="h3">حذف {resourceName}</Heading>
      <p>آیا شما مطمئن هستید که میخواهید {resourceName} برای همیشه حذف کنید؟</p>
      <div className="flex justify-end gap-3">
        <Button variant="ghost" onClick={onCloseModal} disabled={disabled}>
          لغو
        </Button>
        <Button variant="error" onClick={handleConfirm} disabled={disabled}>
          حذف
        </Button>
      </div>
    </div>
  );
};

export default ConfirmDelete;
