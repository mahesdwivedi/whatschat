import React from "react";
import Appbar from "./components/appbar/index";
import CenteredGrid from "./components/sectionOne/index";
import "./App.css";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/sectionFour";
import SectionFive from "./components/SectionFive";
import SectionSix from "./components/sectionSix";
import SectionSeven from "./components/sectionSeven";
import Footer from "./components/footer"

function App() {
  return (
    <div>
      <Appbar />
      <CenteredGrid />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <Footer />
    </div>
  );
}

export default App;
