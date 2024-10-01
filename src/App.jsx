import AcoyteServiceApp from "./AcoyteServiceApp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
/* import News from "./pages/News"; */

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AcoyteServiceApp />} />
          {/* <Route path="/news" element={<News />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
