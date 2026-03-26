import { CheckCircle, BookOpen, Globe, Users, Award, Zap, Heart, FileText } from "lucide-react";
import { useCms } from "@/contexts/CmsContext";
import RichText from "@/components/RichText";

export default function Services() {
  const { content } = useCms();
  const services = content.services;
  const page = content.servicesPage;
  const g = content.global;
  const icons = [BookOpen, Globe, Users, Award, FileText, Globe, Zap, Heart, Award, Users, Globe, Heart];

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

      {/* All Services */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = icons[index % icons.length];
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-golden hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-golden/10 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-golden to-yellow-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                      <Icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-950 mb-3">{service.title}</h3>
                    <RichText as="p" className="text-gray-600 mb-4 leading-relaxed" text={service.description} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 sm:py-20 md:py-24 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-950 mb-12 sm:mb-16 text-center">
            {page.categoriesTitle} <span className="bg-gradient-to-r from-golden to-yellow-500 bg-clip-text text-transparent">{page.categoriesHighlight}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {page.categories.map((category) => (
              <div key={category.id} className="bg-white rounded-2xl p-8 sm:p-10 border-l-4 border-golden shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold text-blue-950 mb-6">{category.title}</h3>
                <ul className="space-y-4">
                  {category.items.map((item) => (
                    <li key={item} className="flex gap-3 items-start">
                      <CheckCircle size={24} className="text-golden flex-shrink-0 mt-1" />
                      <RichText as="span" className="text-gray-700 font-medium" text={item} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
            className="inline-flex items-center gap-2 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-golden to-yellow-500 text-blue-950 font-bold rounded-xl hover:shadow-2xl transition-all transform hover:scale-105 text-sm sm:text-base shadow-lg"
          >
            {page.ctaButton}
          </a>
        </div>
      </section>
    </div>
  );
}
