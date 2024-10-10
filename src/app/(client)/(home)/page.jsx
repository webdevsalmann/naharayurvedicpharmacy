import Featured from "./featured";
import Category from "./category";
import Bestseller from "./bestseller";
import Testimonial from "./testimonial";
import Contact from "@/components/layouts/contact/Contact";
import Hero from "./hero";
import Benefits from "./benefits";
import CurrentOffer from "./current-offer";
import ProductCarousalSection from "@/components/section/product-carousal-section";
import { products } from "@/lib/data/database";

export default function page() {
  return (
    <main className="relative">
      <Hero />
      <ProductCarousalSection
        h2="Pills"
        data={products.filter(item => item.category === "pill")}
      />
      <ProductCarousalSection
        className="bg-secondary"
        h2="Oils"
        data={products.filter(item => item.category === "oil")}
      />
      <ProductCarousalSection
        h2="Powders"
        data={products.filter(item => item.category === "powder")}
      />
      <ProductCarousalSection
        className="bg-secondary"
        h2="Tablets"
        data={products.filter(item => item.category === "tablet")}
      />
      {/* <Category /> */}
      <Benefits />
      <Featured />
      <CurrentOffer />
      <Bestseller />
      {/* <Testimonial /> */}
      <Contact />
    </main>
  )
}
