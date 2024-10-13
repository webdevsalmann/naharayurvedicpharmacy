import Section, { SectionHeading } from "@/components/section/section";
import Image from "next/image";


export const history = [
    {
        id: "history1",
        descriprion: "Nahar Ayurvedic Pharmcay traces its roots back to 1984, when visionary ❝Mohan Nahar❞ embarked on a journey to revive the ancient science of Ayurveda. Inspired by a profound belief in the holistic principles of Ayurveda and a desire to make its benefits accessible to all, ❝Mohan Nahar❞ established Ayurvedic Pharmcay with a modest setup and a grand vision."
    },
    {
        id: "history2",
        descriprion: "Since then, Nahar Ayurvedic Pharmcay has flourished, evolving into a renowned name synonymous with quality and authenticity in Ayurvedic wellness. Over the years, we have achieved numerous milestones, from expanding our product range to pioneering innovative formulations that blend traditional wisdom with modern research."
    },
    {
        id: "history3",
        descriprion: "Our journey has been marked by a relentless pursuit of excellence and a deep commitment to serving our community. Each milestone reached is a testament to the dedication and passion of our team, as we continue to strive for excellence in every endeavor."
    },
]


export default function History() {
    return (
        <Section className="bg-secondary">
            <SectionHeading>
                <h2 className="no-hd">History</h2>
            </SectionHeading>

            {/* Content */}
            <div className="mt-block grid md:grid-cols-8 gap-block">
                {/* Images */}
                <div className="md:col-span-3 lg:col-span-2 md:order-2">
                    <Image
                        className="object-cover w-full object-center rounded-md"
                        width={180}
                        height={240}
                        src="/images/common/mohan-nahar.png"
                        alt="Founder Image"
                    />
                    <div className="mt-base text-center font-semibold italic">~Mohan Nahar</div>
                </div>

                {/* Details */}
                <div className="md:col-span-5 lg:col-span-6 md:order-1 space-y-base">
                    {history.map(item => (
                        <div className="mt-base md:mt-0" key={item.id}>
                            {item.descriprion}
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}
