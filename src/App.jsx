import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Productive from "./components/Productive";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Productive />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;