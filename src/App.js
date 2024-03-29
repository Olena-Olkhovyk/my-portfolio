import "./App.css";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Resume from "./resume/Resume";

function App() {
  return (
    <main className="main">
      <Home />
      <Services />
      <Skills />
      <Portfolio />
      <Resume />
    </main>
  );
}

export default App;
