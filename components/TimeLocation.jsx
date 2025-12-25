"use client";

import { memo, useEffect, useState, useCallback } from "react";

function TimeLocation() {
    const [time, setTime] = useState("");
    const location = "Bangalore";

    const updateTime = useCallback(() => {
        const now = new Date();
        const formatted = now.toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
        });
        setTime(formatted);
    }, []);

    useEffect(() => {
        updateTime();
        const timer = setInterval(updateTime, 60000); // Update every minute instead of every second for better performance
        return () => clearInterval(timer);
    }, [updateTime]);

    return (
        <div className="flex items-center gap-1 py-0 text-gray-600 md:text-xl sm:text-base">
            <span>{time}</span>
            <span className="opacity-40">•</span>
            <span>{location}</span>
        </div>
    );
}

export default memo(TimeLocation);
