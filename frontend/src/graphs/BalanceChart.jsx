import React from "react";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Filler);

// ✅ Custom plugin for vertical marker lines
const verticalLinePlugin = {
    id: "verticalLinePlugin",
    afterDatasetsDraw: (chart) => {
        const { ctx, chartArea: { top, bottom }, scales: { x, y } } = chart;

        chart.data.datasets[0].data.forEach((value, index) => {
            const xPos = x.getPixelForValue(index);
            const yPos = y.getPixelForValue(value);

            ctx.save();
            ctx.beginPath();
            ctx.setLineDash([3, 3]); // dashed line (optional)
            ctx.moveTo(xPos, yPos);
            ctx.lineTo(xPos, bottom); // down to x-axis
            ctx.strokeStyle = "rgba(0, 0, 0, 0.2)";
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.restore();
        });
    },
};

const BalanceChart = ({ CurrBalance, DataBalance }) => {
    const labels = ["Jan 25", "", "", "", "", "", "", "Dec 25"];

    // console.log(DataBalance)

    const data = {
        labels,
        datasets: [
            {
                label: "Balance",
                data: DataBalance.reverse(),
                fill: "start",
                borderColor: "#0011ff",
                backgroundColor: "rgba(0, 17, 255, 0.05)",
                tension: 0.3,
                pointRadius: 3,
                pointBackgroundColor: "#0011ff",
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: { enabled: true },
        },
        elements: {
            line: { borderWidth: 1.5 },
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: {
                    autoSkip: false,
                    maxRotation: 0,
                    minRotation: 0,
                    callback: function (val, index) {
                        const label = this.getLabelForValue(val);
                        return label === "" ? null : label;
                    },
                },
            },
            y: {
                grid: { display: false },
                ticks: { display: false },
            },
        },
    };

    return (
        <div className="w-full max-w-lg">
            <h2 className="text-gray-600 text-xs px-2 pt-1">Balance</h2>
            <p className="text-xl font-semibold px-4">₹ {CurrBalance}</p>
            <div className="h-23 -mt-1">
                <Line data={data} options={options} plugins={[verticalLinePlugin]} />
            </div>
        </div>
    );
};

export default BalanceChart;
