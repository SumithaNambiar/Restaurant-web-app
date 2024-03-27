import React, { useState } from "react";

function BookingPage() {

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("");

    const [availableTimes] = useState([
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00"
    ]);

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    const handleTimeChange = (event) => {
        setTime(event.target.value);
    };

    const handleGuestsChange = (event) => {
        setGuests(parseInt(event.target.value));
    };

    const handleOccasionChange = (event) => {
        setOccasion(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return (
        <div className="form">
            <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={date} onChange={handleDateChange} />
                
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" value={time} onChange={handleTimeChange}>
                    {availableTimes.map((timeOption, index) => (
                        <option key={index} value={timeOption}>{timeOption}</option>
                    ))}
                </select>
                
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={handleGuestsChange} />
                
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={handleOccasionChange}>
                    <option value="">Select an occasion</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Anniversary">Engagement</option>
                    <option value="Anniversary">Meeting</option>
                </select>
                
                <input type="submit" value="Make Your reservation" />
            </form>
        </div>
    );
}

export default BookingPage;
