import { CalendarDays, BellRing } from "lucide-react";
import { useCms } from "@/contexts/CmsContext";
import RichText from "@/components/RichText";

function formatNoticeDate(dateValue: string) {
  const date = new Date(dateValue);
  if (Number.isNaN(date.getTime())) return dateValue;

  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function NoticeBoard() {
  const { content } = useCms();
  const board = content.noticeBoard ?? {
    heroTitle: "Notice",
    heroHighlight: "Board",
    heroSubtitle: "Latest updates and announcements",
    notices: [],
  };

  return (
    <div className="bg-white min-h-screen">
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-blue-950 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-golden rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              {board.heroTitle} <span className="bg-gradient-to-r from-golden to-yellow-500 bg-clip-text text-transparent">{board.heroHighlight}</span>
            </h1>
            <RichText as="p" className="text-base sm:text-lg text-gray-200 leading-relaxed" text={board.heroSubtitle} />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {board.notices.length === 0 ? (
              <div className="rounded-2xl border-2 border-dashed border-golden p-12 sm:p-16 text-center bg-blue-50">
                <BellRing className="mx-auto text-golden mb-4" size={48} />
                <p className="text-gray-600 font-medium text-lg">No notices available right now.</p>
              </div>
            ) : (
              board.notices.map((notice) => (
                <article
                  key={notice.id}
                  className="group rounded-2xl border-2 border-gray-100 bg-white hover:border-golden hover:shadow-xl transition-all p-8"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-white bg-gradient-to-r from-golden to-yellow-500 px-4 py-2 rounded-full w-fit">
                      <CalendarDays size={18} />
                      {formatNoticeDate(notice.date)}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 mb-3">{notice.title}</h2>
                  <RichText as="p" className="text-gray-700 leading-relaxed text-base" text={notice.description} />
                </article>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
