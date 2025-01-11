export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-light tracking-tight text-[#023a87] sm:text-6xl">
              Research by Columbia students on catastrophic risks from advanced AI
            </h1>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://forms.gle/rXCzHmk3FeYBGHMLA"
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
              Managing risks from advanced artificial intelligence is one of the most important problems of our time
              <a href="#" className="text-[#A3D9EA] hover:underline align-super text-sm">¹</a>. 
              We are a community of technical and policy researchers at Columbia aimed at reducing these risks and steering 
              the trajectory of AI development for the better.
            </p>
          </div>

          {/* Reading Groups */}
          <div className="space-y-8">
            <div className="prose prose-lg">
              <p className="text-lg leading-relaxed text-gray-600">
                We run a semester-long introductory technical reading group on AI safety research, covering topics like 
                neural network interpretability<a href="#" className="text-[#A3D9EA] hover:underline align-super text-sm">¹</a>, 
                learning from human feedback<a href="#" className="text-[#A3D9EA] hover:underline align-super text-sm">²</a>, 
                goal misgeneralization in reinforcement learning agents<a href="#" className="text-[#A3D9EA] hover:underline align-super text-sm">³</a>, 
                eliciting latent knowledge<a href="#" className="text-[#A3D9EA] hover:underline align-super text-sm">⁴</a>, 
                and evaluating dangerous capabilities in models<a href="#" className="text-[#A3D9EA] hover:underline align-super text-sm">⁵</a>.
              </p>
            </div>

            <div className="prose prose-lg">
              <p className="text-lg leading-relaxed text-gray-600">
                We also run an introductory AI policy reading group, where we discuss core strategic issues 
                posed by the development of transformative AI systems.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-24">
            <a
              href="https://forms.gle/rXCzHmk3FeYBGHMLA"
              className="group inline-flex items-center gap-x-2 text-base font-semibold text-[#023a87] hover:text-[#A3D9EA] transition-colors"
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

