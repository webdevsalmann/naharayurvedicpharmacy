import Featured from "./featured";
import Bestseller from "./bestseller";
import Contact from "@/components/layouts/contact/contact";
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
        h2="Natural Wellness Pills for a Balanced Life"
        p="Experience the healing power of nature in easy-to-take pills, formulated to support your health and well-being."
        data={products.filter(item => item.category === "pill")}
      />
      <ProductCarousalSection
        className="bg-secondary"
        h2="Pure Ayurvedic Oils for Holistic Healing"
        p="Discover our range of therapeutic oils crafted from natural ingredients to rejuvenate your body, mind, and spirit."
        data={products.filter(item => item.category === "oil")}
      />
      <ProductCarousalSection
        h2="Traditional Ayurvedic Powders for Optimal Health"
        p="Embrace the wisdom of Ayurveda with our pure, finely ground powders for a natural approach to wellness."
        data={products.filter(item => item.category === "powder")}
      />
      <ProductCarousalSection
        className="bg-secondary"
        h2="Herbal Tablets for Daily Vitality"
        p="Boost your health with our potent herbal tablets, designed to deliver essential nutrients and support overall wellness."
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
