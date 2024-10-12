import { buttonVariants } from "@/components/ui/button";
import Section from "@/components/section/section";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <Section
      className="relative py-12 md:py-0 overflow-hidden"
      midChild={(
        <div className="absolute inset-0">
          <Image
            className="size-full object-cover object-center"
            src="/hero.jpg"
            width={600}
            height={300}
            alt="Hero background Image"
            priority
          />
          <div className="absolute inset-0 bg-black/5"/>
        </div>
      )}
    >
      <div className="relative flex-center z-10">
        <div className="mx-auto w-full md:w-3/4 text-center ">
          <h1 className="text-4xl md:text-5xl no-hd">Power of Nature with Authentic Ayurvedic Remedies</h1>
          <p className="my-base">Explore a wide range of natural, holistic solutions crafted to restore balance and promote wellness for mind, body, and spirit. Trust in centuries-old traditions combined with modern expertise.</p>
          <Link className={buttonVariants()} href="/shop">Visit Shop</Link>
        </div>
      </div>
    </Section>
  )
}
