// components/Footer.jsx
export default function Footer() {
    return (
      <footer className="bg-[#023a87] text-white">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="flex flex-col items-center text-center">
            <img 
              src="/logo.svg" 
              alt="Columbia AI Safety"
              className="h-12 w-auto mb-6 brightness-0 invert" // Makes the logo white
            />
            <p className="text-white hover:text-gray-300 transition-colors">
              Columbia University&apos;s student organization dedicated to AI safety research and education.
            </p>
            <div className="space-y-2">
              <a 
                href="/signup" 
                className="text-white hover:text-gray-300 transition-colors"
              >
                Join our mailing list →
              </a>
              <p className="text-gray-300 max-w-md mb-6">
                <a 
                  href="mailto:yw3809@columbia.edu" 
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  Contact Us
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }