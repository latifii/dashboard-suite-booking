import { ChangeEvent, EventHandler } from "react";
import Form from "../../components/ui/Form";
import FormRow from "../../components/ui/FormRow";
import Input from "../../components/ui/Input";
import Spinner from "../../components/ui/Spinner";
import { useSettings } from "./useSettings";
import { useUpdateSettings } from "./useUpdateSettings";
import { SettingType } from "../../types/setting.interface";

const FormSetting: React.FC = () => {
  const { settings, isLoading } = useSettings();
  const { isUpdating, updateSettingApi } = useUpdateSettings();

  function handleUpdating(
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof SettingType,
  ) {
    const { value } = e.target;
    if (!value) return;
    updateSettingApi({ [field]: Number(value) });
  }

  if (isLoading) return <Spinner variant="primary" />;

  const {
    minBookingLength,
    maxBookingLength,
    maxGuestsPerBooking,
    breakfastPrice,
  } = settings;

  return (
    <Form>
      <FormRow label="حداقل شب/رزرو">
        <Input
          type="number"
          defaultValue={minBookingLength}
          onChange={(e) => handleUpdating(e, "minBookingLength")}
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow label="حداکثر شب/رزرو">
        <Input
          type="number"
          defaultValue={maxBookingLength}
          onChange={(e) => handleUpdating(e, "maxBookingLength")}
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow label="حداکثر گنجایش مهمان">
        <Input
          type="number"
          defaultValue={maxGuestsPerBooking}
          onChange={(e) => handleUpdating(e, "maxGuestsPerBooking")}
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow label="قیمت صبحانه">
        <Input
          type="number"
          defaultValue={breakfastPrice}
          onChange={(e) => handleUpdating(e, "breakfastPrice")}
          disabled={isUpdating}
        />
      </FormRow>
    </Form>
  );
};

export default FormSetting;
