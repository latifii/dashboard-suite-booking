import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../../components/ui/Button";
import Form from "../../components/ui/Form";
import FormRow from "../../components/ui/FormRow";
import Input from "../../components/ui/Input";
import { AuthSignup } from "../../types/auth.types";
import { useSignup } from "./useSignup";

type SignupFormData = AuthSignup & {
  confirmPassword: string;
};

const SignupForm: React.FC = () => {
  const { signup, isLoading } = useSignup();
  const {
    register,
    reset,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>();

  const submitData: SubmitHandler<SignupFormData> = ({
    fullName,
    password,
    email,
    phone,
  }) => {
    signup({ fullName, password, email, phone }, { onSettled: () => reset() });
  };

  return (
    <Form type="regular" onSubmit={handleSubmit(submitData)}>
      <FormRow
        label="نام و نام خانوادگی"
        error={
          typeof errors?.fullName?.message === "string"
            ? errors.fullName.message
            : undefined
        }
      >
        <Input
          type="text"
          id="fullName"
          disabled={isLoading}
          {...register("fullName", { required: "پر کردن این فید الزامی است." })}
        />
      </FormRow>
      <FormRow
        label="ایمیل"
        error={
          typeof errors?.email?.message === "string"
            ? errors.email.message
            : undefined
        }
      >
        <Input
          type="email"
          id="email"
          disabled={isLoading}
          {...register("email", {
            required: "پر کردن این فید الزامی است.",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "لطفا یک آدرس ایمیل معتبر ارائه دهید",
            },
          })}
        />
      </FormRow>
      <FormRow
        label="شماره موبایل"
        error={
          typeof errors?.email?.message === "string"
            ? errors.email.message
            : undefined
        }
      >
        <Input
          type="tel"
          id="phone"
          disabled={isLoading}
          {...register("phone", {
            required: "پر کردن این فید الزامی است.",
            minLength: {
              value: 11,
              message: "شماره موبایل باید 11 رقم باشد",
            },
          })}
        />
      </FormRow>
      <FormRow
        label="رمز عبور"
        error={
          typeof errors?.password?.message === "string"
            ? errors.password.message
            : undefined
        }
      >
        <Input
          type="password"
          disabled={isLoading}
          id="password"
          {...register("password", {
            required: "پر کردن این فید الزامی است.",
            minLength: {
              value: 8,
              message: "رمز عبور حداقل 8 کارکتر باشد.",
            },
          })}
        />
      </FormRow>
      <FormRow
        label="تایید رمز عبور"
        error={
          typeof errors?.confirmPassword?.message === "string"
            ? errors.confirmPassword.message
            : undefined
        }
      >
        <Input
          type="password"
          disabled={isLoading}
          id="confirmPassword"
          {...register("confirmPassword", {
            required: "پر کردن این فید الزامی است.",
            validate: (value) => {
              return (
                value === getValues().password ||
                "رمزهای عبور باید مطابقت داشته باشند"
              );
            },
          })}
        />
      </FormRow>
      <FormRow>
        <Button variant="ghost" type="reset" className="font-bold">
          لغو
        </Button>
        <Button variant="primary" type="submit" className="font-bold">
          ایجاد کاربر
        </Button>
      </FormRow>
    </Form>
  );
};

export default SignupForm;
