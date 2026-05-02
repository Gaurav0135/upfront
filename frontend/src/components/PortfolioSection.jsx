import { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const PortfolioSection = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <section id="portfolio" className="py-16 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Portfolio"
          title="Recent projects that delivered impact"
          subtitle="A selection of projects across development, SEO, and campaign growth."
        />

        {loading ? (
          <p className="text-sm text-slate-400">Loading portfolio...</p>
        ) : (
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
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
