import Navbar from "./Component/Navbar";
import "./App.css";
import HeroSection from "./Component/HeroSection";
import CardSection from "./Component/CardSection";
import VideoSection from "./Component/VideoSection";
import Moreinfo from "./Component/Moreinfo";
import Contact from "./Component/Contact";
import "./style.scss"

function App() {
  return (
    <div className="App">
      <div className="UpperSection">
        <Navbar />
        <HeroSection />
      <CardSection />
      <VideoSection />
      <Moreinfo />
      <Contact />
      </div>
    </div>
  );
}

export default App;
