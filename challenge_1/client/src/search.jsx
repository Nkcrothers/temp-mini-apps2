import React from 'react';
import ReactDOM from 'react-dom';

class Search extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    fetch(`http://localhost:3000/events?q=Neil&_page=1`)
    .then(res => res.json())
    .then(result => {
      console.log(result);
    })
  }



  render(){
      return(
        <div>
          test
        </div>
      )
  }
}

export default Search;