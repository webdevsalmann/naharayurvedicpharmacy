import TeamMemberCard from "@/components/cards/TeamMemberCard";
import { teamMemberInformation } from "@/lib/cms/about";

export default function Team() {
  return (
    <section>
      <h2>Meet Our team</h2>
      <p className="mx-auto md:w-2/3 md:text-center">Meet the passionate individuals who drive the vision and mission of Nahar Ayurvedics forward. Our team is comprised of dedicated professionals with diverse backgrounds and expertise, united by a shared commitment to promoting holistic wellness through Ayurveda.</p>

      {/* Content */}
      <div className="mt-block grid md:grid-cols-3 gap-base">
        {teamMemberInformation.map(item=>(
          <TeamMemberCard data={item} key={item.id}/>
        ))}
      </div>
    </section>
  )
}
