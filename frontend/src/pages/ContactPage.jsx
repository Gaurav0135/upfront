import { Helmet } from "react-helmet-async";
import ContactSection from "../components/ContactSection";
import SiteLayout from "../layouts/SiteLayout";

const ContactPage = () => {
  return (
    <SiteLayout>
      <Helmet>
        <title>Upfront | Contact</title>
      </Helmet>
      <ContactSection />
    </SiteLayout>
  );
};

export default ContactPage;
