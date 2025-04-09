import React from 'react';
import Image from 'next/image';
import PageLayout from '../components/PageLayout';

// Team member data
const teamMembers = [
  {
    name: "Jeremy Gardner",
    role: "Founder & Managing Partner",
    bio: "In 2014, while attening University of Michigan, he founded the Blockchain Education Network, a global educational nonprofit. Shortly after, Jeremy started Augur, the groundbreaking decentralized prediction market platform (peak market cap—$1.35b.) He then joined Blockchain Capital, where he established himself as a VC, investing in some of the industry's most successful companies. In just over a decade, Jeremy has established himself as a pioneering, maverick founder and investor, finding success across emerging Industries, with a robust number of successful sidequests*. In 2018, Jeremy founded Ausum Ventures, a hybrid venture-hedge fund focused on the intersection of blockchain technology and social impact, raising money from the likes of Marc Andreessen, Chris Dixon, Tony Hawk, and others. In late 2021, he seized the opportunity to buy out his Investors at 4.7x MOIC so he could focus on his greatest passion, psychedelic medicine, and launch Mystic Ventures. Jeremy has been a believer and champion of psychedelics and alternatives therapies since he was young, and an enthusiastic philanthropist in this emerging field for nearly a decade. His wealth of experiences has prepared him to be a leading funder of groundbreaking space. *Sidequests include: owning epic nightclubs (e.g. Space Miami), building the largest arcade In the Carribbean, a (paused) skincare startup, producing critically-acclaimed indie films, and hiking around the world with his dog, Garbanzo.",
    imagePath: "/team/jeremy-gardner.jpg",
  },
  {
    name: "Danny Kaufman",
    role: "Investor Relations",
    bio: "In addition to overseeing Mystic IR and events, Danny is a founder of the wellness club, The Portal. Previously, Danny was the Director of Philanthropic Engagement for Burning Man. Danny holds a B.A. from Occidental College, and an MPA from the University of Washington.",
    imagePath: "/team/danny-kaufman.jpg",
  },
  {
    name: "Mack Luby",
    role: "Associate Partner",
    bio: "Mack first joined our team as a summer Intern in 2022 while earning his B.S. in Economics from Boston University. He is the co-founder of Hatch, a Mystic-incubated CPG brand for stress management.",
    imagePath: "/team/mack-luby.jpg",
  },
];

export default function Team() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-light text-white mb-8 tracking-wide">Our Team</h1>
          
          <div className="space-y-24">
            {/* Team Members */}
            <section>
              <div className="grid gap-16">
                {teamMembers.map((member, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-lg">
                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                      <div className="relative w-64 h-64 flex-shrink-0">
                        <Image
                          src={member.imagePath}
                          alt={member.name}
                          width={256}
                          height={256}
                          className="object-cover rounded-lg w-full h-full"
                          priority={index === 0}
                          quality={95}
                        />
                      </div>
                      <div className="flex-grow">
                        <h2 className="text-2xl text-white mb-2 font-light">{member.name}</h2>
                        <h3 className="text-lg text-white/60 mb-6 font-light">{member.role}</h3>
                        <p className="text-white/80 text-lg leading-relaxed">
                          {member.bio}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 