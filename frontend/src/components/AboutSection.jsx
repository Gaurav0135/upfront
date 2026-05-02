import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MessageCircle, Linkedin, Github, Twitter, Phone } from "lucide-react";
import SectionHeading from "./SectionHeading";

const AboutSection = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:support.upfront@gmail.com",
      color: "bg-blue-500/20 hover:bg-blue-500/30 text-blue-400"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/919691184503",
      color: "bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400"
    },
    {
      icon: Phone,
      label: "Phone",
      href: "tel:+919691184503",
      color: "bg-purple-500/20 hover:bg-purple-500/30 text-purple-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400"
    }
  ];

  // public assets (place the image files in frontend/public)
  const fallbackTeam =
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80";
  const ownerFallback =
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80";

  const [ownerSrc, setOwnerSrc] = useState("/owner.jpg");
  const [teamSrc, setTeamSrc] = useState("/team.jpg");

  return (
    <section className="bg-[#07142c] py-20 md:py-32 lg:py-40 px-4 md:px-8">
      <div className="w-full max-w-7xl mx-auto">
        {/* Company About */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInVariants}
          className="grid gap-12 md:gap-16 lg:grid-cols-2 lg:items-center mb-20 md:mb-28 lg:mb-32"
        >
          <div>
            <SectionHeading
              eyebrow="About Upfront"
              title="A focused team built to deliver business results"
              subtitle="Upfront is a digital solutions company that provides website development, SEO optimization, and digital marketing services to help businesses build a strong online presence."
            />
            <div className="grid gap-6 md:gap-8 lg:gap-10 sm:grid-cols-2 mt-10 md:mt-12 lg:mt-16">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="rounded-2xl lg:rounded-3xl p-6 md:p-8 lg:p-10 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 hover:border-blue-500/50 transition"
              >
                <h3 className="text-lg md:text-2xl lg:text-3xl font-semibold text-blue-400 mb-4 lg:mb-6">Mission</h3>
                <p className="text-sm md:text-base lg:text-lg text-slate-300 leading-relaxed">
                  Build measurable digital systems that generate leads, increase visibility, and support long-term growth.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="rounded-2xl lg:rounded-3xl p-6 md:p-8 lg:p-10 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 hover:border-blue-500/50 transition"
              >
                <h3 className="text-lg md:text-2xl lg:text-3xl font-semibold text-blue-400 mb-4 lg:mb-6">Vision</h3>
                <p className="text-sm md:text-base lg:text-lg text-slate-300 leading-relaxed">
                  Become a trusted growth partner for ambitious brands seeking modern and sustainable online success.
                </p>
              </motion.div>
            </div>
          </div>

          <motion.img
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            src={teamSrc}
            alt="Upfront team collaborating on digital strategy"
            className="w-full h-80 md:h-96 lg:h-[600px] rounded-3xl lg:rounded-4xl object-cover"
            loading="lazy"
            onError={() => setTeamSrc(fallbackTeam)}
          />
        </motion.div>

        {/* Owner Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInVariants}
          className="mb-20 md:mb-28 lg:mb-32"
        >
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-16 md:mb-20 lg:mb-24 text-center">
            Meet the Founder
          </h2>
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1 }}
              className="relative"
            >
              <div className="rounded-2xl lg:rounded-4xl overflow-hidden">
                <img
                  src={ownerSrc}
                  alt="Founder of Upfront Digital Solutions"
                  className="w-full h-96 md:h-[500px] lg:h-[650px] object-cover"
                  loading="lazy"
                  onError={() => setOwnerSrc(ownerFallback)}
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 md:w-40 md:h-40 lg:w-52 lg:h-52 bg-blue-500/20 rounded-full blur-3xl -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">
                Gaurav Patel
              </h3>
              <p className="text-blue-400 font-semibold mb-8 lg:mb-12 text-lg lg:text-2xl">Founder & Digital Strategist</p>
              <div className="space-y-6 md:space-y-8 mb-10 lg:mb-14 text-slate-300">
                <p className="text-base md:text-lg lg:text-xl leading-relaxed">
                  With over 5+ years of experience in digital marketing and web development, I founded Upfront to help businesses achieve measurable growth through strategic digital solutions.
                </p>
                <p className="text-base md:text-lg lg:text-xl leading-relaxed">
                  My passion lies in creating custom digital experiences that not only look stunning but also drive real business results. I specialize in website development, SEO optimization, and comprehensive digital marketing strategies.
                </p>
                <p className="text-base md:text-lg lg:text-xl leading-relaxed">
                  At Upfront, we believe that great design and strategy should work together seamlessly. Every project is a partnership where your success is our success.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 lg:gap-4">
                <span className="inline-block px-4 py-2 lg:px-6 lg:py-3 rounded-full bg-blue-500/20 text-blue-400 text-sm lg:text-base font-medium">Web Development</span>
                <span className="inline-block px-4 py-2 lg:px-6 lg:py-3 rounded-full bg-purple-500/20 text-purple-400 text-sm lg:text-base font-medium">SEO Strategy</span>
                <span className="inline-block px-4 py-2 lg:px-6 lg:py-3 rounded-full bg-cyan-500/20 text-cyan-400 text-sm lg:text-base font-medium">Digital Marketing</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Connect Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInVariants}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-8 lg:mb-12">
            Let's Connect
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto text-base md:text-lg lg:text-xl mb-16 md:mb-20 lg:mb-24">
            Have a question or ready to start your next project? Reach out through any channel below. I'd love to hear from you!
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : "_self"}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : ""}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className={`group relative p-8 lg:p-10 rounded-xl lg:rounded-2xl border border-slate-700 transition-all duration-300 hover:border-blue-500/50 cursor-pointer ${link.color}`}
                >
                  <div className="flex flex-col items-center gap-4 lg:gap-5">
                    <div className="p-3 lg:p-4 rounded-lg lg:rounded-xl bg-current/10 group-hover:bg-current/20 transition">
                      <Icon size={32} className="lg:scale-125" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm md:text-base lg:text-lg">
                        {link.label}
                      </p>
                      {link.label === "Phone" && (
                        <p className="text-xs md:text-sm lg:text-base text-slate-300 mt-2">+91 96911 84503</p>
                      )}
                      {link.label === "Email" && (
                        <p className="text-xs md:text-sm lg:text-base text-slate-300 mt-2 break-all">
                          support.upfront@gmail.com
                        </p>
                      )}
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Additional CTA */}
          <div className="mt-20 md:mt-24 lg:mt-32">
            <p className="text-slate-400 mb-8 text-sm md:text-base lg:text-lg">
              Or schedule a free consultation call
            </p>
            <motion.a
              href="https://wa.me/919691184503"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 md:px-14 lg:px-16 py-3 md:py-4 lg:py-5 rounded-lg lg:rounded-xl font-semibold transition text-base md:text-lg lg:text-xl"
            >
              Start a Conversation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
