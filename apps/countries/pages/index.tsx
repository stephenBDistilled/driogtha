interface ServerSideProps {
  data: any;
}

export function Index({ data }: ServerSideProps) {
  return <div>Countries</div>;
}

export async function getServerSideProps() {
  return { props: { data: {} } };
}

export default Index;
