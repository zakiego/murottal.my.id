import Link from "next/link";
export const Saran = () => {
  return (
    <div className="transition-all ease-in-out opacity-90 hover:opacity-100">
      <Link href="/saran">
        <a className="bg-[#002884]/70 text-white rounded-md px-2 py-1.5 font-semibold text-xs md:text-base">
          Saya ingin menambahkan qori lainnya! 👋🏻
        </a>
      </Link>
    </div>
  );
};
