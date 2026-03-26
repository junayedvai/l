import { Award, Globe, Users } from "lucide-react";
import { useCms } from "@/contexts/CmsContext";
import RichText from "@/components/RichText";

export default function SuccessStories() {
  const { content } = useCms();
  const stories = content.successStories;
  const g = content.global;
  const page = content.successPage;

  const stats = [
    { icon: Users, number: "500+", label: "Students Placed" },
    { icon: Globe, number: "10+", label: "Countries" },
    { icon: Award, number: "50+", label: "Universities" },
  ];

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

      {/* Stats */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="group text-center p-8 rounded-2xl border-2 border-gray-100 hover:border-golden hover:shadow-xl transition-all">
                  <div className="w-20 h-20 bg-gradient-to-br from-golden to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <Icon size={40} className="text-white" />
                  </div>
                  <p className="text-4xl font-bold text-golden mb-3">{stat.number}</p>
                  <p className="text-gray-600 text-lg font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-16 sm:py-20 md:py-24 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-950 mb-12 sm:mb-16 text-center">
            {page.sectionTitle} <span className="bg-gradient-to-r from-golden to-yellow-500 bg-clip-text text-transparent">{page.sectionHighlight}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-golden"
              >
                {/* Image */}
                <div className="h-64 bg-gradient-to-br from-blue-950 to-blue-900 flex items-center justify-center overflow-hidden relative">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-4">
                  <h3 className="text-xl font-bold text-blue-950">{story.name}</h3>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold text-blue-950">University:</span> <RichText as="span" text={story.university} />
                    </p>
                    <p className="text-sm">
                      <span className="font-semibold text-blue-950">Country:</span> <span className="text-golden font-semibold">{story.country}</span>
                    </p>
                  </div>
                  <div className="border-t-2 border-blue-50 pt-4">
                    <RichText as="p" className="text-gray-700 italic text-sm" text={`"${story.quote}"`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-950 mb-12 sm:mb-16 text-center">
            {page.testimonialTitle} <span className="bg-gradient-to-r from-golden to-yellow-500 bg-clip-text text-transparent">{page.testimonialHighlight}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {page.testimonials.map((item) => (
              <div key={item.id} className="group bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-golden hover:shadow-xl transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-golden/10 rounded-full -mr-8 -mt-8 group-hover:scale-150 transition-transform"></div>
                
                <div className="relative z-10">
                  <RichText as="p" className="text-gray-700 mb-6 italic leading-relaxed" text={`"${item.quote}"`} />
                  <p className="font-bold text-blue-950">— {item.author}</p>
                </div>
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
            className="inline-flex items-center gap-2 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-golden to-yellow-500 text-blue-950 font-bold rounded-xl hover:shadow-2xl transition-all transform hover:scale-105 shadow-lg"
          >
            {page.ctaButton}
          </a>
        </div>
      </section>
    </div>
  );
}
