import React from 'react';
import ReactDOM from 'react-dom';
import ScoreCard from './components/scoreCard.jsx'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: 0,
      input: 0
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log('Input value: ' + this.state.value);
    this.setState({input: this.state.value});
    event.preventDefault();
  }

  render(){
      return(
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>What did you bowl? :</label>
              {console.log(this.state.input)}
              <br></br>
              <input type='number' id='bowlingScore' name='score' required min='0' max='10' value={this.state.value} onChange={this.handleChange}></input>
              <input type="submit" value="Submit"></input>
            </div>
          </form>
          <br></br>
          <div>
            <ScoreCard input={this.state.input}/>
          </div>
        </div>
      )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));