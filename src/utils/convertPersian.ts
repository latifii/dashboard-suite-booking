import { ColorStatus, StatusKey } from "../types/booking.interface";

export const statusMap: Record<
  StatusKey,
  { value: string; color: ColorStatus }
> = {
  "checked-in": { value: "ورود مهمان", color: "info" },
  "checked-out": { value: "خروج مهمان", color: "success" },
  unconfirmed: { value: "تایید نشده", color: "error" },
};
