import React from 'react';
import ReactApexChart from 'react-apexcharts';

function LineChartByCategory({ data }) {
    const categoryBreakdown = {};

    data.forEach((el) => {
        const { category } = el;
        const categoryId = category.split(' ')[1];
        if (categoryBreakdown.hasOwnProperty(categoryId)) {
            categoryBreakdown[categoryId]++;
        } else {
            categoryBreakdown[categoryId] = 1;
        }
    });

    const dataPoints = Object.entries(categoryBreakdown).map(([categoryId, value], index) => ({
        y: value,
        label: categoryId,
    }));
    const seriesData = dataPoints.map((point) => point.y);
    const optionsData = dataPoints.map((point) => point.label);

    const options = {
        chart: {
            type: "line",
            width: "100%",
            height: "auto",
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "55%",
                borderRadius: 5,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 1,
            colors: ["transparent"],
        },
        grid: {
            show: true,
            borderColor: "#ccc",
            strokeDashArray: 2,
        },
        title: {
            text: 'Breakdown by category',
            style: {
                color: '#fff',
            },
        },
        xaxis: {
            categories: optionsData,
            labels: {
                show: true,
                align: "right",
                minWidth: 0,
                maxWidth: 160,
                style: {
                    colors: [
                        "#fff",
                        "#fff",
                        "#fff",
                        "#fff",
                        "#fff",
                        "#fff",
                        "#fff",
                        "#fff",
                        "#fff",
                        "#fff",
                    ],
                },
            },
        },
        yaxis: {
            labels: {
                show: true,
                align: "right",
                minWidth: 0,
                maxWidth: 160,
                style: {
                    colors: [
                        "#fff",
                        "#fff",
                        "#fff",
                        "#fff",
                        "#fff",
                        "#fff",
                        "#fff",
                        "#fff",
                        "#fff",
                        "#fff",
                    ],
                },
            },
        },
        series: [
            {
                data: seriesData,
                type: 'line',
                color: "#fff",
            },
        ],
        markers: {
            size: 4,
            strokeWidth: 0,
            hover: {
                size: 6,
            },
        },
    };

    return (
        <>
            <div id="chart">
                <ReactApexChart
                    className="line-chart-b"
                    options={options}
                    series={options.series}
                    type="line"
                    height={220}
                />
            </div>
        </>
    );
}

export default LineChartByCategory;
