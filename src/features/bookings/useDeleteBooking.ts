import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { CustomErrorType } from "../../types/error.types";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { mutate: mutateBookingDelete, isLoading: isDeletingBooking } =
    useMutation({
      mutationFn: (id: number) => deleteBooking(id),
      onSuccess: () => {
        toast.success("رزرو مورد نظر با موفقیت حذف شد");
        queryClient.invalidateQueries({
          queryKey: ["bookings"],
        });
      },
      onError: (err) => {
        toast.error((err as CustomErrorType).message);
      },
    });

  return { mutateBookingDelete, isDeletingBooking };
}
