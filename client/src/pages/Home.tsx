import { Link } from "wouter";
import { ArrowRight, BookOpen, Globe, Users, Award, Zap, Heart } from "lucide-react";
import { useCms } from "@/contexts/CmsContext";
import RichText from "@/components/RichText";

const SERVICE_ICONS = [BookOpen, Globe, Users, Award, Zap, Heart];

export default function Home() {
  const { content } = useCms();
  const { home, services, destinations, successStories, global: g } = content;
  const featuredServices = services.slice(0, 6);
  const featuredDestinations = destinations.slice(0, 5);
  const featuredStories = successStories.slice(0, 4);

  return (
    <div className="bg-white">
      {/* Hero Section - Premium */}
      <section className="relative bg-gradient-to-b from-blue-950 via-blue-900 to-black text-white overflow-hidden pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 md:pb-20">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-golden rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-golden rounded-full mix-blend-screen filter blur-3xl opacity-5"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="text-golden font-bold text-xs sm:text-sm uppercase tracking-wider bg-golden/20 px-4 sm:px-5 py-2.5 rounded-full border border-golden/30">{home.hero.badge}</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                  {home.hero.title} <span className="bg-gradient-to-r from-golden via-yellow-400 to-golden bg-clip-text text-transparent">{home.hero.titleHighlight}</span>
                </h1>
              </div>
              <RichText
                as="p"
                className="text-base sm:text-lg text-gray-100 leading-relaxed max-w-lg"
                text={home.hero.description}
              />
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a
                  href={g.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 sm:px-9 py-4 sm:py-5 bg-gradient-to-r from-golden to-yellow-500 text-blue-950 font-bold rounded-xl hover:shadow-2xl transition-all transform hover:scale-105 text-sm sm:text-base shadow-lg"
                >
                  {home.hero.ctaButton} <ArrowRight size={20} />
                </a>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 px-7 sm:px-9 py-4 sm:py-5 border-2 border-golden text-golden font-bold rounded-xl hover:bg-golden/10 transition-all text-sm sm:text-base"
                >
                  {home.hero.learnMoreButton}
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-10 border-t border-golden/20">
                {home.hero.stats.map((stat, i) => (
                  <div key={i} className="space-y-2">
                    <p className="text-3xl sm:text-4xl font-bold text-golden">{stat.value}</p>
                    <p className="text-sm text-gray-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-golden/30 to-yellow-500/30 rounded-3xl blur-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <div className="text-center px-8 space-y-4">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-golden to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <Globe size={56} className="text-blue-950" />
                    </div>
                    <div>
                      <p className="text-2xl sm:text-3xl font-bold">Study Abroad</p>
                      <p className="text-golden font-semibold mt-2">Made Simple & Accessible</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Premium */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-950">
              {home.servicesSection.title} <span className="bg-gradient-to-r from-golden to-yellow-500 bg-clip-text text-transparent">{home.servicesSection.titleHighlight}</span>
            </h2>
            <RichText as="p" className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto" text={home.servicesSection.subtitle} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => {
              const Icon = SERVICE_ICONS[index % SERVICE_ICONS.length];
              return (
                <Link key={service.id} href="/services">
                  <div className="group h-full bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-golden hover:shadow-2xl transition-all duration-300 cursor-pointer relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-golden/10 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform"></div>
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-golden to-yellow-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                        <Icon size={32} className="text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-blue-950 mb-3">{service.title}</h3>
                      <RichText as="p" className="text-gray-600 mb-6 leading-relaxed" text={service.description} />
                      <div className="flex items-center text-golden font-bold group-hover:gap-3 transition-all">
                        Explore <ArrowRight size={20} />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Study Destinations Section - Premium */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-950">
              {home.destinationsSection.title} <span className="bg-gradient-to-r from-golden to-yellow-500 bg-clip-text text-transparent">{home.destinationsSection.titleHighlight}</span>
            </h2>
            <RichText as="p" className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto" text={home.destinationsSection.subtitle} />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mb-10 sm:mb-12">
            {featuredDestinations.map((country) => (
              <Link key={country.id} href="/destinations">
                <div className="group bg-white rounded-2xl p-6 text-center border-2 border-gray-100 hover:border-golden transition-all hover:shadow-xl cursor-pointer">
                  <div className="text-5xl sm:text-6xl mb-4 transform group-hover:scale-110 transition-transform">{country.flag}</div>
                  <h3 className="text-base sm:text-lg font-bold text-blue-950 mb-2">{country.name}</h3>
                  <RichText as="p" className="text-xs sm:text-sm text-gray-600 mb-4 line-clamp-2" text={country.shortDescription} />
                  <div className="text-golden font-semibold hover:text-yellow-500 transition-colors text-sm inline-flex items-center gap-1">
                    Learn more <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/destinations" className="inline-flex items-center gap-2 px-8 sm:px-10 py-4 sm:py-5 bg-blue-950 text-white font-bold rounded-xl hover:bg-black transition-all text-sm sm:text-base shadow-lg hover:shadow-xl">
              Show All Destinations <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories Section - Premium */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-golden rounded-full mix-blend-screen filter blur-3xl opacity-5"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 sm:mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              {home.successSection.title} <span className="bg-gradient-to-r from-golden to-yellow-500 bg-clip-text text-transparent">{home.successSection.titleHighlight}</span>
            </h2>
            <RichText as="p" className="text-base sm:text-lg text-gray-200 max-w-3xl mx-auto" text={home.successSection.subtitle} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredStories.map((student) => (
              <div key={student.id} className="group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all">
                <div className="h-56 bg-gradient-to-br from-golden to-yellow-500 relative overflow-hidden">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <div className="p-6 bg-blue-900 space-y-3">
                  <h3 className="text-lg font-bold text-white">{student.name}</h3>
                  <div className="space-y-1">
                    <RichText as="p" className="text-sm text-gray-200" text={student.university} />
                    <p className="text-golden font-semibold text-sm">{student.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 sm:mt-14">
            <Link href="/success-stories" className="inline-flex items-center gap-2 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-golden to-yellow-500 text-blue-950 font-bold rounded-xl hover:shadow-2xl transition-all transform hover:scale-105 text-sm sm:text-base shadow-lg">
              View All Stories <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - Premium */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-r from-blue-950 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-golden rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-golden rounded-full mix-blend-screen filter blur-3xl opacity-5"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
            {home.ctaSection.title}
          </h2>
          <RichText as="p" className="text-base sm:text-lg text-gray-200 mb-8 sm:mb-10 leading-relaxed" text={home.ctaSection.subtitle} />
          <a
            href={g.registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-golden to-yellow-500 text-blue-950 font-bold rounded-xl hover:shadow-2xl transition-all transform hover:scale-105 text-sm sm:text-base shadow-lg"
          >
            {home.ctaSection.buttonText} <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </div>
  );
}
