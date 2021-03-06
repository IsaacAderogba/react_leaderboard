import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import styled from "styled-components";
import PageLoader from "../Utility/PageLoader";

import UpdateChart from "./UpdateChart";

const Chart = props => {
  const { data, labels } = props.userData;
  const [chart, setChart] = useState({});

  useEffect(() => {
    setChart({
      data: {
        labels: props.userData.labels.slice(Math.max(labels.length - 7, 0)),
        datasets: [
          {
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: props.userData.playerColor,
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: props.userData.playerColor,
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: props.userData.data.slice(Math.max(data.length - 7, 0))
          }
        ]
      }
    });
  }, [
    props.userData.labels,
    props.userData.playerColor,
    props.userData.data,
    labels.length,
    data.length
  ]);

  if (chart.data === undefined) {
    return <PageLoader />;
  } else {
    return (
      <StyledProgressChart>
        <Line
          data={chart.data}
          width={100}
          height={70}
          options={{
            title: {
              display: true,
              text: `${props.userData.playerName}`,
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
                    labelString: props.configData[1].yAxisLabel,
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
        <UpdateChart
          userData={props.userData}
          onSubmitUpdate={props.onSubmitUpdate}
          configData={props.configData}
        />
      </StyledProgressChart>
    );
  }
};

const StyledProgressChart = styled.div`
  width: 45%;
  margin: 24px 2.5%;

  @media only screen and (max-width: 900px) {
    width: 90%;
  }
`;

export default Chart;
