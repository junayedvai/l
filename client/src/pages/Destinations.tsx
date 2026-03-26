import { useState } from "react";
import { ChevronDown, Globe, Users, Award } from "lucide-react";
import { useCms } from "@/contexts/CmsContext";
import RichText from "@/components/RichText";

export default function Destinations() {
  const [expandedCountry, setExpandedCountry] = useState<string | null>(null);
  const { content } = useCms();
  const countries = content.destinations;
  const page = content.destinationsPage;
  const g = content.global;

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-blue-950 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-golden rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              {page.heroTitle} <span className="bg-gradient-to-r from-golden to-yellow-500 bg-clip-text text-transparent">{page.heroHighlight}</span>
            </h1>
            <RichText as="p" className="text-base sm:text-lg text-gray-200 leading-relaxed" text={page.heroSubtitle} />
          </div>
        </div>
      </section>

      {/* Countries Grid - Premium Cards */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {countries.map((country) => (
              <div
                key={country.name}
                className="group bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-golden hover:shadow-2xl transition-all duration-300"
              >
                {/* Card Header */}
                <div className="bg-gradient-to-br from-blue-950 to-blue-900 p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-golden/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-6xl">{country.flag}</span>
                      <h3 className="text-3xl font-bold">{country.name}</h3>
                    </div>
                    <RichText as="p" className="text-gray-200 text-sm leading-relaxed" text={country.shortDescription} />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-8 space-y-6">
                  {/* Highlights */}
                  <div className="flex flex-wrap gap-3">
                    {country.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="text-sm font-semibold bg-blue-50 text-blue-950 px-4 py-2 rounded-full border-2 border-golden"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Expandable Content */}
                  {expandedCountry === country.name && (
                    <div className="p-6 bg-blue-50 rounded-xl border-l-4 border-golden">
                      <RichText as="p" className="text-gray-700 leading-relaxed" text={country.fullDescription} />
                    </div>
                  )}

                  {/* Explore More Button */}
                  <button
                    onClick={() =>
                      setExpandedCountry(
                        expandedCountry === country.name ? null : country.name
                      )
                    }
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-golden to-yellow-500 text-blue-950 font-bold rounded-xl hover:shadow-lg transition-all group/btn"
                  >
                    {expandedCountry === country.name ? "Show Less" : "Explore More"}
                    <ChevronDown
                      size={20}
                      className={`transition-transform ${
                        expandedCountry === country.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Study Abroad */}
      <section className="py-16 sm:py-20 md:py-24 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-950 mb-12 sm:mb-16 text-center">
            {page.whyTitle} <span className="bg-gradient-to-r from-golden to-yellow-500 bg-clip-text text-transparent">{page.whyHighlight}</span>?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {page.whyCards.map((card, index) => {
              const Icon = [Globe, Users, Award][index % 3];
              return (
                <div key={card.id} className="group bg-white rounded-2xl p-8 text-center border-2 border-gray-100 hover:border-golden hover:shadow-xl transition-all relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-golden/10 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-golden to-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                      <Icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-950 mb-3">{card.title}</h3>
                    <RichText as="p" className="text-gray-600 leading-relaxed" text={card.description} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-r from-blue-950 to-black text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
            {page.ctaTitle}
          </h2>
          <RichText as="p" className="text-base sm:text-lg text-gray-200 mb-8 sm:mb-10" text={page.ctaSubtitle} />
          <a
            href={g.registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-golden to-yellow-500 text-blue-950 font-bold rounded-xl hover:shadow-2xl transition-all transform hover:scale-105 shadow-lg"
          >
            Get Counseling
          </a>
        </div>
      </section>
    </div>
  );
}
