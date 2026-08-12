import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Labs from "./components/Labs";
import About from "./components/About";
import Contact from "./components/Contact";
import { profile, pipeline, stats, work, labs, certifications } from "./data/content";
import "./App.css";

function App() {
  return (
    <>
      <Nav name={profile.name} />
      <main>
        <Hero profile={profile} pipeline={pipeline} />
        <Work items={work} />
        <Labs items={labs} />
        <About profile={profile} stats={stats} certifications={certifications} />
      </main>
      <Contact profile={profile} />
    </>
  );
}

export default App;
