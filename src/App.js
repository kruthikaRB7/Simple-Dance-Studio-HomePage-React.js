import React from "react";
import Hero from './Components/Hero';
import Navbar from "./Components/Navbar";
import Offers from "./Components/Offers";
import Plan from "./Components/Plan";
import Achievement from "./Components/Achievement";
import ImageSlider from "./Components/ImageSlider";
import Footer from "./Components/Footer";
import Registration from "./Components/Registration";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Offers />
      <Plan />
      <Achievement />
      <ImageSlider />
      <Footer />
      <Registration />
    </div>
  );
}

export default App;