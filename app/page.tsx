import Image from "next/image";
import Link from "next/link";
import BrainBackground from "./components/BrainBackground";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0B0F] relative overflow-hidden">
      <ScrollReveal />
      <BrainBackground />

      {/* Hero Section */}
      <section className="min-h-screen relative flex flex-col justify-center px-8 md:px-16">
        <div className="max-w-5xl">
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-light leading-tight tracking-wide">
            We empower exceptional teams in psychedelic medicine and consciousness expansion
          </h1>
        </div>
      </section>

      {/* About Section - Hidden initially, shown on scroll */}
      <section className="min-h-screen relative flex flex-col justify-center px-8 md:px-16 opacity-0 transition-opacity duration-500">
        <div className="max-w-4xl">
          <h2 className="text-white text-3xl md:text-5xl font-light leading-tight tracking-wide mb-12">
            Our Thesis
          </h2>
          <p className="text-white/80 text-xl leading-relaxed">
            Humanity faces a mounting mental health crisis that cannot be properly addressed within the framework of existing treatment options. 

            This shortage of solutions applies more broadly to an unending number of conditions affected by the central nervous system.

            The resurgence of interest in psychedelic therapies, combined with recent breakthroughs in precision neuromedicine and machine learning, represents an imminent, new wave of transformative mind-body optimization tools.

            Mystic Ventures thus makes targeted investments in early-stage companies at the intersection of biotechnology, AI, and longevity, while ultimately aiming to elevate concsciousness at scale.
          </p>
        </div>
      </section>

      {/* Portfolio Section - Hidden initially, shown on scroll */}
      <section className="min-h-screen relative flex flex-col justify-center px-8 md:px-16 opacity-0 transition-opacity duration-500">
        <div className="max-w-4xl">
          <h2 className="text-white text-3xl md:text-5xl font-light leading-tight tracking-wide mb-12">
            Portfolio Focus
          </h2>
          <div className="grid gap-16">
            <div>
              <h3 className="text-white text-2xl font-light mb-4">Pharmaceuticals</h3>
              <p className="text-white/80 text-xl">Novel compounds and therapeutic applications</p>
            </div>
            <div>
              <h3 className="text-white text-2xl font-light mb-4">Clinical Infrastructure</h3>
              <p className="text-white/80 text-xl">Platforms enabling therapeutic delivery</p>
            </div>
            <div>
              <h3 className="text-white text-2xl font-light mb-4">Digital Therapeutics</h3>
              <p className="text-white/80 text-xl">Technology-enabled therapeutic experiences</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Hidden initially, shown on scroll */}
      <section className="min-h-screen relative flex flex-col justify-center px-8 md:px-16 opacity-0 transition-opacity duration-500">
        <div className="max-w-4xl">
          <h2 className="text-white text-3xl md:text-5xl font-light leading-tight tracking-wide mb-12">
            Building the Future of Mental Healthcare
          </h2>
          <p className="text-white/80 text-xl mb-12">
            If you're a founder working on innovative solutions in psychedelic medicine or consciousness expansion, 
            we'd love to hear from you.
          </p>
          <Link 
            href="/contact"
            className="text-white text-xl font-light underline underline-offset-8 hover:text-white/80 transition-colors"
          >
            Get in Touch →
          </Link>
        </div>
      </section>
    </div>
  );
}
