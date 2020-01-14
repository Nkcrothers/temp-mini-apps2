import React from 'react';
import ReactDOM from 'react-dom';
import Graph from './components/graph.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
      return(
        <div>
          <div>
            <h1>Bitcoin Charting Tool</h1>
          </div>
          <Graph />
          <div>
            Powered by CoinDesk
          </div>
        </div>
      )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));