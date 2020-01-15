import React from 'react';
import ReactDOM from 'react-dom';
import Chart from "chart.js";

class Graph extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      labels: [],
      data: []
    }
  }

  componentDidMount() {
    fetch(`https://api.coindesk.com/v1/bpi/historical/close.json`)
      .then(data => data.json())
      .then(result => {
        let labelsArr = [];
        let dataArr = [];
        let bpi = result.bpi;
        for (let i in bpi){
          labelsArr.push(i);
          dataArr.push(bpi[i]);
        }
        this.setState({labels: labelsArr, data: dataArr},() => {
          var ctx = document.getElementById('myChart').getContext('2d');
          var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
                labels: this.state.labels,
                datasets: [{
                    label: 'BitCoin in USD',
                    backgroundColor: 'rgb(0,0,255)',
                    borderColor: 'rgb(255,165,0)',
                    data: this.state.data
                }]
            },

            // Configuration options go here
            options: {}
          });
        })
        });
      }



  render(){
      return(
        <div>
          <canvas id="myChart"></canvas>
        </div>
      )
  }
}

export default Graph;