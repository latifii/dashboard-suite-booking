import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../../components/ui/Button";
import FileInput from "../../components/ui/FileInput";
import Form from "../../components/ui/Form";
import FormRow from "../../components/ui/FormRow";
import Input from "../../components/ui/Input";
import Textarea from "../../components/ui/Textarea";
import { Cabin } from "../../types/cabin.interface";
import { useCreateCabin } from "./useCreateCabin";
type FormData = Omit<Cabin, "id" | "created_at"> & { image: File | string };

type CreateCabinFormProps = {
  onCloseModal?: () => void;
};
const CreateCabinForm: React.FC<CreateCabinFormProps> = ({ onCloseModal }) => {
  const { createCabin, isCreating } = useCreateCabin();

  const {
    reset,
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm<FormData>();

  const onHandleSubmit: SubmitHandler<FormData> = (data) => {
    const image = data.image[0];

    createCabin(
      { ...data, image: image },
      {
        onSuccess: (data) => {
          reset();
          onCloseModal?.();
        },
      },
    );
  };

  return (
    <Form type="modal" onSubmit={handleSubmit(onHandleSubmit)}>
      <FormRow
        label="نام سوییت"
        error={
          typeof errors?.name?.message === "string"
            ? errors.name.message
            : undefined
        }
      >
        <Input
          id="name"
          type="text"
          placeholder="نام سوییت"
          disabled={isCreating}
          {...register("name", {
            required: "پر کردن این فیلد الزامی است",
            maxLength: {
              value: 10,
              message: "نام بیشتر از 10  کاراکتر مجاز نیست",
            },
          })}
        />
      </FormRow>
      <FormRow
        label="حداکثر ظرفیت"
        error={
          typeof errors?.maxCapacity?.message === "string"
            ? errors.maxCapacity.message
            : undefined
        }
      >
        <Input
          id="capacity"
          type="number"
          placeholder=" ظرفیت"
          disabled={isCreating}
          {...register("maxCapacity", {
            required: "پر کردن این فیلد الزامی است",
            min: {
              value: 1,
              message: "حداقل ظرفیت باید 1 باشد.",
            },
          })}
        />
      </FormRow>
      <FormRow
        label="قیمت"
        error={
          typeof errors?.regularPrice?.message === "string"
            ? errors.regularPrice.message
            : undefined
        }
      >
        <Input
          id="price"
          type="number"
          placeholder="قیمت"
          disabled={isCreating}
          {...register("regularPrice", {
            required: "پر کردن این فیلد الزامی است",
            min: {
              value: 100,
              message: "حداقل قیمت باید 100 باشد.",
            },
          })}
        />
      </FormRow>
      <FormRow
        label="تخفیف"
        error={
          typeof errors?.discount?.message === "string"
            ? errors.discount.message
            : undefined
        }
      >
        <Input
          id="discount"
          type="number"
          placeholder="تخفیف"
          disabled={isCreating}
          {...register("discount", {
            required: "پر کردن این فیلد الزامی است",
            validate: (value) =>
              value <= getValues().regularPrice ||
              "تخفیف نمیتواند بیشتر از قیمت باشد.",
          })}
        />
      </FormRow>
      <FormRow
        label="توضیحات"
        error={
          typeof errors?.description?.message === "string"
            ? errors.description.message
            : undefined
        }
      >
        <Textarea
          id="description"
          disabled={isCreating}
          {...register("description", {
            required: "پر کردن این فیلد الزامی است",
            minLength: {
              value: 10,
              message: "حداقل 10 کارکتر برای توضیحات الزامی است",
            },
          })}
        />
      </FormRow>
      <FormRow
        label="آپلود عکس"
        // error={
        //   typeof errors?.image?.message === "string"
        //     ? errors.image.message
        //     : undefined
        // }
      >
        <FileInput
          id="image"
          accept="image/*"
          {...register("image")}
          //   {...register("image", {
          //     required: "پر کردن این فیلد الزامی است",
          //   })}
        />
      </FormRow>
      <FormRow>
        <Button variant="ghost">انصراف</Button>
        <Button variant="primary" type="submit" disabled={isCreating}>
          اضافه کردن
        </Button>
      </FormRow>
    </Form>
  );
};

export default CreateCabinForm;
