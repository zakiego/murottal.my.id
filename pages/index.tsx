import { QariCard, Saran } from "~/components";
import Layout from "~/components/layout";
import SEO from "~/components/seo";
import { QariType } from "~/lib/qari";

export async function getStaticProps() {
  const url = process.env.NEXT_URL;

  const data = await fetch(`${url}/api/v1/qari`).then((resp) => resp.json());

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default function Index({ data }: { data: QariType[] }) {
  return (
    <Layout>
      <SEO />
      <body>
        <div className="mt-4">
          <Saran />
        </div>
        <main className="mt-10">
          <QariCard data={data} />
        </main>
      </body>
    </Layout>
  );
}
