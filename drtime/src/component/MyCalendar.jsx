import Calendar from 'react-calendar';
import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css'; 
import Header from './Header';

function AvailableHours({ selectedDate }) {
  const [availableHours, setAvailableHours] = useState([]);

  // Función para cargar las horas disponibles basadas en la fecha seleccionada
  const loadAvailableHours = () => {
    // Aquí llamada a backend para obtener las horas disponibles
    // Por ahora ejemplo estático
    const exampleAvailableHours = [
      '09:00',
      '09:30',
      '09:50',
      '10:00',
      '10:25',
      '10:40',
      '11:00',
      '11:20',
      '11:40',
      '14:00'
    ];
    setAvailableHours(exampleAvailableHours);
  };

  // Cargar las horas disponibles cuando la fecha seleccionada cambie
  React.useEffect(() => {
    if (selectedDate) {
      loadAvailableHours();
    }
  }, [selectedDate]);

  return (
    <div>
      {selectedDate && (
        <div>

          <div className=''>
             <h1 className='flex justify-center text-2xl text-purple-700 font-bold mb-4'> Verfügbarkeit {selectedDate.toDateString()}</h1>
          </div>

          <div className='grid grid-cols-2'>
            {availableHours.map((hour, index) => (
              <button
                key={index}
                className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 
                rounded-full flex justify-center items-center text-white font-bold text-xl w-40 h-14 m-3"
              >
                {hour}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function MyCalendar() {
  const [selectedDate, setSelectedDate] = useState(null); // Inicialmente, no hay fecha seleccionada

  // Función para manejar el cambio de fecha en el calendario
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>


      <div>
        <Header />
      </div>


        <div className="flex flex-col items-center justify-center mt-10">
            <div className="mb-8">
              <Calendar
                onChange={handleDateChange}
                value={selectedDate}
                selectRange={false} // Permite seleccionar solo un día
                tileContent={({ date, view }) => {
                  if (view === 'month' && date.toDateString() === selectedDate?.toDateString()) {
                    return <div className="selected-day "></div>;
                  }
                }}
                formatShortWeekday={(locale, date) => date.toLocaleDateString(locale, { weekday: 'short' })}
                formatMonthYear={(locale, date) => {
                  const options = { month: 'long', year: 'numeric' };
                  return date.toLocaleDateString(locale, options);
                }}
                
                prevLabel={<span className="text-3xl text-purple-700 rounded-md bg-blue-200 p-1">&lt;</span>}
                nextLabel={<span className="text-3xl text-purple-700 bg-blue-200 p-1 rounded-md ">&gt;</span>}
              />
            </div>

              <div>
                  <AvailableHours selectedDate={selectedDate} />
              </div>
      </div>

  </div>
);
}