const researchEntries = [
  {
    title: "Obfuscated Activations Bypass LLM Latent-Space Defenses",
    authors: [
      { name: "Luke Bailey", isPI: true },
      { name: "Alex Serrano" },
      { name: "Abhay Sheshadri" },
      { name: "Mikhail Seleznyov" },
      { name: "Jordan Taylor" },
      { name: "Erik Jenner" },
      { name: "Jacob Hilton" },
      { name: "Stephen Casper" },
      { name: "Carlos Guestrin" },
      { name: "Scott Emmons" }
    ],
    date: "December 12, 2024",
    link: "https://arxiv.org/abs/2412.01784"
  },
  {
    title: "Noise Injection Reveals Hidden Capabilities of Sandbagging Language Models",
    authors: [
      { name: "Cameron Tice" },
      { name: "Philipp Alexander Kreer" },
      { name: "Nathan Helm-Burger" },
      { name: "Prithviraj Singh Shahani", isPI: true },
      { name: "Fedor Ryzhenko" },
      { name: "Jacob Haimes" },
      { name: "Felix Hofstätter" },
      { name: "Teun van der Weij" }
    ],
    date: "December 2, 2024",
    link: "#"
  },
  {
    title: "Competition Dynamics Shape Algorithmic Phases of In-Context Learning",
    authors: [
      { name: "Core Francisco Park", isPI: true },
      { name: "Ekdeep Singh Lubana", isPI: true },
      { name: "Itamar Pres" },
      { name: "Hidenori Tanaka" }
    ],
    date: "December 1, 2024",
    link: "#"
  }
];

export default function ResearchPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
   
      <h1>
        Recent Research by CAIAC Members
      </h1>
      
      <div className="space-y-12">
        {researchEntries.map((entry, index) => (
          <div key={index} className="border-b border-gray-200 pb-12 last:border-b-0 last:pb-0">
            <div className="flex flex-col gap-3">
              <a 
                href={entry.link}
                className="text-[#023a87] hover:underline text-xl font-medium block"
              >
                {entry.title}
              </a>
              
              <div className="text-gray-700">
                {entry.authors.map((author, i) => (
                  <span key={i}>
                    {author.isPI ? <strong>{author.name}</strong> : author.name}
                    {i < entry.authors.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </div>
              
              <div className="text-gray-600">
                {entry.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}