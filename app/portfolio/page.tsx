'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageLayout from '../components/PageLayout';

// Portfolio data by category
const portfolioData = {
  pharmaceuticals: {
    title: "Pharmaceuticals",
    description: "Pioneering novel compounds and therapeutic applications in psychedelic medicine.",
    companies: [
      { 
        name: "Freedom Biosciences", 
        description: "Freedom Biosciences is a clinical-stage biotechnology company developing next-generation ketamine and psychedelic-based therapeutics for mental health disorders, with a focus on treatment-resistant depression. Their lead program, FREE001, has shown promise in extending the antidepressant effects of ketamine treatment from 2-7 days to 14-21 days, potentially offering a more accessible and effective alternative for millions of patients suffering from debilitating mental health issues.",
        logo: "/company-logos/freedombiologo.png"
      },
      { 
        name: "Stillmind Therapeutics", 
        description: "Stillmind Therapeutics is a biotechnology company developing precision medicines for brain disorders, with an initial focus on bipolar disorder. By employing AI, automation, and biology-first principles, they aim to enhance patient care by targeting molecular subtypes, potentially revolutionizing treatment approaches for complex neuropsychiatric conditions.",
        logo: "/company-logos/stillmind.png"
      },
      { name: "Spiritus Bioscience", description: "Spiritus Bioscience is a biotechnology startup focused on improving patient experience through innovative drug delivery methods for mental health and neuropsychiatric disorders. Their proprietary, patented technology aims to enhance existing strategies of drug delivery, potentially leading to safer and more efficient treatments with fewer adverse effects for some of the most pressing mental health issues of our time.", logo: "/company-logos/spiritus.png" },
      { 
        name: "2A Biosciences", 
        description: "2A Biosciences is a pre-seed stage biotechnology company founded in 2023, focusing on harnessing the serotonin system to combat inflammatory diseases. Their innovative approach to drug discovery in the serotonergic space has the potential to develop novel treatments for a range of inflammatory conditions, addressing a critical need in the pharmaceutical industry.",
        logo: "/company-logos/2a-biosciences.png"
      },
      { 
        name: "Solvonis Therapeutics", 
        description: "Solvonis Therapeutics is a UK-based biotechnology company developing novel therapeutics for mental health and substance use disorders, with a primary focus on post-traumatic stress disorder (PTSD) and alcohol use disorder (AUD). Their innovative approach addresses the urgent need for effective treatments in these areas, potentially bringing new hope to millions of patients worldwide who are currently underserved by existing therapies.",
        logo: "/company-logos/solvonis.png"
      },
      { 
        name: "Lykos Therapeutics", 
        description: "Lykos Therapeutics is a pioneering biotechnology company developing MDMA-assisted therapy for the treatment of post-traumatic stress disorder (PTSD) in adults. Their innovative approach has the potential to transform mental healthcare by providing a novel and effective treatment option for individuals suffering from PTSD, addressing a significant unmet need in the field of mental health.",
        logo: "/company-logos/lykos.svg"
      },
      { 
        name: "Psilera", 
        description: "Psilera is a biotechnology company developing next-generation neuroplastogens and psychedelic-inspired therapeutics for neurological conditions such as dementia, addiction, and mental health disorders. Their innovative approach, which includes a proprietary drug screening platform and novel compounds designed to provide therapeutic benefits without hallucinogenic effects, has the potential to revolutionize treatments for millions of patients suffering from these challenging conditions.",
        logo: "/company-logos/psilera.png"
      },
      { 
        name: "Xylo Bio", 
        description: "Xylo Bio is pioneering the development of neuroplastogens, a novel class of small molecule therapies designed to rewire neural circuits and restore brain function without hallucinatory effects. By leveraging advanced neuroscience and a computational drug discovery platform, Xylo Bio aims to revolutionize the treatment of psychiatric and neurological disorders, addressing critical unmet needs and potentially transforming the lives of patients worldwide.",
        logo: "/company-logos/xylo.png"
      },
      { 
        name: "Mindstate Design Labs", 
        description: "Mindstate Design Labs is a pioneering biotechnology company that leverages AI and machine learning to develop next-generation psychedelic-inspired therapeutics, aiming to transform mental health treatments by precision-designing emotional and cognitive states. This innovative approach is crucial as it addresses the growing mental health crisis by offering targeted and reliable solutions, moving beyond traditional psychedelics to create customizable states of consciousness that can potentially treat a wide range of psychological afflictions.",
        logo: "/company-logos/mindstate.png"
      },
      { 
        name: "Equulus Therapeutics", 
        description: "Equulus Therapeutics is a pioneering neuroscience biotech company dedicated to transforming the treatment landscape for central nervous system (CNS) disorders, with a focus on developing innovative therapeutics for psychiatric, neurologic, and addiction disorders. Their groundbreaking approach, which includes the development of a non-hallucinogenic analog of ibogaine, aims to address the pressing need for more effective and safer treatments in mental health care, potentially revolutionizing how CNS conditions are managed and improving patients' quality of life.",
        logo: "/company-logos/equulus.png"
      },
      { 
        name: "Lophora", 
        description: "Lophora is a clinical-stage CNS drug discovery company pioneering the development of novel, rapid-acting medicines for neurological and psychiatric disorders, leveraging proprietary psychedelic-inspired compounds like LPH-5 to address unmet needs in conditions such as depression and PTSD. By harnessing the therapeutic potential of these next-generation compounds, Lophora aims to revolutionize treatment options for millions worldwide who do not respond to current therapies, offering a promising pathway to improved patient outcomes.",
        logo: "/company-logos/lophora.png"
      },
      { 
        name: "Next Life Sciences", 
        description: "NEXT Life Sciences is developing Plan A, a revolutionary male contraceptive solution that is non-hormonal, long-lasting, and reversible. This groundbreaking technology aims to address the significant unmet need for effective male birth control options, potentially transforming family planning and giving men greater control over their reproductive choices.",
        logo: "/company-logos/next.png"
      },
    ]
  },
  clinicalInfrastructure: {
    title: "Clinical Infrastructure",
    description: "Building the platforms and infrastructure to deliver safe and effective psychedelic therapies.",
    companies: [
      { 
        name: "Journey Clinical", 
        description: "Journey Clinical is a leading healthtech platform that empowers licensed therapists to offer Psychedelic-Assisted Psychotherapy, starting with Ketamine-Assisted Psychotherapy (KAP), through a collaborative care model. By providing therapists with the necessary infrastructure, medical support, and resources, Journey Clinical is expanding access to innovative mental health treatments, addressing the growing mental health crisis and improving clinical outcomes for patients struggling with depression and anxiety.",
        logo: "/company-logos/journey.png"
      },
      { 
        name: "Heading Health", 
        description: "Heading Health is a Texas-based mental health platform offering innovative treatments such as ketamine therapy and telepsychiatry across its clinics in Austin, Dallas, and San Antonio. By providing personalized care and leveraging cutting-edge therapies, Heading Health is improving access to effective mental health treatments for conditions like depression, anxiety, and PTSD, making a significant impact in the Texas healthcare landscape.",
        logo: "/company-logos/heading.png"
      },
      { 
        name: "Enthea", 
        description: "Enthea is a pioneering health-benefit administrator that offers innovative, evidence-based psychedelic-assisted therapies as a workplace benefit, addressing the mental health crisis by providing affordable access to treatments like ketamine-assisted therapy. By integrating these therapies into employer-sponsored health plans, Enthea aims to improve employee well-being, increase productivity, and reduce healthcare costs, ultimately transforming the way mental health is approached in the workplace.",
        logo: "/company-logos/enthea.png"
      },
      { 
        name: "Maya Health", 
        description: "Maya Health is a software platform designed to help psychedelic practitioners manage their practice, measure progress, and illustrate health outcomes, enabling them to optimize services and advance psychedelic healthcare. By providing tools for tracking and demonstrating clinical benefits, Maya plays a crucial role in supporting the growth of psychedelic medicine, which has the potential to transform mental healthcare on a global scale.",
        logo: "/company-logos/maya.png"
      },
    ]
  },
  neurotechnology: {
    title: "Neurotechnology",
    description: "Creating cutting-edge technologies to understand and enhance consciousness.",
    companies: [
      { 
        name: "Sama Therapeutics", 
        description: "Sama Therapeutics is a pioneering company in AI-powered precision neuropsychiatry, leveraging their proprietary iMAGiNE™ platform to synthesize and validate predictive biomarkers for cognitive, affective, interoceptive, and substance use disorders. By integrating generative AI with computational life sciences, Sama Therapeutics is revolutionizing the approach to psychiatric and neurological medicine, potentially accelerating the development of personalized treatments and improving outcomes for patients with complex brain disorders.",
        logo: "/company-logos/sama.png"
      },
    ]
  },
  consumer: {
    title: "Consumer",
    description: "Building consumer products for mental wellness and consciousness expansion.",
    companies: [
      { 
        name: "Supermush", 
        description: "SuperMush is a consumer lifestyle brand specializing in functional mushroom-based supplements designed to support mental wellness, energy, creativity, and immune health, catering to the growing demand for natural and holistic health solutions. By offering innovative, non-psychoactive products, SuperMush empowers individuals to prioritize their well-being while contributing to a broader shift towards sustainable and natural wellness practices, making it an important player in the rapidly expanding functional mushroom market.",
        logo: "/company-logos/supermush.png"
      },
      { 
        name: "Hatch", 
        description: "Hatch is a wellness company that offers an all-natural stress relief spray, leveraging a proprietary blend of botanicals like Magnolia Bark, Valerian Root, and Lemon Balm to promote relaxation and reduce stress without prescription or side effects. This innovative product addresses the growing demand for natural stress management solutions, providing users with a fast-acting and portable tool to navigate stressful situations, making it an important addition to the modern wellness landscape.",
        logo: "/company-logos/hatch.png"
      },
      { 
        name: "Bia Neuroscience", 
        description: "Bía Neuroscience has developed an innovative smart sleep mask that utilizes neurofeedback technology and neural music to optimize sleep quality, helping users fall asleep faster and achieve deeper, more restorative rest. By leveraging cutting-edge sensor technology and proprietary algorithms, Bía's solution addresses the critical need for improved sleep in our modern world, potentially revolutionizing how we approach rest and overall well-being.",
        logo: "/company-logos/bia.png"
      },
      { 
        name: "Psychedelic Water", 
        description: "Psychedelic Water is a pioneering brand offering a line of non-alcoholic, kava-based beverages designed to provide a mild mood boost and relaxation, appealing to those seeking alternatives to alcohol and traditional psychedelics. By leveraging natural ingredients and a unique formulation, Psychedelic Water aims to democratize access to mood-enhancing products, contributing to a broader cultural shift towards healthier social habits and mental wellness.",
        logo: "/company-logos/psychedelic-water.png"
      },
      { 
        name: "Breathwrk", 
        description: "Breathwrk offers a health and performance app providing science-backed breathing exercises to alleviate anxiety, promote sleep, increase energy, and enhance athletic performance, addressing critical wellness needs through accessible and effective techniques. By leveraging the transformative power of breathing, Breathwrk empowers users to improve their mental and physical well-being, making it a significant player in the digital health and wellness sector.",
        logo: "/company-logos/breathwrk.png"
      },
      { 
        name: "Nana Health", 
        description: "Nana Health is an innovative platform that empowers individuals to become their own healers by providing personalized roadmaps for mental, emotional, spiritual, and physical wellness. By integrating self-awareness practices, lifestyle recommendations, ancestral wisdom, community support, and legally approved psychoactive substances, Nana Health addresses the growing need for holistic approaches to health and well-being in our modern world.",
        logo: "/company-logos/nana.svg"
      },
    ]
  },
  manufacturing: {
    title: "Manufacturing",
    description: "Scaling the production of compounds and therapeutics for the industry.",
    companies: [
      { 
        name: "CB Therapeutics", 
        description: "CB Therapeutics is a pioneering biotechnology company that utilizes precision fermentation and synthetic biology to produce high-value molecules, compounds, and rare ingredients for advancing neuroscience and mental healthcare. Their innovative approach enables the sustainable and efficient production of pharmaceutical-grade cannabinoids, tryptamines, and other therapeutic compounds, potentially revolutionizing the development of treatments for depression, PTSD, addiction, and other challenging mental health disorders.",
        logo: "/company-logos/cb.png"
      },
      { 
        name: "Sempera Organics", 
        description: "Sempera Organics is a pioneering biotechnology company that unlocks the potential of fungi to enhance human wellness by providing high-quality, organic mushroom ingredients to various industries, leveraging advanced cultivation methods and a vertically integrated supply chain to ensure reliability and quality. By focusing on bioactive compounds and condition-specific solutions, Sempera Organics plays a crucial role in meeting the growing demand for functional mushrooms, contributing to a sustainable and scalable approach to wellness that addresses pressing health challenges.",
        logo: "/company-logos/sempera.png"
      },
    ]
  },
  digitalTherapeutics: {
    title: "Digital Therapeutics",
    description: "Creating technology-enabled therapeutic experiences and applications.",
    companies: [
      { 
        name: "Firefly VR", 
        description: "FireflyVR is a pioneering company that develops immersive virtual reality applications to enhance mental health treatments, particularly by improving outcomes for therapies like ketamine, through clinically-informed and engaging experiences. By leveraging VR technology, FireflyVR addresses critical gaps in mental healthcare, offering a promising solution to reduce anxiety and improve treatment efficacy, which is crucial for advancing patient care and well-being.",
        logo: "/company-logos/firefly.png"
      },
      { 
        name: "Soundself", 
        description: "SoundSelf is a pioneering digital therapeutics company that combines immersive technology with ancient spiritual practices to create transformative mental health solutions, offering a scalable and accessible alternative to traditional treatments for conditions like depression, anxiety, and PTSD. By leveraging biofeedback systems and psychedelic-like experiences without drugs, SoundSelf is revolutionizing mental health care by providing rapid relief and enhancing the effectiveness of therapies such as ketamine-assisted treatment, addressing a critical need in a market struggling to meet demand for effective mental health interventions.",
        logo: "/company-logos/soundself.png"
      },
    ]
  },
  retreats: {
    title: "Retreats",
    description: "Providing safe and transformative therapeutic experiences in group settings.",
    companies: [
      { 
        name: "Wake Network", 
        description: "Wake Network is a retreat and biotechnology company that leverages clinical research, technology, and mycology to advance the field of fungi and plant-based medicine, focusing on innovative treatments for mental health conditions such as PTSD and depression. By integrating ancient healing traditions with modern science, Wake Network is poised to revolutionize mental wellness, offering a promising approach to addressing the growing need for holistic and effective mental health solutions.",
        logo: "/company-logos/wake.png"
      },
      { 
        name: "Holos", 
        description: "Holos Global is a pioneering retreat center and community that fosters holistic living and transformational journeys, emphasizing connection with self, community, and nature through immersive practices and regenerative stewardship. By promoting integrated wellbeing and ecological harmony, Holos Global plays a crucial role in advancing mental health and sustainable living models, contributing to a more balanced and interconnected world.",
        logo: "/company-logos/holos.png"
      },
      { 
        name: "Beckley Retreats", 
        description: "Beckley Retreats is a pioneering wellness company offering science-backed psychedelic retreats that combine psilocybin ceremonies with holistic modalities like meditation and breathwork, providing transformative experiences for personal growth and resilience. By leveraging over 25 years of research from the Beckley Foundation, Beckley Retreats sets a global standard for safe and ethical psychedelic retreats, contributing to the evolving landscape of mental health and wellness while fostering positive societal change.",
        logo: "/company-logos/beckley.png"
      },
    ]
  },
  educationMedia: {
    title: "Education & Media",
    description: "Building informational resources and educational platforms for the industry.",
    companies: [
      { 
        name: "DopaGE", 
        description: "DopaGE is a health education company that provides gamified, cloud-based learning modules designed to prevent substance-related deaths among college students. Their innovative approach to overdose prevention education is crucial, as drug overdose is the leading cause of death for GenZ and Millennial Americans, with DopaGE's platform offering engaging, evidence-based content that equips students with life-saving knowledge to recognize and respond to overdoses.",
        logo: "/company-logos/dopage.png"
      },
      { 
        name: "Doubleblind", 
        description: "DoubleBlind is a biannual print magazine and media company that provides in-depth coverage of psychedelics, exploring their intersections with mental health, social equity, environmental justice, and spirituality, offering fresh perspectives on these critical issues. By engaging diverse voices and rigorous reporting, DoubleBlind plays a crucial role in fostering informed discussions about psychedelics, contributing to a broader understanding of their potential benefits and challenges in contemporary society.",
        logo: "/company-logos/doubleblind.png"
      },
    ]
  },
  strategicOther: {
    title: "Strategic & Other",
    description: "Strategic investments in complementary technologies and services.",
    companies: [
      { 
        name: "Adamo Bioscience", 
        description: "Adamo Bioscience is revolutionizing sexual health and intimacy through its innovative Adamo Method, a scientifically-backed approach that aims to enhance sexual satisfaction, deepen emotional connections, and address sexual difficulties. By focusing on the measurable impact of human connection on healing processes, Adamo Bioscience is pioneering a new standard for optimal sexual health, potentially transforming millions of lives and relationships worldwide.",
        logo: "/company-logos/adamo.png"
      },
      { 
        name: "Stem AI", 
        description: "Stem AI aims to develop AI systems that align with human behavior, preferences, morality, and ethics. Backed by Andreessen Horowitz (a16z) with a $41 million seed round, Stem AI is co-founded by Shear and Adam Goldstein, known for founding the travel search site Hipmunk.",
        logo: "/company-logos/stem.png"
      },
      { 
        name: "Nucleus", 
        description: "Nucleus is a venture studio focused on building and supporting innovative companies in the psychedelics industry, leveraging a data-centric hub-and-spoke model to address critical infrastructure needs like data, marketing, and network platforms. By enabling the development of alternative medicines and fostering strategic partnerships, Nucleus plays a vital role in advancing the therapeutic potential of psychedelics while mitigating risks for stakeholders.",
        logo: "/company-logos/nucleus.png"
      },
    ]
  },
};

export default function Portfolio() {
  const [expandedCompany, setExpandedCompany] = useState<string | null>(null);

  const toggleExpand = (companyName: string) => {
    if (expandedCompany === companyName) {
      setExpandedCompany(null);
    } else {
      setExpandedCompany(companyName);
    }
  };

  return (
    <PageLayout>
      <div className="container mx-auto px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-light text-white mb-8 tracking-wide">Portfolio</h1>
          
          <div className="space-y-32">
            {Object.entries(portfolioData).map(([key, category]) => (
              <section key={key} id={key} className="scroll-mt-32">
                <h2 className="text-2xl md:text-4xl font-light text-white mb-6 tracking-wide">{category.title}</h2>
                <p className="text-white/80 text-xl mb-12 leading-relaxed max-w-3xl">{category.description}</p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.companies.map((company, index) => (
                    <div key={index} className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-lg">
                      {company.logo && (
                        <div className="mb-8 relative h-16 w-full">
                          <Image
                            src={company.logo}
                            alt={`${company.name} logo`}
                            fill
                            style={{ objectFit: 'contain' }}
                            className={`${
                              company.name === "Journey Clinical" 
                              ? "dark:opacity-100 dark:grayscale dark:brightness-[8] dark:contrast-[1.1]" 
                              : "dark:filter dark:brightness-0 dark:invert"
                            }`}
                            priority={index === 0}
                          />
                        </div>
                      )}
                      <h3 className="text-xl text-white mb-4 font-light">{company.name}</h3>
                      <div className="relative">
                        <p className={`text-white/70 text-lg leading-relaxed ${!expandedCompany || expandedCompany !== company.name ? 'line-clamp-3' : ''}`}>
                          {company.description}
                        </p>
                        {company.description.length > 150 && (
                          <button 
                            onClick={() => toggleExpand(company.name)}
                            className="text-white/60 hover:text-white text-lg mt-2 font-light"
                          >
                            {expandedCompany === company.name ? '← Show less' : 'Read more →'}
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-24 text-center">
            <Link 
              href="/contact" 
              className="text-white text-xl font-light underline underline-offset-8 hover:text-white/80 transition-colors"
            >
              Get in Touch →
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 