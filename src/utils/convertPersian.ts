import { ColorStatus, StatusKey } from "../types/booking.interface";

export const statusMap: Record<
  StatusKey,
  { value: string; color: ColorStatus }
> = {
  "checked-in": { value: "تایید شده", color: "success" },
  "checked-out": { value: "بررسی", color: "info" },
  unconfirmed: { value: "تایید نشده", color: "error" },
};
