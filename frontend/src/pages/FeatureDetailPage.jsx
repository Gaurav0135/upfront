import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowLeft, Check } from "lucide-react";
import { Code2, Globe, Palette, Search, Zap, BarChart3 } from "lucide-react";
import SiteLayout from "../layouts/SiteLayout";

const featureDetails = {
  "web-development": {
    title: "Web Development Services",
    description: "Building modern, responsive websites that engage users and drive conversions.",
    icon: Code2,
    color: "from-blue-500 to-blue-600",
    longDescription: "Our web development services create powerful digital experiences using the latest technologies and best practices. We focus on performance, security, and user experience to ensure your website stands out.",
    features: [
      "Responsive Design for All Devices",
      "Fast Page Load Performance",
      "SEO-Friendly Architecture",
      "Secure & Scalable Infrastructure",
      "Cross-Browser Compatibility",
      "Modern JavaScript Frameworks",
      "Content Management System (CMS)",
      "Ongoing Maintenance & Updates"
    ],
    pricing: [
      {
        name: "Starter",
        price: "₹4,500",
        period: "One-time",
        features: ["5-10 Pages", "Basic SEO", "Mobile Responsive", "3 Months Support"]
      },
      {
        name: "Professional",
        price: "₹7,500",
        period: "One-time",
        features: ["25+ Pages", "Advanced SEO", "E-commerce", "6 Months Support"],
        popular: true
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "Quote",
        features: ["Unlimited Pages", "Custom Features", "API Integration", "Priority Support"]
      }
    ]
  },
  "global-reach": {
    title: "Global Reach Services",
    description: "Expand your business globally with our international digital solutions.",
    icon: Globe,
    color: "from-cyan-500 to-cyan-600",
    longDescription: "Leverage our expertise to reach customers worldwide. We help you localize content, optimize for international markets, and build a truly global digital presence.",
    features: [
      "Multi-Language Support",
      "Currency & Payment Integration",
      "International SEO Optimization",
      "Global CDN Hosting",
      "Localized Content Strategy",
      "International Compliance (GDPR, etc.)",
      "Timezone Management",
      "Global Analytics & Reporting"
    ],
    pricing: [
      {
        name: "Regional",
        price: "₹5,000",
        period: "One-time",
        features: ["2-3 Languages", "Regional Optimization", "Basic Localization", "3 Months Support"]
      },
      {
        name: "Global",
        price: "₹8,000",
        period: "One-time",
        features: ["5+ Languages", "Full Localization", "Global CDN", "6 Months Support"],
        popular: true
      },
      {
        name: "Premium Global",
        price: "Custom",
        period: "Quote",
        features: ["Unlimited Languages", "Cultural Adaptation", "Priority Support", "Market Analysis"]
      }
    ]
  },
  "ui-ux-design": {
    title: "UI/UX Design Services",
    description: "Create stunning user interfaces that users love to interact with.",
    icon: Palette,
    color: "from-purple-500 to-purple-600",
    longDescription: "We design beautiful, intuitive interfaces focused on user satisfaction. Our design process combines research, creativity, and usability to deliver interfaces that convert.",
    features: [
      "User Research & Analysis",
      "Wireframing & Prototyping",
      "Visual Design Systems",
      "Usability Testing",
      "Accessibility (WCAG)",
      "Interactive Prototypes",
      "Design Documentation",
      "Design to Development Handoff"
    ],
    pricing: [
      {
        name: "UI Design",
        price: "₹4,500",
        period: "One-time",
        features: ["5-10 Screens", "Visual Design", "Style Guide", "Deliverables"]
      },
      {
        name: "UI/UX Design",
        price: "₹7,500",
        period: "One-time",
        features: ["User Research", "Wireframes", "Prototypes", "Testing", "Design System"],
        popular: true
      },
      {
        name: "Complete UX Project",
        price: "₹9,500",
        period: "One-time",
        features: ["Full Strategy", "Research", "Design", "Testing", "Implementation Support"]
      }
    ]
  },
  "seo-optimized": {
    title: "SEO Optimization Services",
    description: "Rank higher in search results and attract organic traffic to your website.",
    icon: Search,
    color: "from-green-500 to-green-600",
    longDescription: "Our SEO strategies increase your visibility in search engines, drive organic traffic, and improve your online authority. We use white-hat techniques for sustainable growth.",
    features: [
      "Keyword Research & Analysis",
      "On-Page SEO Optimization",
      "Technical SEO Audit",
      "Backlink Strategy",
      "Content Optimization",
      "Local SEO",
      "SEO Analytics & Reporting",
      "Continuous Optimization"
    ],
    pricing: [
      {
        name: "Local SEO",
        price: "₹4,000",
        period: "Per Month",
        features: ["Local Optimization", "Google Business", "Local Citations", "Monthly Report"]
      },
      {
        name: "Professional SEO",
        price: "₹7,000",
        period: "Per Month",
        features: ["Keyword Strategy", "Content Optimization", "Link Building", "Weekly Reports"],
        popular: true
      },
      {
        name: "Enterprise SEO",
        price: "₹9,500",
        period: "Per Month",
        features: ["Full SEO Audit", "Content Strategy", "Priority Support", "Custom Reporting"]
      }
    ]
  },
  "lightning-fast": {
    title: "Performance Optimization",
    description: "Lightning-fast loading speeds that improve user experience and SEO rankings.",
    icon: Zap,
    color: "from-yellow-500 to-yellow-600",
    longDescription: "Improve your website's performance with optimization techniques that reduce load times, improve Core Web Vitals, and enhance user experience across all devices.",
    features: [
      "Code Minification & Compression",
      "Image Optimization",
      "Caching Strategies",
      "CDN Integration",
      "Database Optimization",
      "Lazy Loading Implementation",
      "Performance Monitoring",
      "Continuous Optimization"
    ],
    pricing: [
      {
        name: "Speed Audit",
        price: "₹3,500",
        period: "One-time",
        features: ["Performance Analysis", "Recommendations", "Report", "One Optimization"]
      },
      {
        name: "Optimization Package",
        price: "₹6,500",
        period: "One-time",
        features: ["Full Optimization", "Image Compression", "Caching Setup", "Monitoring"],
        popular: true
      },
      {
        name: "Performance Retainer",
        price: "₹4,500",
        period: "Per Month",
        features: ["Continuous Monitoring", "Regular Optimization", "Priority Support", "Reports"]
      }
    ]
  },
  "data-driven": {
    title: "Data-Driven Analytics",
    description: "Make informed decisions with comprehensive analytics and insights.",
    icon: BarChart3,
    color: "from-pink-500 to-pink-600",
    longDescription: "Understand your users with advanced analytics. We implement tracking systems that provide actionable insights to improve your business strategy and user experience.",
    features: [
      "Google Analytics 4 Setup",
      "Event Tracking Implementation",
      "Conversion Funnel Analysis",
      "User Behavior Analytics",
      "Custom Dashboards",
      "A/B Testing Framework",
      "Heatmap & Session Recording",
      "Monthly Insights Reports"
    ],
    pricing: [
      {
        name: "Analytics Setup",
        price: "₹4,000",
        period: "One-time",
        features: ["GA4 Implementation", "Event Setup", "Dashboard", "Initial Training"]
      },
      {
        name: "Advanced Analytics",
        price: "₹6,500",
        period: "Per Month",
        features: ["Full Implementation", "Custom Dashboards", "Reports", "Optimization Support"],
        popular: true
      },
      {
        name: "Analytics Consulting",
        price: "₹9,500",
        period: "Per Month",
        features: ["Strategy Development", "Implementation", "Reporting", "Strategic Guidance"]
      }
    ]
  }
};

const FeatureDetailPage = () => {
  const { featureId } = useParams();
  const feature = featureDetails[featureId];

  if (!feature) {
    return (
      <SiteLayout>
        <div className="bg-[#07142c] min-h-screen flex items-center justify-center px-4 py-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-4">Feature Not Found</h1>
            <Link to="/" className="text-blue-400 hover:text-blue-300">
              ← Back to Home
            </Link>
          </div>
        </div>
      </SiteLayout>
    );
  }

  const Icon = feature.icon;

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
        <title>{feature.title} | Upfront</title>
        <meta name="description" content={feature.description} />
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
              to="/"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
            >
              <ArrowLeft size={20} />
              Back to Home
            </Link>
          </motion.div>

          {/* Hero Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            className="mb-16"
          >
            <div className="flex items-start gap-6 lg:gap-8 mb-8">
              <div className={`w-24 h-24 lg:w-32 lg:h-32 rounded-lg bg-gradient-to-br ${feature.color} p-4 lg:p-6 flex-shrink-0`}>
                <Icon className="w-full h-full text-white" />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 lg:mb-8">
                  {feature.title}
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl text-slate-300 mb-4 lg:mb-6">
                  {feature.description}
                </p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-4xl text-base lg:text-lg">
              {feature.longDescription}
            </p>
          </motion.div>

          {/* Features Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            transition={{ delay: 0.1 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {feature.features.map((feat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="flex items-center gap-3 p-4 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition"
                >
                  <Check size={20} className="text-green-400 flex-shrink-0" />
                  <span className="text-white">{feat}</span>
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
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Flexible Pricing Plans
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {feature.pricing.map((plan, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                    plan.popular
                      ? "border-2 border-blue-500 bg-gradient-to-br from-slate-800 to-slate-900 transform md:scale-105"
                      : "border border-slate-700 bg-slate-800/30"
                  } p-8 hover:shadow-2xl hover:shadow-blue-500/20`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                      Popular
                    </div>
                  )}

                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">
                      {plan.price}
                    </span>
                    <span className="text-slate-400 ml-2">{plan.period}</span>
                  </div>

                  <button
                    className={`w-full py-3 rounded-lg font-semibold mb-8 transition ${
                      plan.popular
                        ? "bg-blue-500 hover:bg-blue-600 text-white"
                        : "border border-slate-600 text-white hover:border-blue-500 hover:bg-blue-500/10"
                    }`}
                  >
                    Get Started
                  </button>

                  <ul className="space-y-4">
                    {plan.features.map((pf, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <Check size={18} className="text-green-400 flex-shrink-0 mt-1" />
                        <span className="text-slate-300 text-sm">{pf}</span>
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
            className="mt-20 p-10 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to get started?
            </h3>
            <p className="text-slate-300 mb-6">
              Contact us today to discuss how we can help your business.
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

export default FeatureDetailPage;
