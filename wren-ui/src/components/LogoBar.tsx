import Image from 'next/image';

export default function LogoBar() {
  return (
    <Image
      src="/images/logo-white-with-text.svg"
      alt="StyleMetrics AI"
      width={125}
      height={30}
    />
  );
}
