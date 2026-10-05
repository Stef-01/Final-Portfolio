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
    className="overflow-hidden rounded-[28px] bg-white"
  >
    <article className="grid md:grid-cols-[0.42fr_0.58fr]">
      <div className="min-h-64 overflow-hidden bg-paper md:min-h-full">
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
          <span className="text-oxblood">{publication.year}</span>
          <span className="h-1 w-1 rounded-full bg-gray-300" />
          <span className="text-gray-500">{publication.authorRole}</span>
          <span className="h-1 w-1 rounded-full bg-gray-300" />
          <span className="text-gray-500">{publication.topic}</span>
        </div>

        <h3 className="mt-4 text-xl font-bold leading-snug tracking-[-0.02em] text-gray-900 md:text-2xl">
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
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition-[color,background-color,transform] active:scale-[0.97] hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2"
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
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-paper px-5 py-2.5 text-sm font-semibold text-gray-900 transition-[color,background-color,transform] active:scale-[0.97] hover:bg-sand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2"
            >
              <FileText className="h-4 w-4" aria-hidden="true" />
              {publication.documentLabel ?? "View document"}
            </a>
          )}

          {publication.doi && (
            <button
              type="button"
              onClick={() => onCopy(publication)}
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-paper px-5 py-2.5 text-sm font-semibold text-gray-900 transition-[color,background-color,transform] active:scale-[0.97] hover:bg-sand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2"
              aria-label={`Copy DOI for ${publication.title}`}
            >
              {copied ? (
                <Check className="h-4 w-4 text-oxblood" aria-hidden="true" />
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
            className="ml-auto inline-flex min-h-11 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-gray-500 transition-[color,background-color,transform] active:scale-[0.97] hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2"
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
    <section id="publications">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[28px] bg-white p-4 md:p-5">
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
                className="h-12 w-full rounded-full bg-paper pl-12 pr-4 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/15"
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
                    className={`min-h-12 rounded-full px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2 ${
                      active
                        ? "bg-gray-900 text-white"
                        : "bg-paper text-gray-600 hover:bg-sand hover:text-gray-900"
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
          <div className="mt-6 rounded-[28px] bg-white px-6 py-16 text-center">
            <p className="text-lg font-semibold text-gray-900">No publications match that search.</p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setActiveFilter("All publications");
              }}
              className="mt-4 rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2"
            >
              Reset search and filters
            </button>
          </div>
        )}

        <div className="mt-20">
          <div className="mb-8">
            <h2 className="t-h2 font-bold tracking-[-0.03em] text-gray-900">
              Work moving through the research pipeline
            </h2>
          </div>

          <div className="grid gap-4">
            <details open className="group rounded-[28px] bg-white p-5 md:p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-xl font-semibold text-gray-900">
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
                      <p className="font-semibold leading-snug text-gray-900">{item.title}</p>
                      <p className="mt-1 text-sm text-gray-500">{item.venue}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </details>

            <details className="group rounded-[28px] bg-white p-5 md:p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-xl font-semibold text-gray-900">
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

            <details className="group rounded-[28px] bg-white p-5 md:p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-xl font-semibold text-gray-900">
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
