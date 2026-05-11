"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const oneSecondInMS = 1000;

export function Clock({
    className,
    hideSeconds,
    hideDate,
}: {
    className?: string;
    hideSeconds?: boolean;
    hideDate?: boolean;
}) {
    const [formattedTime, setFormattedTime] = useState("");
    const [formattedDate, setFormattedDate] = useState("");

    useEffect(() => {
        const update = () => {
            const _date = new Date();
            const timeOptions: Intl.DateTimeFormatOptions = hideSeconds
                ? { hour: "2-digit", minute: "2-digit" }
                : { hour: "2-digit", minute: "2-digit", second: "2-digit" };
            setFormattedTime(_date.toLocaleTimeString(undefined, timeOptions));
            const day = _date.getDate();
            const month = _date.toLocaleString("en-US", { month: "short" });
            const year = _date.getFullYear();
            setFormattedDate(`${day} ${month}, ${year}`);
        };

        update(); // render immediately
        const intervalId = setInterval(update, oneSecondInMS);
        return () => clearInterval(intervalId);
    }, [hideSeconds]);

    return (
        <div className={cn("text-nowrap", className)}>
            {formattedTime}
            {!hideDate && <br />}
            {!hideDate && formattedDate}
        </div>
    );
}

export function TimeOnApp() {
    const [startTime] = useState<Date>(new Date());
    const [timeOnSite, setTimeOnSite] = useState<number>(0);

    useEffect(() => {
        const update = () => {
            const elapsedTime = Math.floor(
                (new Date().getTime() - startTime.getTime()) / oneSecondInMS
            );
            setTimeOnSite(elapsedTime);
        };

        update();
        const intervalId = setInterval(update, oneSecondInMS);
        return () => clearInterval(intervalId);
    }, [startTime]);

    const formatTime = (seconds: number): string => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;
        return `${hours}h ${minutes}m ${remainingSeconds}s`;
    };

    return <span>{formatTime(timeOnSite)}</span>;
}
