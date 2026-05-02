import { Helmet } from "react-helmet-async";
import HeroSection from "../components/HeroSection";
import SiteLayout from "../layouts/SiteLayout";

const HomePage = () => {
  return (
    <SiteLayout>
      <Helmet>
        <title>Upfront | Build. Optimize. Grow.</title>
        <meta
          name="description"
          content="Upfront helps businesses grow with modern websites, SEO, and digital solutions."
        />
      </Helmet>
      <HeroSection />
    </SiteLayout>
  );
};

export default HomePage;
