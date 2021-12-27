import ExperinceSec from "./components/ExperinceSec";
import MainSec from "./components/MainSec";
import Navbar from "./components/Navbar";
import ProjectsSec from "./components/ProjectsSec";
import Space from "./SubComponents/Space";
import "./css/style.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainSec />
      <Space />
      <ExperinceSec />
      <Space />
      <ProjectsSec />
      <Footer />
    </div>
  );
}

export default App;
