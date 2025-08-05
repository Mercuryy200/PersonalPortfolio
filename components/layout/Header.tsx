import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full flex items-center justify-between bg-white p-4">
      <Link href="/">
        <Image
          src="/images/Letter_R.png"
          alt="Letter R"
          width={50}
          height={50}
        />
      </Link>
      <div className="flex gap-6 items-center text-base">
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
}
