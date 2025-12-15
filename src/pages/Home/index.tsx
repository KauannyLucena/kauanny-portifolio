import { About } from "../../components/About";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { Projects } from "../../components/Projects";

import { ToastContainer } from 'react-toastify';
import { Stacks } from "../../components/Stacks";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Stacks />
      <About />
      <Projects />
      <Footer />

      <ToastContainer />
    </>
  );
}

export default Home;