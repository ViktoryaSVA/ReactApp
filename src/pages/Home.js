import React, { useState, useEffect } from 'react';

import { Card, Col, Row, Typography } from "antd";

import Echart from "../components/chart/EChart";
import LineChart from "../components/chart/LineChart";
import LineChartByCategory from "../components/chart/LineChartByCategory";
function Home({ isAuthenticated }) {
  const [data, setData] = useState([]);
  const [countryData, setCountryData] = useState({});
  const { Title } = Typography;

  useEffect(() => {
    fetchData()
        .then(data => {
          setData(data);
        })
        .catch(error => {
          console.error('Помилка отримання даних:', error);
        });
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/reports');
      const data = await response.json();
      return data.map(item => ({
        ...item,
        creationdate: new Date(Number(item.creationdate))
      }));
    } catch (error) {
      throw new Error('Помилка отримання даних з API: ' + error.message);
    }
  };

  const totalReposts = data.length;
  const districtsSet = new Set();
  data.forEach(item => {
    districtsSet.add(item.client);
  });

  const amountOfDistrictsPartners = districtsSet.size;

  const countriesSet = new Set();
  data.forEach(item => {
    countriesSet.add(item.countryid);
  });
  const amountOfDistinctCountries = countriesSet.size;

  const averageRequestsPerDay = Math.round(totalReposts / data.length);

  const CopyIcon = [
      <svg
          width="22"
          height="22"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          key={0}
      >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 2C3.89543 2 3 2.89543 3 4V16C3 17.1046 3.89543 18 5 18H13C14.1046 18 15 17.1046 15 16V11C15 10.4477 14.5523 10 14 10H13V16H5V4H13V9H14V4C14 2.89543 13.1046 2 12 2H5ZM7 6C7.55228 6 8 6.44772 8 7V15H10V7C10 6.44772 10.4477 6 11 6H15V4H5V6H7Z"
            fill="#fff"
        />
      </svg>
  ];
  const profile = [
    <svg
      width="22"
      height="22"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        d="M9 6C9 7.65685 7.65685 9 6 9C4.34315 9 3 7.65685 3 6C3 4.34315 4.34315 3 6 3C7.65685 3 9 4.34315 9 6Z"
        fill="#fff"
      ></path>
      <path
        d="M17 6C17 7.65685 15.6569 9 14 9C12.3431 9 11 7.65685 11 6C11 4.34315 12.3431 3 14 3C15.6569 3 17 4.34315 17 6Z"
        fill="#fff"
      ></path>
      <path
        d="M12.9291 17C12.9758 16.6734 13 16.3395 13 16C13 14.3648 12.4393 12.8606 11.4998 11.6691C12.2352 11.2435 13.0892 11 14 11C16.7614 11 19 13.2386 19 16V17H12.9291Z"
        fill="#fff"
      ></path>
      <path
        d="M6 11C8.76142 11 11 13.2386 11 16V17H1V16C1 13.2386 3.23858 11 6 11Z"
        fill="#fff"
      ></path>
    </svg>,
  ];
  const heart = [
    <svg
      width="22"
      height="22"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.17157 5.17157C4.73367 3.60948 7.26633 3.60948 8.82843 5.17157L10 6.34315L11.1716 5.17157C12.7337 3.60948 15.2663 3.60948 16.8284 5.17157C18.3905 6.73367 18.3905 9.26633 16.8284 10.8284L10 17.6569L3.17157 10.8284C1.60948 9.26633 1.60948 6.73367 3.17157 5.17157Z"
        fill="#fff"
      ></path>
    </svg>,
  ];
  const cart = [
    <svg
      width="22"
      height="22"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 2C7.79086 2 6 3.79086 6 6V7H5C4.49046 7 4.06239 7.38314 4.00612 7.88957L3.00612 16.8896C2.97471 17.1723 3.06518 17.455 3.25488 17.6669C3.44458 17.8789 3.71556 18 4 18H16C16.2844 18 16.5554 17.8789 16.7451 17.6669C16.9348 17.455 17.0253 17.1723 16.9939 16.8896L15.9939 7.88957C15.9376 7.38314 15.5096 7 15 7H14V6C14 3.79086 12.2091 2 10 2ZM12 7V6C12 4.89543 11.1046 4 10 4C8.89543 4 8 4.89543 8 6V7H12ZM6 10C6 9.44772 6.44772 9 7 9C7.55228 9 8 9.44772 8 10C8 10.5523 7.55228 11 7 11C6.44772 11 6 10.5523 6 10ZM13 9C12.4477 9 12 9.44772 12 10C12 10.5523 12.4477 11 13 11C13.5523 11 14 10.5523 14 10C14 9.44772 13.5523 9 13 9Z"
        fill="#fff"
      ></path>
    </svg>,
  ];
  const count = [
    {
      today: "Reports amount",
      title: `${totalReposts}`,
      icon: CopyIcon,
    },
    {
      today: "Partner count",
      title: `${amountOfDistrictsPartners}`,
      icon: profile,
    },
    {
      today: "Countries count",
      title: `${amountOfDistinctCountries}`,
      icon: heart,
    },
    {
      today: "Reports Rate",
      title: `${averageRequestsPerDay}`,
      icon: cart,
    },
  ];

  return (
    <>
      <div className="layout-content">
        <Row className="rowgap-vbox" gutter={[24, 0]}>
          {count.map((c, index) => (
            <Col
              key={index}
              xs={24}
              sm={24}
              md={12}
              lg={6}
              xl={6}
              className="mb-24"
            >
              <Card bordered={false} className="criclebox ">
                <div className="number">
                  <Row align="middle" gutter={[24, 0]}>
                    <Col xs={18}>
                      <span>{c.today}</span>
                      <Title level={3}>
                        {c.title} <small className={c.bnb}>{c.persent}</small>
                      </Title>
                    </Col>
                    <Col xs={6}>
                      <div className="icon-box">{c.icon}</div>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
        <Row gutter={[24, 0]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={14} className="mb-24">
            <Card bordered={false} className="criclebox h-full">
              <LineChart data={data} />
            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={10} className="mb-24">
            <Card bordered={false} className="criclebox h-full">
              <Echart data={data} />
            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={14} className="mb-24">
            <Card bordered={false} className="criclebox h-full">
              <LineChartByCategory data={data} />
            </Card>
          </Col>
        </Row>

      </div>
    </>
  );
}

export default Home;
