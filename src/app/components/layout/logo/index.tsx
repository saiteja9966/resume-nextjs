import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/images/logo/logo.svg"
        alt="Logo"
        width={70}
        height={70}
        priority
      />
    </Link>
  );
};

export default Logo;
