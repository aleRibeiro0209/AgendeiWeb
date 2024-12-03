import "./appointments.css";
import Appointment from "../../components/Appointment";
import Navbar from "../../components/Navbar";
import { doctors, appointments } from "../../constants/data";
import { Link, useNavigate } from "react-router-dom";

const Appointments = () => {

  const navigate = useNavigate();

  const clickEdit = (id_appointment) => {
    navigate("/appointments/edit/" + id_appointment);
  }

  const clickDelete = (id_appointment) => {
    console.log("Delete " + id_appointment);
  }


  return (
    <div className="container-fluid mt-page">
      <Navbar />

      <div className="row justify-content-between align-items-center">
        <div className="col-lg-5 d-flex justify-content-center justify-content-lg-start align-items-center gap-sm-5 gap-2 mb-3 mb-lg-0 flex-column flex-sm-row">
          <h2>Agendamentos</h2>
          <Link to={"/appointments/add"} className="btn btn-outline-primary">
            Novo Agendamento
          </Link>
        </div>

        <div className="col-lg-7 d-flex align-items-center justify-content-center justify-content-sm-end px-sm-2 p-0">
          <div className="row w-100">
            <div className="col-md-3">
              <input id="startDate" type="date" className="form-control"/>
            </div>
            <div className="col-md-2 d-flex align-items-center justify-content-center m-2 m-md-0">
              <span>Até</span>
            </div>
            <div className="col-md-3">
              <input id="endDate" type="date" className="form-control"/>
            </div>

            <div className="col-12 col-md-4 mt-3 mt-md-0 d-flex gap-2">
              <select name="doctor" id="doctor" className="form-select">
                <option value="">Todos os médicos</option>
                {
                  doctors.map((doc) => {
                    return (
                      <option key={doc.id_doctor} value={doc.id_doctor}>{doc.name}</option>
                    )
                  })
                }
              </select>

              <button className="btn btn-primary">Filtrar</button>
            </div>
          </div>
        </div>
      </div>{/* Fim row menu de filtros*/}

      <div className="row mt-5">
        <div className="table-responsive">
          <table className="table table-hover border-top">
            <thead>
              <tr>
                <th className="p-3">Paciente</th>
                <th className="p-3">Médico</th>
                <th className="p-3">Serviço</th>
                <th className="p-3">Data/Hora</th>
                <th className="text-end p-3">Valor</th>
                <th className="col-buttons"></th>
              </tr>
            </thead>
            <tbody>
              {
                appointments.map((appoint) => {
                  return (
                    <Appointment
                      key={appoint.id_appointment}
                      id_appointment={appoint.id_appointment}
                      user={appoint.user}
                      service={appoint.service}
                      doctor={appoint.doctor}
                      specialty={appoint.specialty}
                      booking_date={appoint.booking_date}
                      booking_hour={appoint.booking_hour}
                      price={appoint.price}
                      clickEdit={clickEdit}
                      clickDelete={clickDelete}
                    />
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Appointments;