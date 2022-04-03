import Image from "next/image";

import { telegram, youtube } from "~/assets/icon";

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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const components: any = {
    telegram: telegram,
    youtube: youtube,
  };

  const SocialSvg = components[kind];

  return (
    <a
      href={href}
      className="relative object-fill transition-all ease-in-out w-7 md:w-8 opacity-60 hover:opacity-100"
    >
      <Image src={SocialSvg} alt={`${kind} icon`} />
    </a>
  );
};
