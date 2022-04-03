import Link from "next/link";
import { useState } from "react";

import Layout from "~/components/layout";
import SEO from "~/components/seo";

export default function Saran() {
  const [input, setInput] = useState("");
  const [isSucces, setIsSuccess] = useState(false);

  async function sendMessage() {
    const { ok } = await fetch("/api/v1/saran", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: input,
      }),
    }).then((resp) => resp.json());

    if (ok) {
      setIsSuccess(true);
    }
  }

  if (isSucces) {
    return (
      <Layout>
        <SEO />
        <main className="mt-10 text-center">
          <p className="text-3xl font-bold ">Terima kasih!</p>
          <p className="font-semibold ">Semoga Allah membalas kebaikanmu ❤️</p>
          <div className="mt-4">
            Kembali ke{" "}
            <Link href="/">
              <a className="text-[#002884]">beranda</a>
            </Link>
          </div>
        </main>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO />
      <body>
        <main className="mt-10">
          <textarea
            placeholder="Tulis nama qari atau channel youtube yang ingin Anda sarankan"
            onChange={(e) => setInput(e.target.value)}
            rows={6}
            className="text-sm md:text-lg mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary/70 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          <button
            onClick={() => sendMessage()}
            className="text-sm md:text-lg mt-5 rounded-lg bg-primary/70  hover:bg-primary/80 px-4 py-2 text-white"
          >
            Kirim Saran
          </button>
        </main>
      </body>
    </Layout>
  );
}
