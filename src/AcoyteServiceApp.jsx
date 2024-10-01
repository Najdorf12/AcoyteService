import Home from "./pages/Home";
import About from "./pages/About";
import Details from "./pages/Details";
import Contact from "./pages/Contact";
import Experience from "./components/Experience";
import { Canvas } from "@react-three/fiber";
import { ReactLenis, useLenis } from "lenis/react";

function AcoyteServiceApp() {
  /*   const lenis = useLenis(({ scroll }) => {
    // called every scroll
  }); */

  return (
    <ReactLenis root>
      <main className="relative w-full bg-white min-h-screen overflow-hidden ">
        <div className="w-full h-screen fixed z-30 overflow-hidden lg:block">
          <Canvas>
            <Experience />
          </Canvas>
        </div>

        <Home />
        <About />
        <Details />
        <Contact />
      </main>
    </ReactLenis>
  );
}

export default AcoyteServiceApp;
