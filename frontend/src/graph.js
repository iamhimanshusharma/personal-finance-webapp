const ctx = document.getElementById('myChart');

// <block:setup:1>
const DATA_COUNT = 12;
const labels = [];
for (let i = 0; i < DATA_COUNT; ++i) {
    labels.push(i.toString());
}
const datapoints = [0, 20, 20, 60, 60, 120, 120, 180, 120, 125, 105, 110, 170];
const data = {
    labels: labels,
    datasets: [
        {
            data: datapoints,
            fill: false,
            cubicInterpolationMode: 'monotone',
            tension: 0.4
        }
    ]
};

new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        interaction: {
            intersect: false,
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: true
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Value'
                },
                suggestedMin: -10,
                suggestedMax: 200
            }
        }
    },
});

exports = {
    actions: [],
    config: config,
};