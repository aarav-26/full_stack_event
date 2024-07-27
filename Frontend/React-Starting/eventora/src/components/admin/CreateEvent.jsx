import React, { useState } from 'react';
import './CreateEvent.css';

const CreateEvent = () => {
    const [eventName, setEventName] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventTime, setEventTime] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [eventGuest, setEventGuest] = useState('');
    const [eventCategory, setEventCategory] = useState('');
    const [eventImage, setEventImage] = useState(null);
    const [eventPoster, setEventPoster] = useState(null);
    const [formattedEventTime, setFormattedEventTime] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newEvent = {
            eventName,
            eventDate,
            eventTime: formattedEventTime,
            eventDescription,
            eventGuest,
            eventCategory,
            // Convert images to base64
            eventImage: eventImage ? await convertImageToBase64(eventImage) : null,
            eventPoster: eventPoster ? await convertImageToBase64(eventPoster) : null,
        };

        try {
            const response = await fetch('http://localhost:8084/events/add_event', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newEvent),
            });

            if (response.ok) {
                alert('Event Created Successfully!');
                // Reset form
                setEventName('');
                setEventDate('');
                setEventTime('');
                setEventDescription('');
                setEventGuest('');
                setEventCategory('');
                setEventImage(null);
                setEventPoster(null);
                setFormattedEventTime('');
            } else {
                alert('Failed to create event.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while creating the event.');
        }
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setEventImage(file);
    };

    const handlePosterUpload = (e) => {
        const file = e.target.files[0];
        setEventPoster(file);
    };

    const handleTimeChange = (e) => {
        const time = e.target.value;
        setEventTime(time);
        setFormattedEventTime(formatTime(time));
    };

    const formatTime = (timeString) => {
        const [hour, minute] = timeString.split(':').map(Number);
        const ampm = hour >= 12 ? 'PM' : 'AM';
        const formattedHour = hour % 12 || 12; // Convert hour to 12-hour format
        return `${formattedHour}:${minute.toString().padStart(2, '0')} ${ampm}`;
    };

    // Convert image to base64
    const convertImageToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    };

    return (
        <div className="create-event-main-container">
            <div className="event-info-container">
                <h2>Hosting Events</h2>
                <p>Welcome to the event creation page. Before you proceed with filling out the form, please review the following guidelines and steps:</p>
                <h3>Event Hosting Guidelines:</h3>
                <ul>
                    <li>Ensure all event details are accurately provided.</li>
                    <li>Upload a clear and relevant event image and poster.</li>
                    <li>Double-check the date and time for any conflicts with other scheduled events.</li>
                    <li>Specify all categories and guest information correctly to ensure a smooth event planning process.</li>
                </ul>
                <h3>Steps to Create an Event:</h3>
                <ol>
                    <li><strong>Event Name:</strong> Enter the title of your event. This should be brief but descriptive enough to attract attendees.</li>
                    <li><strong>Event Date:</strong> Select the date of the event. Make sure this is a date that works for all key participants and venues.</li>
                    <li><strong>Event Time:</strong> Choose the start time for the event. Ensure that it aligns with the availability of all key participants and resources.</li>
                    <li><strong>Event Description:</strong> Provide a detailed description of the event. Include key activities, objectives, and any special instructions for attendees.</li>
                    <li><strong>Guest List:</strong> Enter the names of key guests or speakers who will be attending. This helps in organizing seating and other arrangements.</li>
                    <li><strong>Category:</strong> Specify the category of the event (e.g., conference, seminar, workshop). This helps in classifying and promoting the event appropriately.</li>
                    <li><strong>Event Poster:</strong> Upload a high-quality image that represents the event. This image will be used for promotional purposes and should be relevant to the event.</li>
                    <li><strong>Event Image:</strong> Upload a high-quality image related to the event.</li>
                </ol>
                <p>If you have any questions or need assistance while filling out the form, please contact our support team for help.</p>
            </div>

            <div className="create-event-container">
                <h1>Create Event</h1>
                <form onSubmit={handleSubmit} className="create-event-form">
                    <div className="form-group">
                        <label htmlFor="event-name">Event Name</label>
                        <input
                            type="text"
                            id="event-name"
                            value={eventName}
                            onChange={(e) => setEventName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="event-date">Event Date</label>
                        <input
                            type="date"
                            id="event-date"
                            value={eventDate}
                            onChange={(e) => setEventDate(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="event-time">Event Time</label>
                        <input
                            type="time"
                            id="event-time"
                            value={eventTime}
                            onChange={handleTimeChange}
                            required
                        />
                        <p>Selected Time: {formattedEventTime}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="event-description">Event Description</label>
                        <textarea
                            id="event-description"
                            value={eventDescription}
                            onChange={(e) => setEventDescription(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="event-guest">Guest</label>
                        <input
                            type="text"
                            id="event-guest"
                            value={eventGuest}
                            onChange={(e) => setEventGuest(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="event-category">Category</label>
                        <select
                            id="event-category"
                            value={eventCategory}
                            onChange={(e) => setEventCategory(e.target.value)}
                            required
                        >
                            <option value="" disabled>Select Category</option>
                            <option value="cultural">Cultural</option>
                            <option value="competitions">Competitions</option>
                            <option value="concert">Concert</option>
                            <option value="others">Others</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="event-poster">Event Poster</label>
                        <input
                            type="file"
                            id="event-poster"
                            onChange={handlePosterUpload}
                            accept="image/*"
                            required
                        />
                        {eventPoster && <img src={URL.createObjectURL(eventPoster)} alt="Event Poster Preview" className="event-preview-image" />}
                    </div>
                    <div className="form-group">
                        <label htmlFor="event-image">Event Image</label>
                        <input
                            type="file"
                            id="event-image"
                            onChange={handleImageUpload}
                            accept="image/*"
                            required
                        />
                        {eventImage && <img src={URL.createObjectURL(eventImage)} alt="Event Image Preview" className="event-preview-image" />}
                    </div>
                    <button type="submit" className="submit-button">Create Event</button>
                </form>
            </div>
        </div>
    );
};

export default CreateEvent;
