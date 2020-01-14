import React from 'react';
import ReactDOM from 'react-dom';

class Graph extends React.Component {
  constructor(props){
    super(props);
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