import { FormEvent, useState } from "react";
import Button from "../../components/ui/Button";
import FileInput from "../../components/ui/FileInput";
import Form from "../../components/ui/Form";
import FormRow from "../../components/ui/FormRow";
import Input from "../../components/ui/Input";
import { useUser } from "./useUser";
import { useUpdateUser } from "./useUpdateUser";

const UpdateUserForm: React.FC = () => {
  const { isUpdating, updateUser } = useUpdateUser();
  const { user } = useUser();
  const email = user?.email;
  const currentFullName = user?.user_metadata?.fullName;
  const [fullName, setFullName] = useState<string>(currentFullName);
  const [avatar, setAvatar] = useState<File | null>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.files);

    if (e.target.files && e.target.files.length > 0) {
      setAvatar(e.target.files[0]);
    } else {
      setAvatar(null);
    }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    updateUser({ fullName, avatar });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="ایمیل">
        <Input type="email" id="email" name="email" value={email} disabled />
      </FormRow>
      <FormRow label="نام و نام خانوداگی">
        <Input
          type="text"
          id="fullName"
          name="fullName"
          onChange={(e) => setFullName(e.target.value)}
          value={fullName}
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow label="عکس کاربری">
        <FileInput
          type="file"
          accept="image/*"
          id="avatar"
          name="avatar"
          onChange={handleFileChange}
          disabled={isUpdating}
        />
      </FormRow>

      <FormRow>
        <Button
          type="reset"
          className="font-bold"
          variant="ghost"
          onClick={() => setFullName(currentFullName)}
        >
          لغو
        </Button>
        <Button
          type="submit"
          variant={isUpdating ? "neutral" : "primary"}
          shape="wide"
          className="font-bold"
          disabled={isUpdating}
        >
          {isUpdating ? "در حال آپدیت..." : "آپدیت حساب کاربری"}
        </Button>
      </FormRow>
    </Form>
  );
};

export default UpdateUserForm;
