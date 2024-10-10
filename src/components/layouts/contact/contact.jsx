import Section from "@/components/section/section";
import FormBox from "./form";

export default function Contact({ className, heading, subTitle }) {
    return (
        <Section className={className}>
            <div className="section-wrapper relative grid md:grid-cols-2 gap-block">
                <div className="">
                    <h2 className="text-left">
                        {heading ? heading : "Get In Touch"}
                    </h2>

                    <p className="mb-base">
                        {subTitle || 'Reach out to us for any inquiries or assistance'}
                    </p>

                    <FormBox />
                </div>

                {/* Add Section */}
                <div className="size-full aspect-square rounded-md overflow-hidden border">
                    <iframe className="size-full" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3724.101034258179!2d72.892056!3d21.028643!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be057ca14ef9443%3A0x392225f85c2145e8!2sNahar%20Ayurvedic%20Pharmacy!5e0!3m2!1sen!2sin!4v1713750915966!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Nahar Ayurvedic Pharmacy Shop Map" />
                </div>
            </div>
        </Section >
    )
}
