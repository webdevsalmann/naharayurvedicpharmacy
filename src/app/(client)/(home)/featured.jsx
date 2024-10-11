import FeatureCard from "@/components/card/feature-card";
import Section, { SectionBody, SectionHeading } from "@/components/section/section";
import { products } from "@/lib/data/database";

export default function Featured() {
    return (
        <div className="bg-secondary">
            <Section className="bg-[url('/featured.svg')] bg-center bg-no-repeat bg-cover">
                <SectionHeading>
                    <h2>Featured Products Handpicked for You</h2>
                    <p>Discover our carefully selected products, showcasing the best of Ayurveda to support your journey to wellness and vitality.</p>
                </SectionHeading>

                <SectionBody>
                    <div className="grid gap-xs sm:gap-base grid-cols-2">
                        {products.slice(0, 4).map(item => (
                            <FeatureCard data={item} key={item.id + "HomeFeatureCard"} />
                        ))}
                    </div>
                </SectionBody>
            </Section>
        </div>
    )
}
