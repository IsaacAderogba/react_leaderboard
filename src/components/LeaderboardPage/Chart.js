import React from "react";
import { Line } from "react-chartjs-2";
import styled from "styled-components";

class Charts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        datasets: [
          {
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "#61DAFB",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "#61DAFB",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
      }
    };
  }

  render() {
    return (
      <StyledChart>
        <Line
          data={this.state.data}
          width={100}
          height={50}
          options={{
            title: {
              display: true,
              text: "Player 1", 
              fontColor: "#E4E6E8"
            },
            maintainAspectRatio: true,
            legend: {
              display: false
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    fontColor: "#E4E6E8"
                  }
                }
              ],
              xAxes: [
                {
                  ticks: {
                    fontColor: "#E4E6E8"
                  }
                }
              ]
            }
          }}
        />
      </StyledChart>
    );
  }
}

const StyledChart = styled.div`
  width: 500px;
`;

export default Charts;
