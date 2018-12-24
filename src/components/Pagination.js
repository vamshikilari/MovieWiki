import React, { Component } from 'react'

export class Pagination extends Component {
  render() {
    const { number, movies, perPage, pageNo } = this.props;
    const pageNumbers = [];
    for (let i = 1;
      i <= Math.ceil(movies.length / number);
      i++) {
        pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(number => {
      return(
           <button
             key={number}
             id={number}
             onClick={pageNo}
             className="waves-effect btn-small">
             {number}
           </button>
      );
    });
    return (
     <div className="container">
       <div className="row">
         <div className="col s6">
         <ul className="pagination">
           {renderPageNumbers}
         </ul>
         </div>
        <div className="col s4">
          <label>Results per page</label>
            <select className="browser-default" onChange={perPage}>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
        </div>
       </div>
       <div className="progress">
         <div className="determinate" style={{width: '100%'}}></div>
      </div>
  </div>
    );
  }
}

export default Pagination
