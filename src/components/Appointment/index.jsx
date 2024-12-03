
const Appointment = ({ id_appointment, user, service, doctor, specialty, booking_date, booking_hour, price, clickEdit, clickDelete }) => {

  const dt = new Date(booking_date);

  return (
    <tr>
      <td>{user}</td>
      <td>{doctor}</td>
      <td>{service}</td>
      <td>{
        new Intl.DateTimeFormat('pt-BR', {dataStyle: 'short'}).format(dt) + " " + 
        booking_hour + "h"
      }</td>
      <td className="text-end">{
        new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(price)
      }</td>
      <td className="text-end">
        <div className="d-flex justify-content-center gap-2">
          <button type="button" className="btn btn-sm btn-primary" onClick={() => clickEdit(id_appointment)}>
            <i className="bi bi-pencil-square"></i>
          </button>

          <button type="button" className="btn btn-sm btn-danger" onClick={() => clickDelete(id_appointment)}>
            <i className="bi bi-trash"></i>
          </button>
        </div>

      </td>
    </tr>
  );
}


export default Appointment;