import React from "react";
import { Line } from "react-chartjs-2";
import styled from "styled-components";

import UpdateProgress from "./UpdateProgress";

class ProgressChart extends React.Component {
  constructor(props) {
    super(props);

    const { playerColor, data, labels } = props.userData;
    this.chart = {
      data: {
        labels: labels.slice(Math.max(labels.length - 6, 0)),
        datasets: [
          {
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: playerColor,
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: playerColor,
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: data.slice(Math.max(data.length - 6, 0))

          }
        ]
      }
    };
  }

  render() {

    return (
      <StyledProgressChart>
        <Line
          data={this.chart.data}
          width={100}
          height={70}
          options={{
            title: {
              display: true,
              text: `${this.props.userData.playerName}'s Progress`,
              fontColor: "#E4E6E8",
              fontSize: "24"
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
                  },
                  scaleLabel: {
                    display: true,
                    labelString: this.props.configData[0].yAxisLabel,
                    fontColor: "#E4E6E8",
                    fontSize: "18"
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
        <UpdateProgress userData={this.props.userData} onSubmitUpdate={this.props.onSubmitUpdate} />
      </StyledProgressChart>
    );
  }
}

const StyledProgressChart = styled.div`
  width: 45%;
  margin: 24px 2.5%;

  @media only screen and (max-width: 700px) {
    width: 90%;
  }
`;

export default ProgressChart;
