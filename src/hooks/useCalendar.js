import { useState } from "react";

export default function useCalendar() {
    const [currentDate, setCurrentDate] = useState(new Date());

    const nextMonth = () => {
        const d = new Date(currentDate);
        d.setMonth(d.getMonth() + 1);
        setCurrentDate(d);
    };

    const prevMonth = () => {
        const d = new Date(currentDate);
        d.setMonth(d.getMonth() - 1);
        setCurrentDate(d);
    };

    return { currentDate, nextMonth, prevMonth };
}