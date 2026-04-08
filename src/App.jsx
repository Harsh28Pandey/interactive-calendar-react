import React, { useState } from "react";
import Calendar from "./components/Calendar";
import Notes from "./components/Notes";
import Header from "./components/Header";
import "./index.css";

export default function App() {
    const [range, setRange] = useState({ start: null, end: null });

    return (
        <div className="app">
            <Header />

            <div className="container">
                <div className="left">
                    <img
                        src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80"
                        alt="calendar visual"
                    />
                </div>

                <div className="right">
                    <Calendar range={range} setRange={setRange} />
                    <Notes range={range} />
                </div>
            </div>
        </div>
    );
}