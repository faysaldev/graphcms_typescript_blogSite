import Head from "next/head";
import Link from "next/link";

const Header = ({ title }: Titile) => {
  return (
    <div className="px-10 py-6 bg-gray-50 shadow">
      <Head>
        <title>{title}</title>
      </Head>
      {/* left */}
      <div className="max-w-[1370px] mx-auto flex items-center justify-between ">
        <div>
          <h1 className="text-xl font-semibold">FM</h1>
        </div>
        {/* right */}
        <div className="flex items-center space-x-4">
          <Link href="/">
            <a>Home </a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/blogs">
            <a>Blogs</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
