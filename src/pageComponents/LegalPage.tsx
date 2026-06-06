import GridBackground from '@/components/GridBackground';
import Breadcrumbs from '@/components/Breadcrumbs';
import { LegalDoc } from '@/data/legal';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <div className="bg-modern-primary min-h-screen">
      {/* Header */}
      <section className="relative pt-28 pb-8 overflow-hidden">
        <GridBackground />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 max-w-3xl">
          <div className="mb-8">
            <Breadcrumbs
              items={[{ label: 'Home', href: '/' }, { label: doc.title }]}
            />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 leading-tight">
            {doc.title}
          </h1>
          <p className="text-sm text-gray-500">
            Last updated {formatDate(doc.updated)}
          </p>
        </div>
      </section>

      {/* Body */}
      <article className="pb-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            {doc.intro}
          </p>

          {doc.sections.map((section) => (
            <section key={section.heading} className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                {section.heading}
              </h2>
              {section.paragraphs?.map((p, i) => (
                <p key={i} className="text-gray-700 leading-relaxed mb-4">
                  {p}
                </p>
              ))}
              {section.list && (
                <ul className="space-y-2.5 mb-4">
                  {section.list.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary-purple mt-2.5 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </article>
    </div>
  );
}
