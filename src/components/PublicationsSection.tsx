import { useMemo, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronDown,
  Copy,
  FileText,
  Search,
} from "lucide-react";
import {
  conferences,
  googleScholarUrl,
  presentations,
  Publication,
  publications,
  PublicationTopic,
  researchPipeline,
} from "../types/publications";

const filters: Array<"All publications" | PublicationTopic> = [
  "All publications",
  "AI & precision medicine",
  "Global health",
  "Implementation",
  "Policy & systems",
];

const normalize = (value: string) => value.toLocaleLowerCase().trim();

const PublicationCard = ({
  publication,
  copied,
  onCopy,
}: {
  publication: Publication;
  copied: boolean;
  onCopy: (publication: Publication) => void;
}) => (
  <motion.li
    layout
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.45 }}
    className="overflow-hidden rounded-2xl border border-black/10 bg-white"
  >
    <article className="grid md:grid-cols-[0.42fr_0.58fr]">
      <div className="min-h-64 overflow-hidden bg-[#f5f5f5] md:min-h-full">
        <img
          src={publication.image}
          alt={publication.imageAlt}
          className="h-full min-h-64 w-full object-cover transition-transform duration-700 hover:scale-[1.025]"
          loading="lazy"
          decoding="async"
          sizes="(max-width: 768px) 100vw, 42vw"
        />
      </div>

      <div className="flex flex-col p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-2 text-sm font-medium">
          <span className="text-blue-700">{publication.year}</span>
          <span className="h-1 w-1 rounded-full bg-gray-300" />
          <span className="text-gray-500">{publication.authorRole}</span>
          <span className="h-1 w-1 rounded-full bg-gray-300" />
          <span className="text-gray-500">{publication.topic}</span>
        </div>

        <h3 className="mt-4 text-xl font-bold leading-snug tracking-tight text-black md:text-2xl">
          {publication.title}
        </h3>

        <p className="mt-4 text-sm leading-relaxed text-gray-700 md:text-base">
          {publication.authors}
        </p>
        <p className="mt-2 text-sm italic leading-relaxed text-gray-500 md:text-base">
          {publication.journal}
        </p>
        <p className="mt-5 text-sm leading-relaxed text-gray-600 md:text-base">
          {publication.summary}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={publication.paperUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            <FileText className="h-4 w-4" aria-hidden="true" />
            Open paper
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>

          {publication.documentUrl && publication.documentUrl !== publication.paperUrl && (
            <a
              href={publication.documentUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-black/12 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:border-black/30 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              <FileText className="h-4 w-4" aria-hidden="true" />
              {publication.documentLabel ?? "View document"}
            </a>
          )}

          {publication.doi && (
            <button
              type="button"
              onClick={() => onCopy(publication)}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-black/12 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:border-black/30 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              aria-label={`Copy DOI for ${publication.title}`}
            >
              {copied ? (
                <Check className="h-4 w-4 text-emerald-700" aria-hidden="true" />
              ) : (
                <Copy className="h-4 w-4" aria-hidden="true" />
              )}
              {copied ? "DOI copied" : "Copy DOI"}
            </button>
          )}

          <a
            href={googleScholarUrl}
            target="_blank"
            rel="noreferrer"
            className="ml-auto inline-flex min-h-11 items-center gap-2 rounded-full bg-[#f3f5f6] px-4 py-2.5 text-sm font-semibold text-gray-600 transition-colors hover:bg-[#e8edf1] hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            aria-label={`${publication.citations} Google Scholar citations for ${publication.title}`}
          >
            <BarChart3 className="h-4 w-4" aria-hidden="true" />
            {publication.citations} {publication.citations === 1 ? "citation" : "citations"}
          </a>
        </div>
      </div>
    </article>
  </motion.li>
);

export function PublicationsSection() {
  const [activeFilter, setActiveFilter] =
    useState<(typeof filters)[number]>("All publications");
  const [query, setQuery] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredPublications = useMemo(() => {
    const normalizedQuery = normalize(query);
    return publications.filter((publication) => {
      const matchesFilter =
        activeFilter === "All publications" || publication.topic === activeFilter;
      const searchable = normalize(
        `${publication.title} ${publication.authors} ${publication.journal} ${publication.summary} ${publication.topic}`,
      );
      return matchesFilter && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [activeFilter, query]);

  const copyDoi = async (publication: Publication) => {
    if (!publication.doi || !navigator.clipboard) return;
    try {
      await navigator.clipboard.writeText(`https://doi.org/${publication.doi}`);
      setCopiedId(publication.id);
      window.setTimeout(() => setCopiedId(null), 1800);
    } catch {
      setCopiedId(null);
    }
  };

  return (
    <section id="publications" className="bg-[#f7f6f2] px-4 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.68fr_0.32fr] lg:items-end">
          <div>
            <h2 className="max-w-4xl t-h2 font-bold tracking-tight text-black">
              Research you can inspect, cite, and read.
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-gray-600">
              Peer-reviewed work across precision medicine, global health,
              implementation science, and health policy—paired with direct paper
              links, documents, and current Google Scholar citation signals.
            </p>
          </div>

          <a
            href={googleScholarUrl}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex min-h-14 items-center justify-between gap-6 rounded-2xl border border-black/10 bg-white px-5 py-4 text-sm font-semibold text-black transition-transform hover:-translate-y-1 hover:border-black/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            View complete Google Scholar profile
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="mt-12 rounded-2xl border border-black/10 bg-white p-4 md:p-5">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto]">
            <label className="relative block">
              <span className="sr-only">Search publications</span>
              <Search
                className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
                aria-hidden="true"
              />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search publications"
                className="h-12 w-full rounded-full border border-black/10 bg-[#f8f8f7] pl-12 pr-4 text-base text-black placeholder:text-gray-500 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
              />
            </label>

            <div className="flex flex-wrap gap-2" aria-label="Filter publications by topic">
              {filters.map((filter) => {
                const active = activeFilter === filter;
                return (
                  <button
                    key={filter}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setActiveFilter(filter)}
                    className={`min-h-12 rounded-full px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 ${
                      active
                        ? "bg-black text-white"
                        : "bg-[#f3f4f4] text-gray-600 hover:bg-[#e8edf1] hover:text-black"
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </div>

          <p className="mt-4 px-1 text-sm text-gray-500" aria-live="polite">
            Showing {filteredPublications.length} of {publications.length} peer-reviewed publications
          </p>
        </div>

        {filteredPublications.length > 0 ? (
          <motion.ul layout className="mt-6 grid gap-5">
            {filteredPublications.map((publication) => (
              <PublicationCard
                key={publication.id}
                publication={publication}
                copied={copiedId === publication.id}
                onCopy={copyDoi}
              />
            ))}
          </motion.ul>
        ) : (
          <div className="mt-6 rounded-2xl border border-dashed border-black/15 bg-white px-6 py-16 text-center">
            <p className="text-lg font-semibold text-black">No publications match that search.</p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setActiveFilter("All publications");
              }}
              className="mt-4 rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              Reset search and filters
            </button>
          </div>
        )}

        <div className="mt-20">
          <div className="mb-8">
            <h2 className="t-h2 font-bold tracking-tight text-black">
              Work moving through the research pipeline
            </h2>
          </div>

          <div className="grid gap-4">
            <details open className="group rounded-2xl border border-black/10 bg-white p-5 md:p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-xl font-semibold text-black">
                Manuscripts and studies
                <ChevronDown className="h-5 w-5 text-gray-400 transition-transform group-open:rotate-180" />
              </summary>
              <ul className="mt-3 divide-y divide-black/5">
                {researchPipeline.map((item) => (
                  <li key={item.title} className="grid gap-2 py-4 md:grid-cols-[140px_1fr]">
                    <span className="text-sm font-medium text-gray-500">
                      {item.status}
                    </span>
                    <div>
                      <p className="font-semibold leading-snug text-black">{item.title}</p>
                      <p className="mt-1 text-sm text-gray-500">{item.venue}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </details>

            <details className="group rounded-2xl border border-black/10 bg-white p-5 md:p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-xl font-semibold text-black">
                Conferences
                <ChevronDown className="h-5 w-5 text-gray-400 transition-transform group-open:rotate-180" />
              </summary>
              <ul className="mt-3 divide-y divide-black/5">
                {conferences.map((item) => (
                  <li key={item} className="py-3 text-sm leading-relaxed text-gray-700 md:text-base">
                    {item}
                  </li>
                ))}
              </ul>
            </details>

            <details className="group rounded-2xl border border-black/10 bg-white p-5 md:p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-xl font-semibold text-black">
                Invited and research presentations
                <ChevronDown className="h-5 w-5 text-gray-400 transition-transform group-open:rotate-180" />
              </summary>
              <ul className="mt-3 divide-y divide-black/5">
                {presentations.map((item) => (
                  <li key={item} className="py-3 text-sm leading-relaxed text-gray-700 md:text-base">
                    {item}
                  </li>
                ))}
              </ul>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}
