import React, { useRef } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const CashBreakdownChart = () => {
    const chartRef = useRef(null);

    const labels = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    const data = {
        labels,
        datasets: [
            {
                label: "Income",
                data: [3200, 1800, 2500, 2200, 2800, 3000, 0, 2700, 3100, 2600, 2400, 2900],
                backgroundColor: function (context) {
                    const chart = context.chart;
                    const { ctx, chartArea } = chart;
                    if (!chartArea) return null;

                    const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
                    gradient.addColorStop(0, "rgba(0, 153, 255, 0.2)");
                    gradient.addColorStop(1, "rgba(0, 51, 255, 0.6)");
                    return gradient;
                },
                borderRadius: 6,
            },
            {
                label: "Expenses",
                data: [-1200, -800, -1000, -900, -1500, -1300, 0, -1400, -1700, -1100, -1200, -1600],
                backgroundColor: function (context) {
                    const chart = context.chart;
                    const { ctx, chartArea } = chart;
                    if (!chartArea) return null;

                    const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
                    gradient.addColorStop(0, "rgba(0, 255, 255, 0.2)");
                    gradient.addColorStop(1, "rgba(0, 204, 255, 0.6)");
                    return gradient;
                },
                borderRadius: 6,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,  // 👈 allows free resizing
        plugins: {
            legend: { display: false }, // Hide legend
            tooltip: {
                mode: "index",
                intersect: false,
                callbacks: {
                    label: function (context) {
                        let value = context.raw;
                        return `${context.dataset.label}: €${Math.abs(value).toFixed(2)}`;
                    },
                },
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                grid: { color: "rgba(0,0,0,0.05)" },
                ticks: {
                    callback: (value) => (value >= 0 ? value + "K" : value + "K"),
                },
            },
        },
    };

    return (
        <div className="w-full max-w-3xl p-1 bg-white">
            <div className="h-50">
                <Bar ref={chartRef} data={data} options={options} />
            </div>
        </div>
    );
};

export default CashBreakdownChart;
