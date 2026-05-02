import { Helmet } from "react-helmet-async";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import SiteLayout from "../layouts/SiteLayout";

const WhyUsPage = () => {
  return (
    <SiteLayout>
      <Helmet>
        <title>Upfront | Why Us</title>
      </Helmet>
      <WhyChooseUsSection />
    </SiteLayout>
  );
};

export default WhyUsPage;
