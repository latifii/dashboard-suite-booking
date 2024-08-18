import Heading from "../components/ui/Heading";
import Logo from "../components/ui/Logo";
import LoginForm from "../features/authentication/LoginForm";

function Login() {
  return (
    <main className="grid min-h-screen place-items-center gap-8 bg-base-10 dark:bg-base-300">
      <Logo />
      <Heading as="h4">ورود به صفحه کاربری</Heading>
      <LoginForm />
    </main>
  );
}
export default Login;
