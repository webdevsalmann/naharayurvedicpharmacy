import { buttonVariants } from "@/components/ui/button";
import Section from "@/components/section/section";
import Link from "next/link";

export default function Hero() {
  return (
    <Section className="relative bg-[url('/hero.jpg')] before:bg-neutral-900/30 before:block before:absolute before:inset-0 before:z-0 bg-center bg-no-repeat bg-cover overflow-hidden">
      <div className="relative flex-center z-10">
        <div className="mx-auto w-full md:w-3/4 md:text-center text-white">
          <h1>Nahar Ayurvedic Pharmacy</h1>
          <p className="my-base">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod perspiciatis optio impedit ipsa quae assumenda sed nostrum rem, cum, veritatis atque, dolor dignissimos eius. Corporis libero in magnam consequuntur quibusdam.</p>
          <Link className={buttonVariants()} href="/shop">Visit Shop</Link>
        </div>
      </div>
    </Section>
  )
}
