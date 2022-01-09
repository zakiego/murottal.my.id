import Head from "next/head";

import { Navbar, QariCard, Saran } from "~/components";
import { QariType } from "~/lib/qari";

export async function getStaticProps() {
  const data = await fetch("https://murottal.my.id/api/v1/qari").then((resp) =>
    resp.json(),
  );

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
  const meta = {
    title: "Kumpulan Murottal",
    description: "Temukan qari kesukaanmu",
    creator: "@zakiego",
    url: "murottal.my.id",
    image:
      "https://hqxduecuxrozqlaicqkg.supabase.in/storage/v1/object/public/qari/banner.png",
  };
  return (
    <div className="min-h-screen px-6 md:px-11 lg:px-16 py-7 md:py-14 from-white via-white to-[#EBF0FE] bg-gradient-to-br">
      <Head>
        <title>{meta.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content={meta.description} />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" key="twcard" />
        <meta name="twitter:creator" content={meta.creator} key="twhandle" />
        {/* Open Graph */}
        <meta property="og:url" content={meta.url} key="ogurl" />
        <meta property="og:image" content={meta.image} key="ogimage" />
        <meta property="og:site_name" content={meta.url} key="ogsitename" />
        <meta property="og:title" content={meta.title} key="ogtitle" />
        <meta
          property="og:description"
          content={meta.description}
          key="ogdesc"
        />
      </Head>
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
