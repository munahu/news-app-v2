import Layout from "../components/Layout";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <Layout heading={params.slug}>
      <h1>{params.slug}</h1>
    </Layout>
  );
}
