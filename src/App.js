import React from "react";
import {ContextProvider} from './Context/Context'
import { Routes, Route} from "react-router-dom";
import Login from "./Componets/Login/Login";
import Registro from "./Componets/Registro/Registro";
import Home from "./Componets/Home/Home";
import { ProtectedRoute } from "./Componets/ProtectedRoute/ProtectedRoute"
import Marvel from "./Componets/Page/Marvel";
import Disney from "./Componets/Page/Disney";
import Pixar from "./Componets/Page/Pixar";
import StarWars from "./Componets/Page/StarWars";
import NationalGeographicn from "./Componets/Page/NationalGeographicn";


function App() {
  return (
      <ContextProvider>

        <Routes>

          <Route path="/"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
            />
            <Route exact path="/Login" element={<Login/>} /> 
            <Route exact path="/Registro" element={<Registro/>}/>

            <Route exact path="/Disney" element={<Disney/>} />
            <Route exact path="/Marvel" element={<Marvel/>} />
            <Route exact path="/Pixar" element={<Pixar/>} />
            <Route exact path="/StarWars" element={<StarWars/>} />
            <Route exact path="/NationalGeographicn" element={<NationalGeographicn/>} />
          

          </Routes>

      </ContextProvider>
  );
}

export default App;
