import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative w-full border-b border-foreground/30 h-30 md:h-34">
      <Image
        src="/assets/banner.webp"
        alt="Banner"
        fill
        priority
        className="object-cover"
      />
    </section>
  );
}
