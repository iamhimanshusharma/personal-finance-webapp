import React from "react";
import {
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function FinanceHealthGauge() {
    const percentage = 72;

    return (
        <div className="w-80 bg-white shadow rounded-2xl p-4 flex flex-col items-center">
            <h2 className="text-lg font-semibold mb-2">Finance Health</h2>
            <div className="w-56 h-28">
                <CircularProgressbarWithChildren
                    value={percentage}
                    circleRatio={0.5} // semi-circle
                    styles={buildStyles({
                        rotation: 0.75, // starts from left
                        strokeLinecap: "round",
                        trailColor: "#e5e7eb",
                        pathColor: `url(#gradient)`,
                    })}
                >
                    {/* gradient definition */}
                    <svg style={{ height: 0 }}>
                        <defs>
                            <linearGradient id="gradient" gradientTransform="rotate(90)">
                                <stop offset="0%" stopColor="#0ea5e9" />
                                <stop offset="100%" stopColor="#38bdf8" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* Center text */}
                    <div className="mt-6 flex flex-col items-center">
                        <p className="text-sm text-gray-500">Monthly Saved</p>
                        <p className="text-2xl font-bold">{percentage}%</p>
                        <p className="text-green-500 text-sm">On Track</p>
                    </div>
                </CircularProgressbarWithChildren>
            </div>
            <button className="mt-2 px-4 py-1 border rounded-lg text-sm text-gray-600">
                See more
            </button>
        </div>
    );
}
