import { buttonVariants } from "@/components/ui/button";
import Section from "@/components/section/section";
import Link from "next/link";

export default function Hero() {
  return (
    <Section className="py-12 md:py-0 relative bg-[url('/hero.jpg')] before:bg-neutral-900/5 before:block before:absolute before:inset-0 before:z-0 bg-center bg-no-repeat bg-cover overflow-hidden">
      <div className="relative flex-center z-10">
        <div className="mx-auto w-full md:w-3/4 text-center ">
          <h1 className="text-4xl md:text-5xl">Power of Nature with Authentic Ayurvedic Remedies</h1>
          <p className="my-base">Explore a wide range of natural, holistic solutions crafted to restore balance and promote wellness for mind, body, and spirit. Trust in centuries-old traditions combined with modern expertise.</p>
          <Link className={buttonVariants()} href="/shop">Visit Shop</Link>
        </div>
      </div>
    </Section>
  )
}
