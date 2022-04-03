import { NextSeo } from "next-seo";

export default function SEO() {
  const meta = {
    title: "Kumpulan Murottal",
    description: "Temukan qari favoritmu",
    creator: "@zakiego",
    url: "https://murottal.my.id",
    image:
      "https://hqxduecuxrozqlaicqkg.supabase.in/storage/v1/object/public/qari/banner.png",
  };
  return (
    <NextSeo
      title={meta.title}
      description={meta.description}
      canonical={meta.url}
      openGraph={{
        url: meta.url,
        title: meta.title,
        description: meta.description,
        images: [{ url: meta.image }],
        site_name: meta.title,
      }}
      twitter={{
        handle: "@handle",
        site: "@site",
        cardType: "summary_large_image",
      }}
    />
  );
}
