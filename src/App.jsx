import About from "./Components/About";
import Appointment from "./Components/Appointment";
import Banner from "./Components/Banner";
import BannerCards from "./Components/BannerCards";
import Faq from "./Components/Faq";
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonials";
import Footer from "./Shared/Footer";

import Navbar from "./Shared/Navbar";

function App() {
  return (
    <div className=" font-inter text-[#020043]">
      <Navbar />
      <Banner />
      <BannerCards />
      <About/>
      <Services/>
      <Testimonials/>
      <Faq/>
      <Appointment/>
      <Footer/>
    </div>
  );
}

export default App;
