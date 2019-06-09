import React from "react";
import { Line } from "react-chartjs-2";
import styled from "styled-components";

class Charts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        datasets: [
          {
            label: "My First dataset",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
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
              text: "Largest Cities in Massachusetts",
            },
            maintainAspectRatio: true,
            legend: {
              // display: false, <- hides display
              // position: 'right'
              labels: {
                fontColor: "#000"
              }
            }
          }}
        />
      </StyledChart>
    );
  }
}

const StyledChart = styled.div`
    width: 500px;
`

export default Charts;
