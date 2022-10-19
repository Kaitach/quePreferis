import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./paginas/HomePage";
import Reglas from "./paginas/Reglas";
import Error404 from "./paginas/Error404";
import Juego from "./paginas/Juego";
import Formulario from "./paginas/Formulario";
import './index.css'


  
export default function App() {
  return (

      <main  >

          <BrowserRouter>           
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/Reglas" element={<Reglas />} />
          <Route path="/Juego" element={<Juego />} />     
          <Route path="/Formulario" element={<Formulario />} />

        <Route path="*" element={<Error404/>} />
     </Routes>
    </BrowserRouter>
</main>


  );
}