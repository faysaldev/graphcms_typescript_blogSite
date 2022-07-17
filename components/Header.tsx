import Link from "next/link";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-10 py-6 bg-gray-50 shadow">
      {/* left */}
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
  );
};

export default Header;
