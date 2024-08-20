import Heading from "../components/ui/Heading";
import Row from "../components/ui/Row";
import DashboardFilter from "../features/dashboard/DashboardFilter";
import DashboardLayout from "../features/dashboard/DashboardLayout";

function Dashboard() {
  return (
    <>
      <Row type="horizontal" className="my-8">
        <Heading as="h2">داشبورد</Heading>
        <DashboardFilter />
      </Row>
      <DashboardLayout />
    </>
  );
}

export default Dashboard;
