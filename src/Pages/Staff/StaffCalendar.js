import React,{useState} from 'react'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
// import '../../../node_modules/react-calendar/@fullcalendar/common/main.css'; // Updated path
// import '../../../node_modules/react-calendar/@fullcalendar/daygrid/main.css'; // Updated path
// import '../../../node_modules/react-calendar/@fullcalendar/timegrid/main.css'; // Updated path
import SuperadminSidebar from '../../Components/SuperadminSidebar';
import Navbar from '../../Components/Navbar'
export const StaffCalendar = () => {


  const [events, setEvents] = useState([
    { title: 'Event 1', date: '2024-08-06' },
    { title: 'Event 2', date: '2024-08-07' },
  ]);

  const handleDateClick = (arg) => {
    const newEvent = { title: 'New Event', date: arg.dateStr };
    setEvents([...events, newEvent]);
  };
  return (


    <> 
    <Navbar/>
    <br/>
    <br/>
    <br/>
    <br/>

     <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-2'>
          <SuperadminSidebar/>
          </div> 
          <div className='col-lg-10'>
          
    <div className='container-fluid p-4'>
    <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        events={events}
        dateClick={handleDateClick}
        selectable={true}
      />
    </div>
          </div>
          </div>
    </div>
   </>
  )
}
export default StaffCalendar