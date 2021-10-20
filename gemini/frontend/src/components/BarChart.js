import React, { useContext } from "react";
import Chart from "react-apexcharts";
import { Col, Row, Card } from "react-bootstrap";
import ThemeContext from "../ThemeContext";

const BarChart = () => {
  const { theme } = useContext(ThemeContext);
  const series = [
    {
      name: "Temperature in Fahrenheit", //will be displayed on the y-axis
      data: [43, 53, 50, 57],
    },
  ];
  const options = {
    chart: {
      id: "simple-bar",
    },
    title: {
      text: "Portfolio",
      align: "left",
    },
    xaxis: {
      categories: ["BTC", "ETH", "ADA", "DOGE"], //will be displayed on the x-asis
    },
  };

  return (
    <div className="bar">
      <Row>
        <Col>
          <Card className={`walletCard ${theme}`}>
            <Card.Body>
              <Chart
                options={options}
                series={series}
                type="bar"
                width="500"
                height="400"
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default BarChart;
