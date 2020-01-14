import React from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      page: 1,
      resultArr: []
    }
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentDidMount() {
    fetch(`http://localhost:3000/events?q=Neil&_page=${this.state.page}`)
    .then(res => res.json())
    .then(result => {
      this.setState({resultArr: result})
    })
  }

  handlePageClick (data) {
    console.log('data', data);
    // let selected = data.selected;
    // let offset = Math.ceil(selected * this.props.perPage);

    this.setState({page: data['selected'] += 1}, () => {
      this.componentDidMount();
    });
  };

  render(){
      return(
        <div>
          <div>
            <h1>Historical Events Finder</h1>
          </div>
          {this.state.resultArr.map(el => {
            return (
              <div>
                <span>
                  {el.date}: {el.description}
                </span>
                <br></br>
                <br></br>
              </div>
            )
          })}
          <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={3786}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
          />
        </div>
      )
  }
}

export default Search;