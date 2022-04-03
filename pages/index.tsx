import { Navbar, QariCard, Saran } from "~/components";
import SEO from "~/components/seo";
import { QariType } from "~/lib/qari";

export async function getStaticProps() {
  const url = process.env.NEXT_URL || process.env.VERCEL_URL;
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
    <div className="min-h-screen px-6 md:px-11 lg:px-16 py-7 md:py-14 from-white via-white to-[#EBF0FE] bg-gradient-to-br">
      <SEO />
      <body>
        <nav>
          <Navbar />
        </nav>
        <div className="mt-4">
          <Saran />
        </div>
        <main className="mt-10">
          <QariCard data={data} />
        </main>
      </body>
    </div>
  );
}
