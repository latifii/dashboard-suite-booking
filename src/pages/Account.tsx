import Heading from "../components/ui/Heading";
import Row from "../components/ui/Row";
import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import UpdateUserForm from "../features/authentication/UpdateUserForm";

function Account() {
  return (
    <Row type="vertical">
      <Heading as="h2" className="my-8">
        آپدیت حساب کاربری
      </Heading>

      <Heading as="h3" className="mb-4 text-center">
        آپدیت مشخصات کاربری
      </Heading>
      <UpdateUserForm />

      <Heading as="h3" className="mb-4 mt-8 text-center">
        آپدیت رمز عبور
      </Heading>
      <UpdatePasswordForm />
    </Row>
  );
}

export default Account;
