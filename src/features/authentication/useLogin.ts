import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { AuthLogin } from "../../types/auth.types";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }: AuthLogin) =>
      loginApi({ email, password }),
    onSuccess: (user) => {
      toast.success("به سایت گرین بوم خوش آمدی");
      queryClient.setQueryData(["user"], user.user);
      navigate("/dashboard");
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("ایمیل یا رمز عبور نامعتبر است.");
    },
  });

  return { login, isLoading };
}
