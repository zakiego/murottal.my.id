import Image from "next/image";

import type { QariType } from "~/lib/qari";
import Ping from "~/utils/ping";

import { SocialIcon } from ".";

export const QariCard = ({ data }: { data: QariType[] }) => {
  return (
    <div className="grid grid-cols-2 gap-4 md:gap-12 md:grid-cols-3 xl:grid-cols-4">
      {data.map((qari: QariType) => {
        return (
          <div
            key={qari.id}
            id="card"
            className="w-full mx-auto justify-center backdrop-blur-3xl flex py-5 md:py-12 shadow-card bg-white rounded-[34px] px-5"
          >
            <div className="text-center">
              <a href={qari.social?.youtube}>
                <Image
                  onClick={async () =>
                    await Ping({ qari_id: qari.id.toString(), type: "photo" })
                  }
                  className="rounded-full md:scale-100"
                  height={200}
                  width={200}
                  src={qari.image}
                  alt={qari.name}
                />
              </a>
              <div className="flex items-center justify-center mt-6 space-x-2 md:mt-8">
                <SocialIcon
                  kind="youtube"
                  href={qari.social?.youtube}
                  id={qari.id}
                />

                <SocialIcon
                  kind="telegram"
                  href={qari.social?.telegram}
                  id={qari.id}
                />
              </div>
              <h1 className="mt-4 text-sm font-medium md:mt-5 md:text-xl text-black-smooth">
                {qari.name}
              </h1>
              <p className="mt-3 text-xs md:text-sm text-black-fade">
                {qari.name_ar}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
