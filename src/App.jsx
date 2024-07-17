import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Superhero from "./components/Superhero";
import Trending from "./components/Trending";
function App() {
  return (
    <>
      <div className="webBg">
        <Navbar />
        <Intro />
      </div>
      <Trending />
      <Superhero />
      <Footer />
      <div className="gotop bg-warning text-dark p-2 rounded">
        <a href="#gotop" className="nav-link">
          Go to top
        </a>
      </div>
    </>
  );
}

export default App;
