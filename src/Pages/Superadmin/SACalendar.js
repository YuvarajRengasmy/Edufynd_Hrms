import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import SuperadminSidebar from '../../Components/SuperadminSidebar';
import Navbar from '../../Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const SACalendar = () => {
  const [events, setEvents] = useState([]);
  const [modalData, setModalData] = useState({ show: false, title: '', date: '', isLeave: false, id: null });

  const handleDateClick = (arg) => {
    setModalData({ show: true, title: '', date: arg.dateStr, isLeave: false, id: null });
  };

  const handleEventClick = (arg) => {
    setModalData({ show: true, title: arg.event.title, date: arg.event.startStr, isLeave: arg.event.extendedProps.type === 'leave', id: arg.event.id });
  };

  const handleEventChange = (changeInfo) => {
    // Create a new array with updated events
    const updatedEvents = events.map(event =>
      event.id === changeInfo.event.id
        ? { ...event, date: changeInfo.event.startStr }
        : event
    );
    setEvents(updatedEvents);
  };

  const handleModalSave = () => {
    const { title, date, isLeave, id } = modalData;

    if (id) {
      // Update existing event
      const updatedEvents = events.map(event =>
        event.id === id
          ? { ...event, title, date, type: isLeave ? 'leave' : 'event' }
          : event
      );
      setEvents(updatedEvents);
    } else {
      // Add new event
      const newEvent = { id: events.length + 1, title, date, type: isLeave ? 'leave' : 'event' };
      setEvents([...events, newEvent]);
    }
    setModalData({ show: false, title: '', date: '', isLeave: false, id: null });
  };

  const renderEventContent = (eventInfo) => {
    return (
      <div className={eventInfo.event.extendedProps.type}>
        {eventInfo.event.extendedProps.type === 'leave' ? `Leave: ${eventInfo.event.title}` : eventInfo.event.title}
      </div>
    );
  };

  const handleClose = () => setModalData({ ...modalData, show: false });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setModalData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-3 '>
            <SuperadminSidebar />
          </div>
          <div className='col-lg-9'>
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
                eventClick={handleEventClick}
                eventChange={handleEventChange}
                eventContent={renderEventContent}
                editable={true}
                selectable={true}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bootstrap Modal */}
      <div className={`modal fade ${modalData.show ? 'show' : ''}`} style={{ display: modalData.show ? 'block' : 'none' }} tabIndex="-1" role="dialog"  aria-labelledby="..." aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Event Details</h5>
              <button type="button" className="btn-close" onClick={handleClose} aria-label="Close">
                
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  value={modalData.title}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="date">Date</label>
                <input
                  type="text"
                  className="form-control"
                  id="date"
                  name="date"
                  value={modalData.date}
                  readOnly
                />
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="isLeave"
                  name="isLeave"
                  checked={modalData.isLeave}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="isLeave">Is Leave</label>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-light border-0 px-4 py-2 fw-semibold text-capitalize" onClick={handleClose}>Close</button>
              <button type="button" className="btn btn-primary" onClick={handleModalSave}>Save</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SACalendar;
