import Section, { SectionBody, SectionHeading } from "@/components/section/section";
import ProductCarousal from "../other/product-carousal";

export default function ProductCarousalSection({
  className,
  h2,
  p,
  data,
}) {
  return (
    <Section className={className} >
      <SectionHeading className="md:text-left md:w-full xl:w-full">
        {h2 && <h2>{h2}</h2>}
        {p && <p>{p}</p>}
      </SectionHeading>

      <SectionBody>
        <ProductCarousal data={data} />
      </SectionBody>
    </Section>
  )
}
