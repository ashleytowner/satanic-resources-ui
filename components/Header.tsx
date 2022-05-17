import Image from 'next/image';
import Link from 'next/link';

function Header() {
  return (
    <header className="bg-l2 h-14 flex gap-5 items-center p-4">
      <Image
        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}/uploads/icon_1e69a2b_781b312029.png`}
        alt="Logo"
        width={40}
        height={40}/>
      <Link href="/">Search Resources</Link>
      <a href="/about">About</a>
    </header>
  )
}

export default Header;
