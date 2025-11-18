import Image from 'next/image';

export default function Logo() {
  return (
    <Image
      src="/images/logo.svg"
      alt="Stylematrics AI"
      width={125}
      height={30}
    />
  );
}
