import { useState } from "react";
import Day from "./Day";
import { generateCalendar } from "../utils/dateUtils";

export default function Calendar({ range, setRange }) {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [dragging, setDragging] = useState(false);

    const days = generateCalendar(currentDate);

    const handleMouseDown = (date) => {
        setDragging(true);
        setRange({ start: date, end: null });
    };

    const handleMouseEnter = (date) => {
        if (!dragging) return;

        setRange((prev) => {
            if (!prev.start) return prev;

            return date > prev.start
                ? { start: prev.start, end: date }
                : { start: date, end: prev.start };
        });
    };

    const handleMouseUp = () => {
        setDragging(false);
    };

    const changeMonth = (dir) => {
        const d = new Date(currentDate);
        d.setMonth(d.getMonth() + dir);
        setCurrentDate(d);
    };

    return (
        <div className="calendar" onMouseUp={handleMouseUp}>
            <div className="calendar-header">
                <button onClick={() => changeMonth(-1)}>◀</button>
                <h2>
                    {currentDate.toLocaleString("default", { month: "long" })}{" "}
                    {currentDate.getFullYear()}
                </h2>
                <button onClick={() => changeMonth(1)}>▶</button>
            </div>

            <div className="grid">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                    <div key={d} className="day-name">
                        {d}
                    </div>
                ))}

                {days.map((date, i) => (
                    <Day
                        key={i}
                        date={date}
                        range={range}
                        onMouseDown={handleMouseDown}
                        onMouseEnter={handleMouseEnter}
                    />
                ))}
            </div>
        </div>
    );
}