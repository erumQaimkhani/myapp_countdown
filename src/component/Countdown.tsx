"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Countdown: React.FC = () => {
    const [time, setTime] = useState(0); // Time input by user
    const [isRunning, setIsRunning] = useState(false); // To track if countdown is running
    const [remainingTime, setRemainingTime] = useState(0); // Remaining countdown time

    useEffect(() => {
        let timer: NodeJS.Timer | null = null;

        if (isRunning && remainingTime > 0) {
            // Start the countdown
            timer = setInterval(() => {
                setRemainingTime((prev) => prev - 1);
            }, 1000);
        } else if (remainingTime === 0 && isRunning) {
            // Stop countdown when time reaches 0
            setIsRunning(false);
        }

        // Cleanup timer to avoid memory leaks
        return () => {
            if (timer) {
                clearInterval(time); // Fixed issue (was `clearInterval(time)`)
            }
        };
    }, [isRunning, remainingTime]);

    const handleStart = () => {
        if (time > 0 && !isRunning) {
            setRemainingTime(time);
            setIsRunning(true);
        }
    };

    const handlePause = () => {
        setIsRunning(false);
    };

    const handleReset = () => {
        setIsRunning(false);
        setRemainingTime(0);
        setTime(0);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 via-pink-400 to-red-300 p-4">
            {/* Image */}
            <Image
                src="/stopwatch.avif"
                alt="Stopwatch"
                className="mb-6 rounded-full "
                width={250}
                height={250}/>

            {/* Title */}
            
            {/* Input Field */}
            <input
                type="number"
                className="border-2 border-gray-300 bg-gray-50 p-2 text-black text-2xl rounded-md mb-4 w-64"
                placeholder="Enter time in seconds"
                value={time > 0 ? time : ""}
                onChange={(e) => setTime(Number(e.target.value))}
            />

            {/* Remaining Time */}
            <div className="text-4xl font-bold text-white mb-6">
                {remainingTime > 0 ? `${remainingTime} seconds remaining` : "Time's up!"}
            </div>

            {/* Buttons */}
            <div className="flex space-x-4">
                <button
                    onClick={handleStart}
                    className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg"
                >
                    Start
                </button>
                <button
                    onClick={handlePause}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
                >
                    Pause
                </button>
                <button
                    onClick={handleReset}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                >
                    Reset
                </button>
            </div>

            {/* Footer */}
            <footer className="text-lg font-semibold text-gray-800 mt-6">
                Made by:{" "}
                <span className="text-2xl font-bold text-red-500">Erum Azeemi Qaimkhani</span>
            </footer>
        </div>
    );
};

export default Countdown;
