const SectionHeading = ({ eyebrow, title, subtitle }) => {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-brand-300">{eyebrow}</p>
      <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">{subtitle}</p>
    </div>
  );
};

export default SectionHeading;
