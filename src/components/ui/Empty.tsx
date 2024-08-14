type EmptyProps = {
  resourceName: string;
};

const Empty: React.FC<EmptyProps> = ({ resourceName }) => {
  return <p>جدول {resourceName} خالی میباشد</p>;
};

export default Empty;
