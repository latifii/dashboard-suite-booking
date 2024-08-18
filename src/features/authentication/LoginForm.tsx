import { FormEvent, useState } from "react";
import Form from "../../components/ui/Form";
import FormRowVertical from "../../components/ui/FormRowVertical";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { useLogin } from "./useLogin";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>("latifi@yahoo.com");
  const [password, setPassword] = useState<string>("Hamed1199");
  const { login, isLoading } = useLogin();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled() {
          setEmail("");
          setPassword("");
        },
      },
    );
  }

  return (
    <Form
      onSubmit={handleSubmit}
      className="mx-auto rounded-lg bg-white px-16 py-6 shadow dark:bg-base-25"
    >
      <FormRowVertical label="ایمیل">
        <Input
          type="email"
          id="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormRowVertical>

      <FormRowVertical label="رمز عبور">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRowVertical>

      <FormRowVertical>
        <Button size="normal" variant="primary" type="submit">
          {isLoading ? "ارسال..." : "ورود"}
        </Button>
      </FormRowVertical>
    </Form>
  );
};

export default LoginForm;
