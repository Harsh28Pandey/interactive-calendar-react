import { motion } from "framer-motion";

export default function Day({
    date,
    range,
    onMouseDown,
    onMouseEnter,
}) {
    if (!date) return <div className="empty"></div>;

    const isStart =
        range.start &&
        date.toDateString() === range.start.toDateString();

    const isEnd =
        range.end &&
        date.toDateString() === range.end.toDateString();

    const inRange =
        range.start &&
        range.end &&
        date > range.start &&
        date < range.end;

    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`day ${isStart ? "start" : ""} ${isEnd ? "end" : ""
                } ${inRange ? "range" : ""}`}
            onMouseDown={() => onMouseDown(date)}
            onMouseEnter={() => onMouseEnter(date)}
        >
            {date.getDate()}
        </motion.div>
    );
}