import { Cabin as CabinType } from "../../types/cabin.interface";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { createEditCabin } from "../../services/apiCabins";
import FormRow from "../../pages/FormRow";

type CustomError = {
  message: string;
};

type CreateCabinFormProps = {
  cabinToEdit?: CabinType;
};

const CreateCabinForm: React.FC<CreateCabinFormProps> = ({ cabinToEdit }) => {
  const isEditSession = Boolean(cabinToEdit?.id);
  console.log(isEditSession, cabinToEdit?.id);

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<CabinType>({ defaultValues: cabinToEdit });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data: { newCabinData: CabinType; id?: number }) =>
      createEditCabin(data.newCabinData, data.id),
    onSuccess: () => {
      toast.success("Cabin successfully created/edited");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      reset();
    },
    onError: (err: CustomError) => {
      toast.error(err.message);
    },
  });

  function onError(errors: unknown) {
    console.log(errors);
  }

  const onSubmit: SubmitHandler<CabinType> = (data) => {
    const image = typeof data.image === "string" ? data.image : data.image[0];
    const newCabinData = { ...data, image };
    if (isEditSession) {
      mutation.mutate({ newCabinData, id: cabinToEdit?.id });
    } else {
      mutation.mutate({ newCabinData });
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)} type="modal">
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          {...register("name", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          {...register("maxCapacity", {
            required: "This field is required",
            valueAsNumber: true,
            min: {
              value: 1,
              message: "Capacity should be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Regular price" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          {...register("regularPrice", {
            required: "This field is required",
            valueAsNumber: true,
          })}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          {...register("discount", {
            required: "This field is required",
            valueAsNumber: true,
            validate: (value) => {
              const regularPrice = getValues().regularPrice;

              return (
                value <= regularPrice ||
                "Discount should be less than regular price"
              );
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Description for website"
        error={errors?.description?.message}
      >
        <Textarea
          id="description"
          defaultValue=""
          {...register("description", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Cabin photo">
        <FileInput
          type="file"
          id="image"
          accept="image/*"
          {...register("image", {
            required: !isEditSession,
          })}
        />
      </FormRow>

      <FormRow>
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={mutation.isLoading}>
          {isEditSession ? "Edit cabin" : "Add cabin"}
        </Button>
      </FormRow>
    </Form>
  );
};

export default CreateCabinForm;
