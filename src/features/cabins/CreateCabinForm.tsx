import Button from "../../components/ui/Button";
import FileInput from "../../components/ui/FileInput";
import Form from "../../components/ui/Form";
import FormRow from "../../components/ui/FormRow";
import Input from "../../components/ui/Input";
import Textarea from "../../components/ui/Textarea";

const CreateCabinForm: React.FC = () => {
  return (
    <Form type="regular">
      <FormRow label="نام سوییت">
        <Input id="name" type="text" placeholder="نام سوییت" />
      </FormRow>
      <FormRow label="حداکثر ظرفیت">
        <Input id="capacity" type="text" placeholder="حداکثر ظرفیت" />
      </FormRow>
      <FormRow label="قیمت">
        <Input id="price" type="text" placeholder="قیمت" />
      </FormRow>
      <FormRow label="توضیحات">
        <Textarea id="description" />
      </FormRow>
      <FormRow label="آپلود عکس">
        <FileInput id="image" accept="image/*" />
      </FormRow>
      <FormRow>
        <Button variant="ghost">انصراف</Button>
        <Button variant="primary">اضافه کردن </Button>
      </FormRow>
    </Form>
  );
};

export default CreateCabinForm;
