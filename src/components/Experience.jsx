import { useLayoutEffect, useRef,useState,useEffect } from "react";
import { Sphere } from "./Sphere";
import {
  OrbitControls,
  Environment,
  PerspectiveCamera,
  Float,
} from "@react-three/drei";
import { GUI } from "dat.gui";

const Experience = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [groupPosition, setGroupPosition] = useState([0, 0, -314.6]);

  useEffect(() => {
    // Función para manejar el cambio de tamaño de la ventana
    const handleResize = () => {
      setWindowWidth(window.innerWidth);

      // Actualiza la posición del grupo basado en el tamaño de la ventana
      if (window.innerWidth > 700) {
        setGroupPosition([0, -35, -314.6]);
      } else {
        setGroupPosition([0, -30, -450]);
      }
    };

    // Agrega el evento de cambio de tamaño de ventana
    window.addEventListener("resize", handleResize);

    // Llama la función al montar para establecer la posición correcta
    handleResize();

    // Limpia el event listener al desmontar el componente
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
    <ambientLight intensity={2} />
      <spotLight position={[1.2, 10, 0]} angle={2} penumbra={1} intensity={6} />
      <Environment background={false} preset={"warehouse"} />
      <PerspectiveCamera makeDefault />
      <OrbitControls enableZoom={false} enabled={false} />
      
      {/* Pasamos la posición calculada aquí */}
      <group position={groupPosition} castShadow={true}>
        <Sphere />
      </group>
    </>
  );
};

export default Experience;
