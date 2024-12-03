import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { doctors, doctors_services, horarios } from "../../constants/data";

const AppointmentAdd = () => {

  const { id_appointment } = useParams();

  return(
    <>
      <Navbar />

      <div className="container-fluid mt-page">
        <div className="row col-lg-6 offset-lg-3">
            <div className="col-12 mb-3 text-center">
              <h2>
                {
                  id_appointment > 0 ? "Editar Agendamento" : "Novo Agendamento"
                }
              </h2>
            </div>

            <div className="col-12 mb-3">
              <label htmlFor="doctor" className="form-label">Médico</label>
              <select name="doctor" id="doctor" className="form-select">
                <option value="">Selecione o médico</option>
                {
                  doctors.map((doc) => {
                    return (
                      <option key={doc.id_doctor} value={doc.id_doctor}>{doc.name}</option>
                    )
                  })
                }
              </select>
            </div>

            <div className="col-12 mb-3">
              <label htmlFor="service" className="form-label">Serviço</label>
              <select name="service" id="service" className="form-select">
                <option value="">Selecione o serviço</option>
                {
                  doctors_services.map((serv) => {
                    return (
                      <option key={serv.id_service} value={serv.id_service}>{serv.description}</option>
                    )
                  })
                }
              </select>
            </div>

            <div className="col-6">
              <label htmlFor="bookingDate" className="form-label">Data</label>
              <input type="date" className="form-control" id="bookingDate" />
            </div>

            <div className="col-6">
              <label htmlFor="bookingHour" className="form-label">Horário</label>
              <select name="bookingHour" id="bookingHour" className="form-select">
                <option value="">Selecione um Horário</option>
                {
                  horarios.map((h) => {
                    return (
                      <option key={h.value} value={h.value}>{h.label}</option>
                    );
                  })
                }
              </select>
            </div>

            <div className="col-12 mt-4">
              <div className="d-flex justify-content-end gap-3">
                <Link to={"/appointments"} className="btn btn-outline-primary">
                  Cancelar
                </Link>
                <button type="button" className="btn btn-primary">Salvar Dados</button>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default AppointmentAdd;