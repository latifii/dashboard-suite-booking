import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../../components/ui/Button";
import Form from "../../components/ui/Form";
import FormRow from "../../components/ui/FormRow";
import Input from "../../components/ui/Input";
import { useUpdateUser } from "./useUpdateUser";

const UpdatePasswordForm: React.FC = () => {
  type FormType = {
    password: string;
    passwordConfirm: string;
  };
  const { isUpdating, updateUser } = useUpdateUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm<FormType>();
  const formSubmit: SubmitHandler<FormType> = ({ password }) => {
    updateUser(
      { password },
      {
        onSettled: () => reset(),
      },
    );
  };

  return (
    <Form onSubmit={handleSubmit(formSubmit)}>
      <FormRow
        label="رمزعبور جدید"
        error={
          typeof errors?.password?.message === "string"
            ? errors.password.message
            : undefined
        }
      >
        <Input
          type="password"
          id="password"
          disabled={isUpdating}
          {...register("password", {
            required: "پر کردن این فیلد ضروری است",
            minLength: {
              value: 8,
              message: "رمز عبور باید حداقل 8 کارکتر باشد",
            },
          })}
        />
      </FormRow>
      <FormRow
        label="تایید رمز عبور"
        error={
          typeof errors?.passwordConfirm?.message === "string"
            ? errors.passwordConfirm.message
            : undefined
        }
      >
        <Input
          type="password"
          id="passwordConfirm"
          disabled={isUpdating}
          {...register("passwordConfirm", {
            validate: (value) =>
              value === getValues().password || "رمز عبور مطابقت ندارد",
          })}
        />
      </FormRow>

      <FormRow>
        <Button
          type="reset"
          className="font-bold"
          variant="ghost"
          onClick={() => reset()}
        >
          لغو
        </Button>
        <Button
          type="submit"
          variant={isUpdating ? "neutral" : "primary"}
          shape="wide"
          className="font-bold"
        >
          {isUpdating ? "ارسال..." : "تغییر رمز عبور"}
        </Button>
      </FormRow>
    </Form>
  );
};

export default UpdatePasswordForm;
