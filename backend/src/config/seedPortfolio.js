import Portfolio from "../models/Portfolio.js";

const defaults = [
  {
    title: "Nova Fashion Store",
    category: "Ecommerce Website",
    description: "A fast ecommerce site with conversion-focused product pages.",
    imageUrl:
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1200&q=80",
    projectUrl: "https://example.com"
  },
  {
    title: "GreenNest Interiors",
    category: "Business Website",
    description: "A modern interior studio website with strong local SEO structure.",
    imageUrl:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&q=80",
    projectUrl: "https://example.com"
  },
  {
    title: "FitTrack Campaign",
    category: "Digital Marketing",
    description: "A campaign landing page that increased lead conversion by 42%.",
    imageUrl:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
    projectUrl: "https://example.com"
  }
];

const seedPortfolioIfEmpty = async () => {
  const count = await Portfolio.countDocuments();

  if (count === 0) {
    await Portfolio.insertMany(defaults);
    console.log("Default portfolio items inserted");
  }
};

export default seedPortfolioIfEmpty;
