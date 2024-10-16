import Link from "next/link";
import Section from "@/components/section/section";
import { LogoHorizontal } from "@/components/ui/svgs";
import { Facebook, Instagram } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const quickLinks = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "About",
    href: "/about"
  },
  {
    label: "Shop",
    href: "/shop"
  },
  {
    label: "Saved",
    href: "/saved"
  },
  {
    label: "Contact",
    href: "/contact"
  },
  {
    label: "Products Data",
    href: "/products-data"
  },
]

const productsLinks = [
  {
    label: "Pills",
    href: "/shop?category=pill"
  },
  {
    label: "Oils",
    href: "/shop?category=oil"
  },
  {
    label: "Powders",
    href: "/shop?category=powder"
  },
  {
    label: "Tablets",
    href: "/shop?category=tablet"
  },
]

const socialLinks = [
  {
    label: "Instagram",
    href: "/",
    icon: <Instagram className="size-xl shrink-0" />
  },
  {
    label: "Facebook",
    href: "/",
    icon: <Facebook className="size-xl shrink-0" />
  }
]

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t mb-12 md:mb-0">
      <Section>
        <div className="grid gap-block md:grid-cols-2">
          <div className="">
            <Link className="block w-fit flex-center" href="/">
              <LogoHorizontal className="h-10 w-40 text-primary" />
              <span className='sr-only'>webdevsalmann</span>
            </Link>

            <div className="my-base flex gap-base">
              {socialLinks.map(item => (
                <Link className={cn(buttonVariants({ variant: "outline" }), "block w-fit aspect-square p-2")} href={item.href} key={item.label + "FooterSocialLink"}>
                  {item.icon}
                  <span className="sr-only">Visit {item.label}</span>
                </Link>
              ))}
            </div>

            <p>
              Empowering your journey to wellness with authentic Ayurvedic solutions. Discover natural healing rooted in centuries of tradition.
            </p>
          </div>


          <div className="w-full grid gap-block sm:grid-cols-2">
            {/* Quick Links */}
            <div className="md:justify-self-end">
              <div className="font-semibold">Quick Links</div>
              <ul className="mt-2">
                {quickLinks.map((item, i) => (
                  <li key={item.label + "Footer"}>
                    <Link className="capitalize text-link" href={item.href}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Shop */}
            <div className="md:justify-self-end">
              <div className="font-semibold">Shop</div>
              <ul className="mt-2">
                {productsLinks.map((item, i) => (
                  <li key={item.label + "Footer"}>
                    <Link className="capitalize text-link" href={item.href}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <div className="p-block bg-primary">
        <p className="text-sm text-center text-muted">
          &copy;{currentYear}webdevsalmann / <Link className="hover:underline" href="/privacy-policy"> privacy-policy</Link> / <Link className="hover:underline" href="/credits"> Credits</Link> / Developed by <Link className="hover:underline" href="https://webdevsalmann.vercel.app/"> webdevsalmann</Link> 💖
        </p>
      </div>
    </footer>
  )
}
