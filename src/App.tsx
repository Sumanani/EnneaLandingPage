import "./App.css";
import CoreValuesSection from "./components/CoreValuesSection";
import Home from "./components/Home";
import MissionSection from "./components/MissionSection";
import NavBar from "./components/Navbar";
import ServicesSection from "./components/ServicesSection";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <MissionSection />
      <CoreValuesSection />
      <ServicesSection />
    </>
  );
}

export default App;
