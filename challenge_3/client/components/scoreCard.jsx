import React from 'react';
import ReactDOM from 'react-dom';

class ScoreCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      previousTotal: 0,
      firstBowl: 0,
      secondBowl: 0
    }
  }

  componentDidMount () {

  }

  render(){
    return(
      <div>
        {console.log(this.props.value)}
      </div>
    )
  }
}

export default ScoreCard;