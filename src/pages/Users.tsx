import Heading from "../components/ui/Heading";
import SignupForm from "../features/authentication/SignupForm";

function NewUsers() {
  return (
    <>
      <Heading className="my-8" as="h2">
        ایجاد کاربر جدید
      </Heading>
      <SignupForm />
    </>
  );
}

export default NewUsers;
