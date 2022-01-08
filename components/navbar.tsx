import Image from "next/image";
import Link from "next/link";

import { github } from "~/assets/icon";

export const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div className="space-y-1">
        <h1 className="text-2xl md:text-3xl font-bold text-[#002884]">
          <Link href="/">
            <a>Kumpulan Murottal</a>
          </Link>
        </h1>
        <p className="text-sm md:text-lg font-medium text-[#6C7380]">
          Temukan qari kesukaanmu
        </p>
      </div>
      <div>
        <a href="https://github.com/zakiego/murottal.my.id">
          <div className="relative h-5 transition-all ease-in-out opacity-60 md:h-8 md:w-8 hover:opacity-90">
            <Image
              src={github}
              layout="fill"
              objectFit="cover"
              alt="Github Murottal.my.id"
            />
          </div>
        </a>
      </div>
    </div>
  );
};
