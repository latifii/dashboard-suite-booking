import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading: isLogouting } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      navigate("/login");
      queryClient.removeQueries();
    },
  });

  return { logout, isLogouting };
}
