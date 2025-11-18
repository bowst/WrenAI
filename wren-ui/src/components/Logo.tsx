import Image from 'next/image';

export default function Logo() {
  return (
    <Image
      src="/images/logo.svg"
      alt="StyleMetrics AI"
      width={125}
      height={30}
    />
  );
}
