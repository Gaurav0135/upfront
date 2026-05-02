import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SiteLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default SiteLayout;
