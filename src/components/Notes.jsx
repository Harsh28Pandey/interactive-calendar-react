import { useEffect, useState } from "react";

export default function Notes({ range }) {
    const [note, setNote] = useState("");

    const key = JSON.stringify(range);

    useEffect(() => {
        const saved = localStorage.getItem(key);
        setNote(saved || "");
    }, [key]);

    const save = () => {
        localStorage.setItem(key, note);
        alert("Saved!");
    };

    return (
        <div className="notes">
            <h3>📝 Notes</h3>
            <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
            />
            <button onClick={save}>Save</button>
        </div>
    );
}