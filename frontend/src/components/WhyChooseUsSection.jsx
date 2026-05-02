import { ArrowRight, CheckCircle2, Clock3, Gem, LineChart, SearchCheck, ShieldCheck, Sparkles, Target, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "./SectionHeading";

const reasons = [
  {
    title: "Fast delivery",
    description: "We move quickly without skipping strategy, structure, or quality checks.",
    icon: Clock3
  },
  {
    title: "SEO-focused approach",
    description: "Every page is built to be discoverable, readable, and conversion-friendly.",
    icon: SearchCheck
  },
  {
    title: "Modern design",
    description: "Bold visuals, clean hierarchy, and responsive layouts that feel current.",
    icon: Sparkles
  },
  {
    title: "Affordable pricing",
    description: "Transparent scopes and practical packages that fit growing businesses.",
    icon: Gem
  }
];

const processSteps = [
  {
    title: "Discover",
    description: "We start by understanding your goals, audience, and current bottlenecks.",
    icon: Target
  },
  {
    title: "Build",
    description: "We design and develop fast, polished pages that are ready to launch.",
    icon: Workflow
  },
  {
    title: "Optimize",
    description: "We refine SEO, content flow, and conversion paths after launch.",
    icon: LineChart
  }
];

const trustPoints = [
  "Clear communication and fast turnaround",
  "Mobile-first, responsive implementation",
  "Conversion-focused content and layout",
  "Practical SEO foundations from day one"
];

const WhyChooseUsSection = () => {
  return (
    <section id="why-us" className="py-16 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Execution speed with long-term growth thinking"
          subtitle="We combine quick delivery with strategic SEO, conversion-minded design, and a process that keeps your business moving forward after launch."
        />

        <div className="glass rounded-3xl p-6 sm:p-8 lg:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-300">Built for growth</p>
          <h3 className="mt-3 max-w-3xl font-display text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
            A partner that balances speed, polish, and measurable outcomes.
          </h3>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Upfront is designed for teams that want a website or campaign that looks strong on day one and keeps
            working after the launch. We focus on structure, clarity, and the details that turn visits into real
            opportunities.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {trustPoints.map((point) => (
              <div key={point} className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-950/35 p-4">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-300" />
                <span className="text-sm leading-relaxed text-slate-200">{point}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { value: "48h", label: "Typical turnaround for a clear first draft" },
              { value: "SEO+", label: "Structure that supports ranking and conversion" },
              { value: "100%", label: "Responsive layouts across modern devices" }
            ].map((stat) => (
              <div key={stat.value} className="rounded-2xl border border-slate-800 bg-slate-950/35 p-5">
                <p className="text-3xl font-semibold text-white">{stat.value}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div key={reason.title} className="glass min-h-[180px] rounded-2xl p-6">
                <Icon size={24} className="text-brand-300" />
                <h3 className="mt-4 font-display text-lg font-semibold text-white">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{reason.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="glass rounded-3xl p-6 sm:p-8 lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-300">How we work</p>
            <h3 className="mt-3 max-w-xl font-display text-2xl font-semibold text-white sm:text-3xl">
              A simple process that keeps momentum high.
            </h3>

            <div className="mt-8 space-y-4">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="flex gap-4 rounded-2xl border border-slate-800 bg-slate-950/35 p-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-300/15 text-brand-300">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Step {index + 1}</p>
                      <h4 className="mt-1 font-display text-lg font-semibold text-white">{step.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-slate-300">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-3xl border border-slate-800 bg-gradient-to-br from-brand-300/15 to-slate-950 p-6 sm:p-8 lg:p-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-300">What you get</p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
                A website that feels polished and performs well.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                From service pages to portfolio showcases, we make sure your site is easy to navigate, easy to trust,
                and easy to act on.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  "Clean information hierarchy",
                  "Fast-loading implementation",
                  "SEO-ready page structure",
                  "Calls to action that guide visitors"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-slate-200">
                    <ShieldCheck size={16} className="text-brand-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-brand-200"
              >
                Start a Project
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-900"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
