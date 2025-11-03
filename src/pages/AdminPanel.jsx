import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button, Table, Modal, Alert } from 'react-bootstrap';
import { PlusCircle, Edit, Trash2, Save, XCircle } from 'lucide-react';
import axios from 'axios'; 

const API_BASE_URL = 'http://localhost:5000/api/events';

// Modal Component
const EventFormModal = ({ modalShow, resetForm, handleAddEdit, formData, handleInputChange, handleDateChange, editingEvent, error }) => (
    <Modal show={modalShow} onHide={resetForm} centered size="lg" backdrop="static" className="admin-modal">
        <Modal.Header closeButton className="bg-dark text-light border-secondary">
            <Modal.Title>{editingEvent ? 'Edit Event' : 'Add New Event'}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-light">
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleAddEdit} encType="multipart/form-data">
                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Artist Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="artist" 
                                value={formData.artist} 
                                onChange={handleInputChange} 
                                required 
                                className="bg-secondary text-light border-dark" 
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Set / Genre</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="set" 
                                value={formData.set} 
                                onChange={handleInputChange} 
                                required 
                                className="bg-secondary text-light border-dark" 
                            />
                        </Form.Group>
                        
                    </Col>


                            <Form.Group className="mb-3">
  <Form.Label>Event Type</Form.Label>
  <Form.Control
    type="text"
    name="eventType"
    value={formData.eventType}
    onChange={handleInputChange} 
    placeholder="Enter event type (e.g. DJ Night, Live Concert)"
  />
</Form.Group>

                </Row>

                <Row className="mb-3">
                    <Col md={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Date (YYYY-MM-DD)</Form.Label>
                            <Form.Control 
                                type="date" 
                                name="eventDate" 
                                value={formData.eventDate} 
                                onChange={handleDateChange} 
                                required 
                                className="bg-secondary text-light border-dark" 
                            />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Day Display (auto generated)</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="dayDisplay" 
                                value={formData.dayDisplay} 
                                readOnly 
                                className="bg-secondary text-light border-dark" 
                            />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Time (e.g., 9 PM - 3 AM)</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="time" 
                                value={formData.time} 
                                onChange={handleInputChange} 
                                required 
                                className="bg-secondary text-light border-dark" 
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Location</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="location" 
                                value={formData.location} 
                                onChange={handleInputChange} 
                                required 
                                className="bg-secondary text-light border-dark" 
                            />
                        </Form.Group>
                    </Col>
                </Row>

                {/* <Form.Group className="mb-3">
                    <Form.Label>Event Image</Form.Label>
                    <Form.Control 
                        type="file" 
                        accept="image/*" 
                        onChange={(e) => handleInputChange({ target: { name: 'imageFile', value: e.target.files[0] } })} 
                        className="bg-secondary text-light border-dark"
                        required={!editingEvent}
                    />
                </Form.Group> */}
                <Form.Group className="mb-3">
  <Form.Label>Event Image</Form.Label>
  <Form.Control
    type="file"
    accept="image/*"
    onChange={(e) =>
      handleInputChange({
        target: { name: 'imageFile', value: e.target.files[0], fileObject: e.target.files[0] }
      })
    }
    className="bg-secondary text-light border-dark"
    required={!editingEvent}
  />

  {formData.imagePreview && (
    <div className="image-preview-box mt-2">
      <img
        src={formData.imagePreview}
        alt="Preview"
        style={{
          width: '100px',
          height: '100px',
          objectFit: 'cover',
          borderRadius: '6px'
        }}
      />
    </div>
  )}
</Form.Group>


                <Form.Group className="mb-3">
                    <Form.Label>Short Description</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={2} 
                        name="description" 
                        value={formData.description} 
                        onChange={handleInputChange} 
                        required 
                        className="bg-secondary text-light border-dark" 
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Event Details</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={4} 
                        name="details" 
                        value={formData.details} 
                        onChange={handleInputChange} 
                        required 
                        className="bg-secondary text-light border-dark" 
                    />
                </Form.Group>

                <div className="d-flex justify-content-end mt-4">
                    <Button variant="secondary" onClick={resetForm} className="me-2 d-flex align-items-center">
                        <XCircle size={18} className="me-1" /> Cancel
                    </Button>
                    <Button variant="success" type="submit" className="d-flex align-items-center">
                        <Save size={18} className="me-1" /> {editingEvent ? 'Save Changes' : 'Add Event'}
                    </Button>
                </div>
            </Form>
        </Modal.Body>
    </Modal>
);

// Admin Panel Component
const AdminPanel = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [modalShow, setModalShow] = useState(false);
    const [editingEvent, setEditingEvent] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
const [showSuccess, setShowSuccess] = useState(false);

    const [formData, setFormData] = useState({
        artist: '', set: '', eventDate: '', dayDisplay: '', time: '', location: '', description: '', details: '', imageFile: null
    });

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(API_BASE_URL);
            setEvents(response.data);
        } catch (err) {
            setError('Failed to fetch events: ' + err.message);
        } finally {
            setLoading(false);
        }
    };

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData(prev => ({ ...prev, [name]: value }));
    // };
    const handleInputChange = (e) => {
  const { name, value, fileObject } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
    ...(fileObject && { imagePreview: URL.createObjectURL(fileObject) })
  }));
};


    const handleDateChange = (e) => {
        const date = e.target.value;
        setFormData(prev => ({ ...prev, eventDate: date }));

        if(date){
            const dayNames = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
            const monthNames = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
            const d = new Date(date);
            const day = dayNames[d.getDay()];
            const month = monthNames[d.getMonth()];
            const dayNumber = d.getDate();
            setFormData(prev => ({ ...prev, dayDisplay: `${day} ${month} ${dayNumber}` }));
        }
    };

    const resetForm = () => {
        setFormData({ artist: '', set: '', eventDate: '', dayDisplay: '', time: '', location: '', description: '', details: '', imageFile: null });
        setEditingEvent(null);
        setModalShow(false);
        setError(null);
    };


    const handleAddEdit = async (e) => {
    e.preventDefault();
    try {
        const data = new FormData();
        Object.keys(formData).forEach(key => {
            if(formData[key]) data.append(key, formData[key]);
        });

        if (editingEvent) {
            await axios.put(`${API_BASE_URL}/${editingEvent._id}`, data, { headers: { 'Content-Type': 'multipart/form-data' } });
        } else {
            await axios.post(API_BASE_URL, data, { headers: { 'Content-Type': 'multipart/form-data' } });
        }

        await fetchEvents();
        resetForm();

        // ✅ Show success toast
        setSuccessMessage(editingEvent ? 'Event updated successfully!' : 'Event added successfully!');
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);

    } catch (err) {
        setError('Failed to add event: ' + (err.response?.data?.message || err.message));
    }
};


//     const handleAddEdit = async (e) => {
//         e.preventDefault();
//         try {
//             const data = new FormData();
//             Object.keys(formData).forEach(key => {
//                 if(formData[key]) data.append(key, formData[key]);
//             });

//             if (editingEvent) {
//     await axios.put(`${API_BASE_URL}/${editingEvent._id}`, data, { headers: { 'Content-Type': 'multipart/form-data' } });
// } else {
//     await axios.post(API_BASE_URL, data, { headers: { 'Content-Type': 'multipart/form-data' } });
// }
//             fetchEvents();
//             resetForm();
//         } catch (err) {
//             setError('Failed to add event: ' + (err.response?.data?.message || err.message));
//         }
//     };

    // const handleEditClick = (event) => {
    //     setEditingEvent(event);
    //     const dateString = event.eventDate ? new Date(event.eventDate).toISOString().split('T')[0] : '';
    //     setFormData({
    //         artist: event.artist || '', 
    //         set: event.set || '', 
    //         eventDate: dateString,
    //         dayDisplay: event.dayDisplay || '', 
    //         time: event.time || '', 
    //         location: event.location || '', 
    //         description: event.description || '', 
    //         details: event.details || '', 
    //         imageFile: null
    //     });
    //     setModalShow(true);
    // };
    const handleEditClick = (event) => {
  setEditingEvent(event);
  const dateString = event.eventDate ? new Date(event.eventDate).toISOString().split('T')[0] : '';

  setFormData({
    artist: event.artist || '',
    set: event.set || '',
    eventDate: dateString,
    dayDisplay: event.dayDisplay || '',
    time: event.time || '',
    location: event.location || '',
    description: event.description || '',
    details: event.details || '',
    imageFile: null,
    imagePreview: event.imageUrl
      ? (event.imageUrl.startsWith('http')
          ? event.imageUrl
          : `http://localhost:5000${event.imageUrl}`)
      : null,
  });

  setModalShow(true);
};


    const handleDelete = async (eventId) => {
        if (window.confirm('Are you sure you want to delete this event?')) {
            setError(null);
            try {
                await axios.delete(`${API_BASE_URL}/${eventId}`);
                fetchEvents();
            } catch (err) {
                setError('Failed to delete event: ' + (err.response?.data?.message || err.message));
            }
        }
    };

    return (
        
        <div className="admin-panel-page" style={{ minHeight: '100vh', padding: '100px 0', backgroundColor: '#1f2937', color: '#f3f4f6' }}>
            {showSuccess && (
    <Alert 
        variant="success" 
        onClose={() => setShowSuccess(false)} 
        dismissible 
        className="d-flex align-items-center position-fixed top-0 end-0 m-3 shadow-lg"
        style={{ zIndex: 1050 }}
    >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="green" className="bi bi-check-circle me-2" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.97 11.03a.75.75 0 0 0 1.07 0l3.992-3.992a.75.75 0 1 0-1.06-1.06L7.5 9.439 5.53 7.47a.75.75 0 1 0-1.06 1.06l2.5 2.5z"/>
        </svg>
        {successMessage}
    </Alert>
)}

            <Container>
                <h1 className="mb-4 text-center text-info">Event Administration Panel</h1>
                {error && <Alert variant="danger">{error}</Alert>}
                <Card className="shadow-lg bg-dark text-light border-secondary">
                    <Card.Header className="d-flex justify-content-between align-items-center border-secondary">
                        <h2 className="h4 mb-0">Upcoming Events</h2>
                        <Button 
                            variant="info" 
                            onClick={() => { setEditingEvent(null); setModalShow(true); }}
                            className="d-flex align-items-center"
                        >
                            <PlusCircle size={20} className="me-1" /> Add New Event
                        </Button>
                    </Card.Header>
                    <Card.Body>
                        {loading ? <p>Loading events...</p> : (
                            <Table striped bordered hover responsive variant="dark">
                                <thead>
                                    <tr>
                                        <th>Artist</th>
                                        <th>Set</th>
                                        <th>Event Type</th>
                                        <th>Date</th>
                                        <th>Day Display</th>
                                        <th>Time</th>
                                        <th>Location</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {events.map(event => (
                                        <tr key={event._id}>
                                            <td>{event.artist}</td>
                                            <td>{event.set}</td>
                                            <td>{event.eventType || 'N/A'}</td>
                                            <td>{event.eventDate?.split('T')[0]}</td>
                                            <td>{event.dayDisplay}</td>
                                            <td>{event.time}</td>
                                            <td>{event.location}</td>
                                            <td>
                                                <Button variant="warning" size="sm" className="me-2" onClick={() => handleEditClick(event)}>
                                                    <Edit size={16} />
                                                </Button>
                                                <Button variant="danger" size="sm" onClick={() => handleDelete(event._id)}>
                                                    <Trash2 size={16} />
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        )}
                    </Card.Body>
                </Card>
            </Container>

            <EventFormModal 
                modalShow={modalShow} 
                resetForm={resetForm} 
                handleAddEdit={handleAddEdit} 
                formData={formData} 
                handleInputChange={handleInputChange} 
                handleDateChange={handleDateChange} 
                editingEvent={editingEvent}
                error={error}
            />
        </div>
    );
};

export default AdminPanel;
