import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function FinanceHealthChart() {
    const percentage = 77;

    const data = {
        datasets: [
            {
                data: [percentage, 100 - percentage],
                backgroundColor: ["#0ea5e9", "#e5e7eb"], // blue & light gray
                borderWidth: 0,
                cutout: "80%", // thickness of the ring
                circumference: 360, // semi-circle
                rotation: 270, // rotate to make it like a gauge
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false, // no legend
            },
            tooltip: {
                enabled: false, // no tooltip
            },
        },
    };

    return (
        <>
            <div className="relative w-full h-55 pb-4">
                <Doughnut data={data} options={options} />
                {/* Center text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center -mt-4">
                    <p className="text-xs text-gray-500">Monthly Saved</p>
                    <p className="text-2xl font-bold">{percentage}%</p>
                    <p className="text-green-500 text-sm">On Track</p>
                </div>
            </div>
        </>
    );
}
