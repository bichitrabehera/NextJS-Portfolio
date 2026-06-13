import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative w-full h-50 md:h-90">
      <Image
        src="/assets/bannerr.png"
        alt="Banner"
        fill
        priority
        className="object-cover"
      />
    </section>
  );
}
