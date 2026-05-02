import { Helmet } from "react-helmet-async";
import PortfolioSection from "../components/PortfolioSection";
import SiteLayout from "../layouts/SiteLayout";

const PortfolioPage = () => {
  return (
    <SiteLayout>
      <Helmet>
        <title>Upfront | Portfolio</title>
      </Helmet>
      <PortfolioSection />
    </SiteLayout>
  );
};

export default PortfolioPage;
