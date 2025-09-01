import React, { useEffect, useRef } from "react";
import {
    Chart,
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    Title,
    CategoryScale,
} from "chart.js";

// Register required components
Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

const LineChart = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext("2d");

        const labels = Array.from({ length: 12 }, (_, i) => i.toString());
        const datapoints = [0, 20, 20, 60, 60, 120, 120, 180, 120, 125, 105, 110, 170];

        chartInstance.current = new Chart(ctx, {
            type: "line",
            data: {
                labels,
                datasets: [
                    {
                        data: datapoints,
                        borderColor: "gray",
                        fill: false,
                        cubicInterpolationMode: "monotone",
                        tension: 0.4,
                    },

                ],
            },
            options: {
                responsive: true,
                interaction: { intersect: false },
                scales: {
                    x: {
                        grid: { display: false }, // ❌ remove grid
                        ticks: { display: false }, // ❌ remove numbers
                    },
                    y: {
                        grid: { display: false }, // ❌ remove grid
                        ticks: { display: false }, // ❌ remove numbers
                    },
                },
                plugins: {
                    legend: { display: true }, // hide legend too if needed
                },
            },
        });

        // Cleanup on unmount
        return () => {
            chartInstance.current.destroy();
        };
    }, []);

    return <canvas ref={chartRef} />;
};

export default LineChart;
