// pages/about/team.tsx
export default function TeamPage() {
  const teamMembers = [
    {
      name: "Yau-Meng Wong",
      title: "Director",
      image: "/team/yaumengwong.jpg",
    },
    {
      name: "Thomas Gansa",
      title: "Deputy Director",
      image: "/team/hillel-ehrenreich.jpg",
    },
    {
      name: "Rohan Subrmani",
      title: "Director of Governance Programs",
      image: "/team/kevin-wei.jpg",
    },
    {
      name: "Sweta Karlekar",
      title: "Director of Technical Programs",
      image: "/team/ryan-kaufman.jpg",
    },
    {
      name: "Josh Ying",
      title: "Policy Fellowship Lead Coach",
      image: "/team/carson-ezell.jpg",
    },
    {
      name: "Ziwei Gong",
      title: "Technical Fellowship Lead Coach",
      image: "/team/jj-andrade.jpg",
    },
    {
      name: "Rod Moshtagi",
      title: "Workshop Lead",
      image: "/team/rod-moshtagi.jpg",
    },
    {
      name: "Romeo Dean",
      title: "AI Governance Strategy Lead",
      image: "/team/romeo-dean.jpg",
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Header */}
        <h1 className="text-[#023a87] text-5xl font-light text-center mb-4">
          Our Team
        </h1>
        
        <p className="text-center text-gray-600 italic mb-16">
        </p>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col items-center text-center group">
              {/* Image Container */}
              <div className="mb-6 rounded-full overflow-hidden w-56 h-56 shadow-md">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Name with Executive Indicator */}
              <h3 className="text-2xl text-[#023a87] font-light mb-2">
                {member.name}
              </h3>
              
              {/* Title */}
              <p className="text-gray-600 text-lg font-light italic">
                {member.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}