import React, { useContext } from "react";
import Chart from "react-apexcharts";
import { Col, Row, Card } from "react-bootstrap";
import ThemeContext from "../ThemeContext";

const DonutChart = () => {
  const { theme } = useContext(ThemeContext);
  const options = {
    labels: ["BTC", "ETH", "ADA", "DOGE"],
    title: {
      text: "Portfolio",
      align: "left",
    },
  }; // to fetch from user profile
  const series = [5, 5, 6, 1]; // to fetch from user profile

  return (
    <div className="donut">
      <Row>
        <Col>
          <Card className={`walletCard ${theme}`}>
            <Card.Body>
              <Chart
                options={options}
                series={series}
                type="donut"
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
export default DonutChart;
