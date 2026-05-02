import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Code2, Megaphone, Mail, Settings } from "lucide-react";

const services = [
  {
    id: "website-development",
    icon: Code2,
    title: "Website Development",
    description: "Building fast, scalable websites that convert visitors into customers.",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: "digital-marketing",
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Strategic campaigns that amplify your reach and drive measurable results.",
    color: "from-purple-500 to-purple-600"
  },
  {
    id: "email-marketing",
    icon: Mail,
    title: "Email Marketing",
    description: "Targeted email campaigns that engage customers and boost conversions.",
    color: "from-cyan-500 to-cyan-600"
  },
  {
    id: "it-consulting",
    icon: Settings,
    title: "IT Consulting",
    description: "Expert guidance to optimize your digital infrastructure and workflows.",
    color: "from-emerald-500 to-emerald-600"
  }
];

const ServicesSection = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  const handleServiceClick = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };

  return (
    <section className="bg-[#07142c] min-h-screen flex items-center justify-center px-4 md:px-8 py-24 md:py-32 lg:py-40">
      <div className="w-full max-w-7xl">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 md:mb-24 lg:mb-28"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 lg:mb-8">
            Our Services
          </h1>
          <p className="text-slate-300 max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl">
            Comprehensive solutions designed to help your business grow and succeed in the digital world.
          </p>
        </motion.div>

        {/* SERVICES GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                onClick={() => handleServiceClick(service.id)}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 p-6 lg:p-8 border border-slate-700 hover:border-blue-500/50 cursor-pointer transition-all duration-300"
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className={`w-16 h-16 lg:w-20 lg:h-20 rounded-lg bg-gradient-to-br ${service.color} p-3 lg:p-4 mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-semibold text-white mb-2 lg:mb-3 group-hover:text-blue-300 transition">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm lg:text-base leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-4 inline-block text-blue-400 group-hover:text-blue-300 transition text-sm lg:text-base">
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
    </section>
  );
};

export default ServicesSection;
