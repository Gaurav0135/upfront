import { Mail, MessageCircleMore, Linkedin, Github, Phone, Clock3, CheckCircle2, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const whatsappNumber = "919691184503";
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Hi Gaurav, I came from your website and would like to discuss a project."
)}`;
const emailAddress = "support.upfront@gmail.com";
const linkedinUrl = "https://linkedin.com/in/gauravpatel";
const githubUrl = "https://github.com/gauravpatel";
const instagramUrl = "https://www.instagram.com/gaurav_patel_72/";
const phoneNumber = "+919691184503";

const contactMethods = [
  {
    id: "email",
    title: "Email",
    description: "Send us a detailed message",
    icon: Mail,
    href: `mailto:${emailAddress}`,
    color: "from-blue-500 to-blue-600",
    accentColor: "text-blue-400"
  },
  {
    id: "whatsapp",
    title: "WhatsApp",
    description: "Chat with us instantly",
    icon: MessageCircleMore,
    href: whatsappLink,
    color: "from-green-500 to-green-600",
    accentColor: "text-green-400",
    primary: true
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    description: "Connect professionally",
    icon: Linkedin,
    href: linkedinUrl,
    color: "from-blue-600 to-blue-700",
    accentColor: "text-blue-300"
  },
  {
    id: "instagram",
    title: "Instagram",
    description: "Follow our work",
    icon: Instagram,
    href: instagramUrl,
    color: "from-pink-500 to-rose-500",
    accentColor: "text-pink-400"
  },
  {
    id: "github",
    title: "GitHub",
    description: "Check out our projects",
    icon: Github,
    href: githubUrl,
    color: "from-slate-700 to-slate-800",
    accentColor: "text-slate-300"
  },
  {
    id: "phone",
    title: "Phone",
    description: "Call us directly",
    icon: Phone,
    href: `tel:${phoneNumber}`,
    color: "from-purple-500 to-purple-600",
    accentColor: "text-purple-400"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: index * 0.08
    }
  }),
  hover: {
    y: -8,
    transition: { duration: 0.3 }
  }
};

const ContactCard = ({ method, index }) => {
  const Icon = method.icon;

  return (
    <motion.a
      href={method.href}
      target={method.href.startsWith("http") && !method.href.startsWith("mailto:") ? "_blank" : undefined}
      rel={method.href.startsWith("http") && !method.href.startsWith("mailto:") ? "noreferrer" : undefined}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-100px" }}
      className="group relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-950/40 backdrop-blur-xl p-6 sm:p-8 cursor-pointer"
    >
      {/* Gradient background on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
      
      {/* Glow effect */}
      <div className={`absolute top-0 right-0 w-40 h-40 ${method.color === "from-blue-500 to-blue-600" ? "bg-blue-500/10" : method.color === "from-green-500 to-green-600" ? "bg-green-500/10" : method.color === "from-blue-600 to-blue-700" ? "bg-blue-600/10" : method.color === "from-slate-700 to-slate-800" ? "bg-slate-700/10" : "bg-purple-500/10"} rounded-full blur-3xl opacity-0 group-hover:opacity-70 transition-opacity duration-500`} />

      <div className="relative z-10">
        {/* Icon */}
        <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${method.color} text-white shadow-lg group-hover:shadow-2xl transition-shadow duration-300`}>
          <Icon size={24} />
        </div>

        {/* Content */}
        <div className="mt-5">
          <h3 className="text-lg font-semibold text-white group-hover:text-brand-200 transition-colors duration-300">
            {method.title}
          </h3>
          <p className="mt-2 text-sm text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
            {method.description}
          </p>
        </div>

        {/* Arrow indicator */}
        <div className="mt-5 flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-slate-400 group-hover:text-brand-300 transition-colors duration-300">
            Get in touch
          </span>
          <svg
            className="h-4 w-4 text-slate-400 group-hover:text-brand-300 transition-all duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </motion.a>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="section-shell">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-1/4 w-80 h-80 bg-brand-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          {/* Hero Section */}
          <motion.div
            className="mx-auto max-w-3xl text-center mb-16 sm:mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-2 rounded-full border border-brand-400/30 bg-brand-400/5 text-sm font-semibold uppercase tracking-wider text-brand-300 mb-6">
                Let's Connect
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight"
            >
              Let's Build Something<br className="hidden sm:block" /> Amazing Together
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
            >
              Choose your preferred way to connect. We're here to collaborate, discuss ideas, and bring your vision to life.
            </motion.p>
          </motion.div>

          {/* Contact Cards Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 mb-16 sm:mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {contactMethods.map((method, index) => (
              <ContactCard key={method.id} method={method} index={index} />
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="mx-auto max-w-2xl text-center mb-16 sm:mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-400 to-brand-500 text-slate-950 font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <span>Start a Project</span>
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Trust Section */}
          <motion.div
            className="mx-auto max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Quick Response Promise */}
              <div className="group rounded-2xl border border-slate-700/50 bg-slate-950/40 backdrop-blur-xl p-8 hover:border-brand-400/30 transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-500/20 text-brand-300">
                    <Clock3 size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg">Quick Response Promise</h3>
                    <p className="mt-2 text-slate-300 text-sm leading-relaxed">
                      We reply within 24 hours. Your time matters to us, and we're committed to prompt, professional communication.
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Callout */}
              <div className="group rounded-2xl border border-slate-700/50 bg-slate-950/40 backdrop-blur-xl p-8 hover:border-brand-400/30 transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20 text-green-400">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg">Trusted by Startups & Creators</h3>
                    <p className="mt-2 text-slate-300 text-sm leading-relaxed">
                      Join hundreds of businesses and individuals who've brought their ideas to life with us.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
