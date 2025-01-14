export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-light tracking-tight text-[#023a87] sm:text-6xl">
              Columbia AI Alignment Club
            </h1>
            <h2 className="text-4xl font-light tracking-tight text-[#023a87] sm:text-6xl">
              Research by Columbia students on catastrophic risks from advanced AI
            </h2>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://forms.gle/fa2dFsV5W8VSDvoT8"
                className="text-sm font-semibold text-[#023a87] border-[#023a87] border px-8 py-3 hover:bg-[#023a87] hover:text-white transition-all"
              >
                Join our mailing list <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-3xl px-6 pb-24">
        <div className="space-y-16">
          {/* Introduction */}
          <div className="prose prose-lg">
            <p className="text-lg leading-relaxed text-gray-600">
            We think that reducing risks from advanced artificial intelligence may be one of the most important problems of our time. We also think that it’s an interesting and exciting problem, with open opportunities for many more researchers to make progress on it.             
              We are a community of technical and policy researchers at Columbia aimed at reducing these risks and steering 
              the trajectory of AI development for the better.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
            CAIAC supports undergraduate and graduate students in conducting research relevant to reducing risks from advanced AI.

            </p>
            <p className="text-lg leading-relaxed text-gray-600">
            We also run a semester-long introductory reading group on AI safety, including both a <a href="/get_involved/technical-fellowship" className="text-[#4A8A99] hover:underline">technical machine learning track</a>,   and a <a href="/get_involved/policy-fellowship" className="text-[#4A8A99] hover:underline">policy track</a>.

            </p>
          
          </div>



          {/* CTA Section */}
          <div className="mt-24">
            <a
              href="https://forms.gle/fa2dFsV5W8VSDvoT8"
              className="group inline-flex items-center gap-x-2 text-base font-semibold text-[#023a87] hover:text-[#4A8A99] transition-colors"
            >
              Join our mailing list
              <span aria-hidden="true" className="block transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

