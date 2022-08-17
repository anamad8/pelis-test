import React from "react";
import {ContextProvider} from './Context/Context'
import { Routes, Route} from "react-router-dom";
import Login from "./Componets/Login/Login";
import Registro from "./Componets/Registro/Registro";
import Home from "./Componets/Home/Home";
import { ProtectedRoute } from "./Componets/ProtectedRoute/ProtectedRoute"

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

          </Routes>

      </ContextProvider>
  );
}

export default App;
