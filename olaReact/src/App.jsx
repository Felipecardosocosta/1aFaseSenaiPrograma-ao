import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Perfil from "./pages/Perfil";
import Trilhas from "./pages/Trilhas";
import Eventos from "./pages/Eventos";
import Avaliacao from "./pages/Avaliacao";
import Navbar from "./components/Navbar";
import { AuthProvider, useAuth } from "./context/AuthContext";

function AppRoutes() {
  const { usuario } = useAuth();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/trilhas" />} />
        <Route path="/login" element={!usuario ? <Login /> : <Navigate to="/trilhas" />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/perfil" element={usuario ? <Perfil /> : <Navigate to="/login" />} />
        <Route path="/trilhas" element={<Trilhas />} />
        <Route path="/eventos" element={usuario ? <Eventos /> : <Navigate to="/login" />} />
        
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}





