import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../../components/ui/Button";
import FileInput from "../../components/ui/FileInput";
import Form from "../../components/ui/Form";
import FormRow from "../../components/ui/FormRow";
import Input from "../../components/ui/Input";
import Textarea from "../../components/ui/Textarea";
import { Cabin } from "../../types/cabin.interface";
import { useEditCabin } from "./useEditCabin";
import toast from "react-hot-toast";

type FormData = Omit<Cabin, "id" | "created_at"> & { image: File | string };

type EditCabinFormProps = {
  cabin: Partial<Cabin>;
  onCloseModal?: () => void;
};

const EditCabinFrom: React.FC<EditCabinFormProps> = ({
  onCloseModal,
  cabin = {},
}) => {
  const { editCabinMuate, isEditing } = useEditCabin();

  const { id: editId, ...editValues } = cabin;

  const {
    reset,
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm<FormData>({ defaultValues: editValues });

  const onHandleSubmit: SubmitHandler<FormData> = (data) => {
    if (editId === undefined) {
      toast.error("شناسه سوییت نامعتبر است");
      return;
    }

    const image = typeof data.image === "string" ? data.image : data.image[0];
    // const image = data.image;
    const newCabinData = { ...data, image };

    editCabinMuate(
      {
        updatedCabin: newCabinData,
        id: editId,
      },
      {
        onSuccess: () => {
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
          disabled={isEditing}
          {...register("name", {
            required: "پر کردن این فیلد الزامی است",
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
          disabled={isEditing}
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
          disabled={isEditing}
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
          disabled={isEditing}
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
          disabled={isEditing}
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
        <Button variant="primary" type="submit" disabled={isEditing}>
          ویرایش کردن
        </Button>
      </FormRow>
    </Form>
  );
};

export default EditCabinFrom;
