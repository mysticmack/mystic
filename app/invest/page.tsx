'use client';

import PageLayout from '../components/PageLayout';

export default function Invest() {
  return (
    <PageLayout>
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-light text-white mb-8 tracking-wide">Invest</h1>
          
          <div className="space-y-16">
            {/* Investment Info */}
            <section>
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-lg">
                <h2 className="text-2xl text-white mb-6 font-light">Join Our Mission</h2>
                <p className="text-white/80 text-lg mb-8 leading-relaxed">
                  We're building the future of mental healthcare through innovative psychedelic medicine and consciousness expansion technologies. Join us in this transformative journey.
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg text-white/60 mb-2 font-light">Investment Platform</h3>
                    <a 
                      href="https://venture.angellist.com/v/back/mystic-ventures-2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-8 py-4 bg-white/10 hover:bg-white/20 text-white text-xl font-light rounded-lg transition-colors"
                    >
                      Invest on AngelList →
                    </a>
                  </div>
                  <div>
                    <h3 className="text-lg text-white/60 mb-2 font-light">Questions?</h3>
                    <a 
                      href="mailto:invest@mystic.ventures" 
                      className="text-white text-xl hover:text-white/80 transition-colors"
                    >
                      invest@mystic.ventures
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 