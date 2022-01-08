import Image from "next/image";

import { telegram, youtube } from "~/assets/icon";
import Ping from "~/utils/ping";

export const SocialIcon = ({
  kind,
  href,
  id,
}: {
  kind: string;
  href: string | undefined;
  id: number;
}) => {
  if (href == null) return null;

  const components: any = {
    telegram: telegram,
    youtube: youtube,
  };

  const SocialSvg = components[kind];

  return (
    <a
      href={href}
      onClick={async () => await Ping({ qari_id: id.toString(), type: kind })}
      className="relative object-fill transition-all ease-in-out w-7 md:w-8 opacity-60 hover:opacity-100"
    >
      <Image src={SocialSvg} alt={`${kind} icon`} />
    </a>
  );
};