import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
  Code2,
  Database,
  Globe,
  Palette,
  Search,
  Settings,
  Megaphone,
  Zap,
  BarChart3,
} from "lucide-react";

/* Cards Data */
const cards = [
  { id: "web-development", icon: Code2, title: "Web Development", color: "from-blue-500 to-blue-600" },
  { id: "global-reach", icon: Globe, title: "Global Reach", color: "from-cyan-500 to-cyan-600" },
  { id: "ui-ux-design", icon: Palette, title: "UI/UX Design", color: "from-purple-500 to-purple-600" },
  { id: "seo-optimized", icon: Search, title: "SEO Optimized", color: "from-green-500 to-green-600" },
  { id: "lightning-fast", icon: Zap, title: "Lightning Fast", color: "from-yellow-500 to-yellow-600" },
  { id: "data-driven", icon: BarChart3, title: "Data Driven", color: "from-pink-500 to-pink-600" },
];

/* ---------------- COMPONENT ---------------- */

const HeroSection = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const handleCardClick = (cardId) => {
    navigate(`/feature/${cardId}`);
  };

  return (
    <section className="bg-[#07142c] min-h-screen flex items-center justify-center px-4 md:px-8 py-20 md:py-28 lg:py-36">
      <div className="w-full max-w-7xl">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 md:mb-24 lg:mb-28"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 lg:mb-8">
            Build. Optimize. Grow.
          </h1>
          <p className="text-slate-300 max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl mb-10 lg:mb-12">
            We build modern websites and help businesses grow with SEO and digital solutions.
          </p>
          <div className="flex justify-center gap-4 md:gap-6 lg:gap-8 flex-wrap">
            <Link to="/contact" className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-full text-white font-semibold transition">
              Get Started
            </Link>
            <Link to="/portfolio" className="border border-slate-500 hover:border-blue-400 px-8 py-3 rounded-full text-white font-semibold transition">
              View Work
            </Link>
             <a
               href="https://wa.me/919691184503?text=Hi%20Upfront,%20I%20want%20to%20connect%20with%20you."
               target="_blank"
               rel="noreferrer"
               className="inline-flex items-center gap-2 rounded-full border border-emerald-400/60 bg-emerald-500/10 px-8 py-3 font-semibold text-emerald-300 transition hover:border-emerald-300 hover:bg-emerald-500/20 hover:text-emerald-200"
               aria-label="Chat on WhatsApp at +91 96911 84503"
             >
               <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white">
                 <svg viewBox="0 0 32 32" aria-hidden="true" className="h-3.5 w-3.5 fill-current">
                   <path d="M19.11 17.36c-.26-.13-1.53-.75-1.77-.84-.24-.09-.42-.13-.6.13-.18.26-.69.84-.85 1.01-.16.18-.31.2-.57.07-.26-.13-1.1-.4-2.1-1.28-.78-.69-1.3-1.54-1.45-1.8-.15-.26-.02-.4.11-.53.12-.12.26-.31.39-.46.13-.16.18-.27.26-.45.09-.18.04-.34-.02-.47-.06-.13-.6-1.44-.82-1.98-.22-.53-.44-.46-.6-.46-.15 0-.33-.02-.5-.02-.17 0-.47.06-.71.34-.24.27-.92.9-.92 2.2 0 1.3.94 2.56 1.07 2.74.13.18 1.88 2.88 4.56 4.04.64.28 1.14.45 1.53.58.64.2 1.22.17 1.68.1.51-.08 1.53-.63 1.75-1.24.22-.6.22-1.12.15-1.24-.07-.12-.24-.19-.5-.32zM16.03 3c-7.17 0-13 5.83-13 13 0 2.29.6 4.52 1.74 6.48L3 29l6.7-1.76a12.95 12.95 0 0 0 6.33 1.65h.01c7.17 0 13-5.83 13-13s-5.83-13-13.01-13zm0 23.8h-.01a10.8 10.8 0 0 1-5.52-1.51l-.4-.24-3.98 1.05 1.06-3.88-.26-.4a10.78 10.78 0 0 1-1.66-5.72c0-5.95 4.84-10.79 10.79-10.79 5.95 0 10.79 4.84 10.79 10.79 0 5.95-4.84 10.7-10.81 10.7z" />
                 </svg>
               </span>
               WhatsApp
             </a>
          </div>
        </motion.div>

        {/* CARDS GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                onClick={() => handleCardClick(card.id)}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 p-6 lg:p-8 border border-slate-700 hover:border-blue-500/50 cursor-pointer transition-all duration-300"
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className={`w-16 h-16 lg:w-20 lg:h-20 rounded-lg bg-gradient-to-br ${card.color} p-3 lg:p-4 mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-semibold text-white mb-2 lg:mb-3 group-hover:text-blue-300 transition">
                    {card.title}
                  </h3>
                  <p className="text-slate-400 text-sm lg:text-base">
                    Professional solutions tailored for your business needs
                  </p>
                  <div className="mt-4 inline-block text-blue-400 group-hover:text-blue-300 transition">
                    Learn more →
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl group-hover:bg-blue-500/40 transition-all duration-300 -z-0" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* STYLES */}
      <style>
        {`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .float {
          animation: float 3s ease-in-out infinite;
        }

        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}
      </style>
    </section>
  );
};

export default HeroSection;