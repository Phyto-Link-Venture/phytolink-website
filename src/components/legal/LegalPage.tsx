import type { ReactNode } from "react";

export interface LegalSection {
  id: string;
  title: string;
  content: ReactNode;
}

/** A value the site owner still has to fill in — shown highlighted so it is never missed. */
export function Placeholder({ children }: { children: ReactNode }) {
  return (
    <mark className="bg-yellow-100 text-yellow-900 px-1 rounded font-semibold">{children}</mark>
  );
}

function TocList({ sections }: { sections: LegalSection[] }) {
  return (
    <ol className="space-y-2 text-sm">
      {sections.map((s, i) => (
        <li key={s.id} className="flex">
          <span className="text-gray-400 w-7 flex-shrink-0">{i + 1}.</span>
          <a href={`#${s.id}`} className="text-gray-700 hover:text-green-600 transition">
            {s.title}
          </a>
        </li>
      ))}
    </ol>
  );
}

export default function LegalPage({
  title,
  effectiveDate,
  intro,
  sections,
}: {
  title: string;
  effectiveDate: string;
  intro: ReactNode;
  sections: LegalSection[];
}) {
  return (
    <div className="pt-16 bg-gray-50">
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-green-100">
            Effective date and last updated: <time>{effectiveDate}</time>
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12">
          {/* Table of contents */}
          <aside className="mb-8 lg:mb-0">
            <details className="lg:hidden bg-white rounded-2xl shadow-lg p-6" open>
              <summary className="font-bold text-gray-900 cursor-pointer">Contents</summary>
              <nav aria-label="Table of contents" className="mt-4">
                <TocList sections={sections} />
              </nav>
            </details>
            <nav
              aria-label="Table of contents"
              className="hidden lg:block sticky top-24 bg-white rounded-2xl shadow-lg p-6 max-h-[calc(100vh-8rem)] overflow-y-auto"
            >
              <p className="font-bold text-gray-900 mb-4">Contents</p>
              <TocList sections={sections} />
            </nav>
          </aside>

          <article className="bg-white rounded-2xl shadow-lg p-6 sm:p-10 text-gray-700 leading-relaxed legal-content min-w-0">
            <div className="mb-10 space-y-4">{intro}</div>
            {sections.map((s, i) => (
              <section key={s.id} id={s.id} className="scroll-mt-24 mb-10 last:mb-0">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  <a href={`#${s.id}`} className="hover:text-green-700 transition">
                    {i + 1}. {s.title}
                  </a>
                </h2>
                <div className="space-y-4">{s.content}</div>
              </section>
            ))}
          </article>
        </div>
      </div>
    </div>
  );
}
