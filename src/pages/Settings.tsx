import Heading from "../components/ui/Heading";
import Row from "../components/ui/Row";
import FormSetting from "../features/settings/FormSetting";

function Settings() {
  return (
    <Row type="vertical">
      <Heading as="h2" className="my-8">
        آپدیت تنظیمات سوییت
      </Heading>
      <FormSetting />
    </Row>
  );
}

export default Settings;
