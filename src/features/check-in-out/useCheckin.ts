import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: (bookingId: number) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
      }),
    onSuccess: (data) => {
      toast.success(`رزرو با فاکتور ${data.id} با موفقیت تایید شد.`);
      queryClient.invalidateQueries({
        predicate: (query) => query.state.status === "success",
      });
      navigate("/");
    },
    onError: () => toast.error("مشکلی در تایید فاکتور رخ داده است"),
  });

  return { checkin, isCheckingIn };
}
