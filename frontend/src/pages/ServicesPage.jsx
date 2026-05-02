import { Helmet } from "react-helmet-async";
import ServicesSection from "../components/ServicesSection";
import SiteLayout from "../layouts/SiteLayout";

const ServicesPage = () => {
  return (
    <SiteLayout>
      <Helmet>
        <title>Upfront | Services</title>
      </Helmet>
      <ServicesSection />
    </SiteLayout>
  );
};

export default ServicesPage;
