import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ObjCheckinUpdate } from "../../types/checkin.types";
type CheckinParams = {
  bookingId: number;
  obj: Partial<ObjCheckinUpdate>;
};
export function useCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: ({ bookingId, obj }: CheckinParams) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
        ...obj,
      }),
    onSuccess: (data) => {
      toast.success(`رزرو با فاکتور ${data.id} با موفقیت بررسی شد.`);
      queryClient.invalidateQueries({
        predicate: (query) => query.state.status === "success",
      });
      navigate("/");
    },
    onError: () => toast.error("مشکلی در بررسی فاکتور رخ داده است"),
  });

  return { checkin, isCheckingIn };
}
