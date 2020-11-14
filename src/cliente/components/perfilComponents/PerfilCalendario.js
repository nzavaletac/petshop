import React from "react";
import {Calendar, momentLocalizer} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
const eventos = [
  {
    id: 1,
    title: "Cita - Fortunato",
    start: new Date(2020, 10, 14, 10, 30, 0),
    end: new Date(2020, 10, 14, 11, 0, 0),
    desc: "Desparacitación ",
  },
  {
    id: 2,
    title: "Gomming - Baño Jack",
    start: new Date(2020, 10, 21, 13, 30, 0),
    end: new Date(2020, 10, 21, 15, 0, 0),
    desc: "Baño antipulgas",
  },
];

const PerfilCalendario = (props) => {
  console.log(props);

  const eventoSeleccionado = (e) => {
    console.log(e);
  };

  const slotSeleccionado = (e) => {
    console.log(e);
  };
  return (
    <>
      <h4 class="titulos mt-4" id="servicios">
        CALENDARIO
      </h4>
      <section className="container">
        <div className="row">
          <div className="col-12">
            <div className="card calendario">
              <div className="card-body">
                <Calendar
                  // selectable={true}
                  selectable
                  localizer={localizer}
                  events={eventos}
                  startAccessor="start"
                  andAccessor="end"
                  onSelectEvent={eventoSeleccionado}
                  onSelectSlot={slotSeleccionado}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PerfilCalendario;
