import "../../styles/UI/Main.css";

import { Header } from "../UI/Header";


import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { RolesScreen } from "../productos/RolesScreen";
import { SolucionesTecnologicas } from "../productos/SolucionesTecnologicas";
import { Servicios } from "../productos/ServiciosEspecializados/Servicios";

export const Main = () => {
  const { usuario: user } = useSelector((state) => state.user);
  const { perfil, empresa, usuario } = user;
  return (
    <>
      <Header />
      <div className="main">
        <div className="info">
          <p>{empresa}</p>
          <p>{usuario}</p>
          <p>{perfil}</p>
        </div>
        <div className="contenedor">
          <Routes>
          
            <Route path='/productos/perfiles' replace element={ <RolesScreen /> } />
            <Route path='/productos/servicios' replace element={ <Servicios /> } />
            <Route path="/*" replace element={<SolucionesTecnologicas />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
