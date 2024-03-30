import "./App.css";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";
import Resume from "./Resume/Resume";

function App() {
  return (
    <main className="main">
      {/* <Home /> */}
      <Services />
      <Skills />
      <Portfolio />
      <Resume />
    </main>
  );
}

export default App;
