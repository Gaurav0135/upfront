import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowLeft, Check } from "lucide-react";
import SiteLayout from "../layouts/SiteLayout";

const serviceDetails = {
  "website-development": {
    title: "Website Development",
    description: "We build fast, scalable, and conversion-optimized websites that elevate your brand and drive business growth.",
    longDescription: "Our website development services combine cutting-edge technology with strategic design to create digital experiences that engage your audience and drive measurable results. Whether you need a corporate website, e-commerce store, or custom web application, we deliver solutions tailored to your business goals.",
    features: [
      "Responsive Design (Mobile, Tablet, Desktop)",
      "SEO Optimized Architecture",
      "Fast Performance & Page Speed Optimization",
      "Content Management System Integration",
      "Security & SSL Implementation",
      "Analytics & Conversion Tracking",
      "User Experience (UX) Optimization",
      "Cross-browser Compatibility"
    ],
    pricing: [
      {
        name: "Starter",
        price: "₹4,500",
        period: "One-time",
        features: [
          "5-10 Page Website",
          "Basic SEO",
          "Mobile Responsive",
          "Contact Form",
          "Social Media Integration",
          "SSL Certificate",
          "3 Months Support"
        ]
      },
      {
        name: "Professional",
        price: "₹7,500",
        period: "One-time",
        features: [
          "Up to 25 Pages",
          "Advanced SEO",
          "Mobile Responsive",
          "E-commerce Capability",
          "Payment Gateway Integration",
          "Blog Setup",
          "Advanced Analytics",
          "6 Months Support"
        ],
        popular: true
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "Quote",
        features: [
          "Unlimited Pages",
          "Custom Features",
          "Advanced Integrations",
          "API Development",
          "Custom CMS",
          "Scalable Architecture",
          "Priority Support",
          "Ongoing Maintenance"
        ]
      }
    ]
  },
  "digital-marketing": {
    title: "Digital Marketing",
    description: "Strategic digital marketing campaigns designed to amplify your brand visibility and drive measurable business results.",
    longDescription: "Our digital marketing experts develop comprehensive strategies that span multiple channels including SEO, PPC, social media, and content marketing. We focus on data-driven insights to maximize ROI and build sustainable growth for your business.",
    features: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click (PPC) Advertising",
      "Social Media Marketing",
      "Content Marketing Strategy",
      "Email Marketing Campaigns",
      "Influencer Outreach",
      "Analytics & Reporting",
      "Conversion Rate Optimization"
    ],
    pricing: [
      {
        name: "Startup",
        price: "₹4,500",
        period: "Per Month",
        features: [
          "Basic SEO Optimization",
          "Social Media Management (2 platforms)",
          "Monthly Report",
          "Email Support",
          "10 Blog Posts/Month",
          "Keyword Research"
        ]
      },
      {
        name: "Growth",
        price: "₹7,500",
        period: "Per Month",
        features: [
          "Advanced SEO",
          "Social Media Management (4 platforms)",
          "PPC Campaign Management",
          "Content Creation (20 posts/month)",
          "Weekly Reports",
          "Lead Generation Focus",
          "A/B Testing"
        ],
        popular: true
      },
      {
        name: "Premium",
        price: "₹9,500",
        period: "Per Month",
        features: [
          "Full-Stack Digital Marketing",
          "All Social Platforms",
          "Dedicated Account Manager",
          "Custom Strategy",
          "Influencer Partnerships",
          "Video Marketing",
          "Daily Monitoring & Optimization",
          "Quarterly Strategy Review"
        ]
      }
    ]
  },
  "email-marketing": {
    title: "Email Marketing",
    description: "Targeted email campaigns that engage your subscribers and drive consistent conversions and customer loyalty.",
    longDescription: "Email marketing remains one of the highest ROI marketing channels. We design, manage, and optimize email campaigns that keep your audience engaged and drive repeat business. From newsletters to automated sequences, we handle it all.",
    features: [
      "Email List Building & Segmentation",
      "Campaign Design & Copywriting",
      "Automation Workflows",
      "A/B Testing & Optimization",
      "Subscriber Management",
      "Performance Analytics",
      "Template Design",
      "Integration with CRM/E-commerce"
    ],
    pricing: [
      {
        name: "Starter",
        price: "₹5,000",
        period: "Per Month",
        features: [
          "Up to 5,000 Subscribers",
          "2 Campaigns/Month",
          "Basic Templates",
          "Monthly Analytics",
          "Email Support",
          "Subscriber Management"
        ]
      },
      {
        name: "Professional",
        price: "₹7,500",
        period: "Per Month",
        features: [
          "Up to 25,000 Subscribers",
          "Unlimited Campaigns",
          "Premium Templates",
          "Automation Workflows",
          "Advanced Segmentation",
          "Weekly Reports",
          "Priority Support",
          "A/B Testing"
        ],
        popular: true
      },
      {
        name: "Enterprise",
        price: "₹9,500",
        period: "Per Month",
        features: [
          "Unlimited Subscribers",
          "Custom Integrations",
          "Dedicated Support",
          "AI-Powered Optimization",
          "Advanced Analytics",
          "Compliance Management",
          "API Access",
          "Quarterly Strategy Review"
        ]
      }
    ]
  },
  "it-consulting": {
    title: "IT Consulting",
    description: "Expert technology guidance to optimize your infrastructure, streamline operations, and drive digital transformation.",
    longDescription: "Our IT consulting services help businesses navigate complex technology decisions and implement solutions that enhance efficiency and competitiveness. From infrastructure assessment to digital transformation, we provide strategic expertise and hands-on support.",
    features: [
      "Technology Assessment & Audit",
      "Infrastructure Planning",
      "Cloud Migration Strategy",
      "Cybersecurity Consultation",
      "System Integration",
      "Performance Optimization",
      "Vendor Selection & Management",
      "IT Roadmap Development"
    ],
    pricing: [
      {
        name: "Consultation",
        price: "₹800",
        period: "Per Hour",
        features: [
          "Expert Guidance",
          "Problem Analysis",
          "Recommendations",
          "Implementation Support",
          "Follow-up Sessions"
        ]
      },
      {
        name: "Project-Based",
        price: "₹1,000",
        period: "Onwards",
        features: [
          "Full Project Assessment",
          "Custom Solution Design",
          "Implementation Oversight",
          "Team Training",
          "Post-Implementation Support",
          "3 Months Maintenance"
        ],
        popular: true
      },
      {
        name: "Retainer",
        price: "₹3,000",
        period: "Per Month",
        features: [
          "Ongoing Support",
          "Priority Response",
          "Regular Audits",
          "Proactive Monitoring",
          "Strategic Planning",
          "Unlimited Consultations",
          "Vendor Management"
        ]
      }
    ]
  }
};

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const service = serviceDetails[serviceId];

  if (!service) {
    return (
      <SiteLayout>
        <div className="bg-[#07142c] min-h-screen flex items-center justify-center px-4 py-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-4">Service Not Found</h1>
            <Link to="/services" className="text-blue-400 hover:text-blue-300">
              ← Back to Services
            </Link>
          </div>
        </div>
      </SiteLayout>
    );
  }

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <SiteLayout>
      <Helmet>
        <title>{service.title} | Upfront</title>
        <meta name="description" content={service.description} />
      </Helmet>

      <div className="bg-[#07142c] min-h-screen px-4 md:px-8 py-24 md:py-32 lg:py-40">
        <div className="w-full max-w-7xl mx-auto">
          
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
            >
              <ArrowLeft size={20} />
              Back to Services
            </Link>
          </motion.div>

          {/* Hero Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            className="mb-20 md:mb-24 lg:mb-32"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 lg:mb-8">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-slate-300 mb-6 lg:mb-8">
              {service.description}
            </p>
            <p className="text-slate-400 leading-relaxed max-w-4xl text-base lg:text-lg">
              {service.longDescription}
            </p>
          </motion.div>

          {/* Features Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            transition={{ delay: 0.1 }}
            className="mb-24 md:mb-32 lg:mb-40"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10 md:mb-12 lg:mb-16">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
              {service.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="flex items-center gap-3 p-4 lg:p-6 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition"
                >
                  <Check size={20} className="text-green-400 flex-shrink-0 lg:scale-125" />
                  <span className="text-white text-sm lg:text-base">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Pricing Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-16 md:mb-20 lg:mb-24 text-center">
              Flexible Pricing Plans
            </h2>
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {service.pricing.map((plan, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                    plan.popular
                      ? "border-2 border-blue-500 bg-gradient-to-br from-slate-800 to-slate-900 transform md:scale-105"
                      : "border border-slate-700 bg-slate-800/30"
                  } p-8 lg:p-10 hover:shadow-2xl hover:shadow-blue-500/20`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                      Popular
                    </div>
                  )}

                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 lg:mb-4">
                    {plan.name}
                  </h3>
                  <div className="mb-8 lg:mb-10">
                    <span className="text-4xl lg:text-5xl font-bold text-white">
                      {plan.price}
                    </span>
                    <span className="text-slate-400 ml-2">{plan.period}</span>
                  </div>

                  <button
                    className={`w-full py-3 lg:py-4 rounded-lg font-semibold mb-10 lg:mb-12 transition text-base lg:text-lg ${
                      plan.popular
                        ? "bg-blue-500 hover:bg-blue-600 text-white"
                        : "border border-slate-600 text-white hover:border-blue-500 hover:bg-blue-500/10"
                    }`}
                  >
                    Get Started
                  </button>

                  <ul className="space-y-4">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <Check size={18} className="text-green-400 flex-shrink-0 mt-1" />
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            transition={{ delay: 0.3 }}
            className="mt-24 md:mt-32 lg:mt-40 p-10 lg:p-16 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-center"
          >
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 lg:mb-8">
              Ready to get started?
            </h3>
            <p className="text-slate-300 mb-8 lg:mb-10 text-base lg:text-lg">
              Contact us today to discuss your requirements and find the perfect plan for your business.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
    </SiteLayout>
  );
};

export default ServiceDetailPage;
