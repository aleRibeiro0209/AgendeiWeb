import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Appointments from "../pages/Appointments";
import AppointmentAdd from "../pages/AppointmentAdd";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/appointments/add" element={<AppointmentAdd />} />
        <Route path="/appointments/edit/:id_appointment" element={<AppointmentAdd />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;