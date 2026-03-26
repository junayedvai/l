import { CheckCircle, Users, Globe, Award } from "lucide-react";
import { Link } from "wouter";
import { useCms } from "@/contexts/CmsContext";
import RichText from "@/components/RichText";

export default function About() {
  const { content } = useCms();
  const about = content.about;
  const g = content.global;
  const values = about.values;
  const whyChooseUs = about.whyChooseUs;
  const icons = [CheckCircle, Users, Globe, Award];

  return (
    <div className="bg-off-white">
      {/* Hero Section */}
      <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-br from-light-golden to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6">
              {about.hero.title} <span className="text-golden">{about.hero.titleHighlight}</span>
            </h1>
            <RichText as="p" className="text-sm sm:text-base md:text-lg text-gray leading-relaxed" text={about.hero.subtitle} />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-8 sm:py-10 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            <div className="bg-gradient-to-br from-golden to-dark-golden rounded-xl p-6 sm:p-8 text-black">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Mission</h2>
              <RichText as="p" className="text-sm sm:text-base md:text-lg leading-relaxed" text={about.mission} />
            </div>
            <div className="bg-gradient-to-br from-light-golden to-golden rounded-xl p-6 sm:p-8 text-black">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Vision</h2>
              <RichText as="p" className="text-sm sm:text-base md:text-lg leading-relaxed" text={about.vision} />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-8 sm:py-10 md:py-12 bg-light-golden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
              Our <span className="text-golden">Core Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {values.map((value, index) => {
              const Icon = icons[index % icons.length];
              return (
                <div key={index} className="bg-white rounded-xl p-6 sm:p-8 text-center hover:shadow-lg transition-shadow border-2 border-golden">
                  <div className="w-14 sm:w-16 h-14 sm:h-16 bg-gradient-to-br from-golden to-dark-golden rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3">{value.title}</h3>
                  <RichText as="p" className="text-sm sm:text-base text-gray" text={value.description} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-8 sm:py-10 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8 sm:mb-12 text-center">
              {about.whyChooseTitle} <span className="text-golden">{about.whyChooseHighlight}</span>?
            </h2>

            <div className="space-y-6 sm:space-y-8">
              {whyChooseUs.map((item, index) => (
              <div className="flex gap-4 sm:gap-6" key={item.id}>
                <div className="flex-shrink-0">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-golden to-dark-golden rounded-lg flex items-center justify-center text-black font-bold text-lg sm:text-xl">{index + 1}</div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-black mb-2">{item.title}</h3>
                  <RichText as="p" className="text-sm sm:text-base text-gray" text={item.description} />
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-golden to-dark-golden text-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            {about.ctaTitle}
          </h2>
          <a
            href={g.registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-black text-white font-bold rounded-lg hover:bg-opacity-90 transition-all text-sm sm:text-base"
          >
            {about.ctaButton}
          </a>
        </div>
      </section>
    </div>
  );
}
