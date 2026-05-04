import { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";
import SkeletonCard from "./ui/SkeletonCard";
import LoadingSpinner from "./ui/LoadingSpinner";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5001/api";

const PortfolioSection = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showLoadedMessage, setShowLoadedMessage] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_BASE}/portfolio`);
        const data = await response.json();
        setItems(data.data || []);
      } catch (error) {
        console.error("Failed to load portfolio", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  useEffect(() => {
    if (loading) return undefined;
    setShowLoadedMessage(true);

    const timer = setTimeout(() => {
      setShowLoadedMessage(false);
    }, 2400);

    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <section id="portfolio" className="py-16 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Portfolio"
          title="Recent projects that delivered impact"
          subtitle="A selection of projects across development, SEO, and campaign growth."
        />

        {loading ? (
          <div className="space-y-6">
            <div className="glass rounded-2xl border border-brand-400/20 p-4 sm:p-5">
              <div className="flex flex-wrap items-center gap-3 text-slate-200" aria-live="polite">
                <LoadingSpinner size={26} className="text-brand-300" />
                <span className="text-2xl leading-none text-brand-200 animate-pulse" aria-hidden>
                  ∞
                </span>
                <p className="text-sm font-semibold tracking-wide">Loading portfolio data...</p>
                <p className="text-xs text-brand-200/90">Please wait while we bring your projects.</p>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <SkeletonCard key={`skeleton-${i}`} />
              ))}
            </div>
          </div>
        ) : (
          <>
            {showLoadedMessage ? (
              <div className="mb-6 rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
                Data loaded successfully. Explore the latest portfolio items.
              </div>
            ) : null}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <article key={item._id} className="glass overflow-hidden rounded-2xl">
                <img
                  src={item.imageUrl}
                  alt={`${item.title} project preview`}
                  className="h-44 w-full object-cover"
                  loading="lazy"
                />
                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-brand-300">{item.category}</p>
                  <h3 className="mt-3 font-display text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{item.description}</p>
                  {item.projectUrl ? (
                    (() => {
                      const url = item.projectUrl?.trim();
                      const abs = /^https?:\/\//i.test(url) ? url : `https://${url}`;
                      return (
                        <a
                          href={abs}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-4 inline-block text-sm font-semibold text-brand-300 hover:text-brand-200"
                        >
                          Visit Project
                        </a>
                      );
                    })()
                  ) : null}
                </div>
              </article>
            ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
