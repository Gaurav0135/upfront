import { Helmet } from "react-helmet-async";
import AboutSection from "../components/AboutSection";
import SiteLayout from "../layouts/SiteLayout";

const AboutPage = () => {
  return (
    <SiteLayout>
      <Helmet>
        <title>Upfront | About</title>
      </Helmet>
      <AboutSection />
    </SiteLayout>
  );
};

export default AboutPage;
