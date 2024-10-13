import Section, { SectionBody, SectionHeading } from "@/components/section/section";
import Image from "next/image";

export const overView = [
    {
        id: "overview1",
        descriprion: "Nahar Ayurvedic Pharmcay is a trusted name in the world of Ayurveda, committed to promoting holistic wellness through the ancient wisdom of Ayurvedic principles. Our mission is to harness the power of nature to nurture health and vitality in individuals, fostering a balanced and harmonious lifestyle."
    },
    {
        id: "overview2",
        descriprion: "At Nahar Ayurvedic Pharmacy, we uphold values of authenticity, integrity, and compassion in all aspects of our operations. We believe in providing high-quality Ayurvedic products and services that resonate with the essence of traditional healing while embracing modern advancements in science and technology."
    },
    {
        id: "overview3",
        descriprion: "What sets Nahar Ayurvedic Pharmacy apart is our unwavering dedication to purity and efficacy. We meticulously source the finest herbs, minerals, and natural ingredients, adhering to strict quality standards throughout the manufacturing process. Our commitment to transparency ensures that every product we offer is backed by rigorous testing and research, providing customers with the assurance they deserve."
    },
]

export default function Overview() {
    return (
        <Section>
            <SectionHeading>
                <h2 className="no-hd">Overview</h2>
            </SectionHeading>

            <SectionBody>
                <div className="relative grid md:grid-cols-2 gap-block">
                    {/* Images */}
                    <div className="sticky top-base md:relative w-full">
                        <Image
                            className="object-cover w-full object-center rounded-md"
                            width={320}
                            height={180}
                            src="/images/common/4.jpg"
                            alt="hero"
                        />
                    </div>

                    {/* Details */}
                    <div className="space-y-base">
                        {overView.map(item => (
                            <p className="" key={item.id}>
                                {item.descriprion}
                            </p>
                        ))}
                    </div>
                </div>
            </SectionBody>
        </Section>
    )
}
