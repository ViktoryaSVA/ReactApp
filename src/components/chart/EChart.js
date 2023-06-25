import ReactApexChart from "react-apexcharts";
import { Typography } from "antd";
import eChart from "./configs/eChart";

function EChart({data}) {
    const { Title, Paragraph } = Typography;
    const countRequestsByCountry = data => {
        const countryCounts = {};
        data.forEach(item => {
            const country = item.countryid;
            if (countryCounts[country]) {
                countryCounts[country] += 1;
            } else {
                countryCounts[country] = 1;
            }
        });
        return countryCounts;
    };
    const newData = countRequestsByCountry(Object.values(data));

    return (
        <>
            <div id="chart">
                <ReactApexChart
                    className="bar-chart"
                    options={eChart(Object.values(newData), Object.keys(newData)).options}
                    series={eChart(Object.values(newData), Object.keys(newData)).series}
                    type="bar"
                    height={220}
                />
            </div>
        </>
    );
}

export default EChart;
