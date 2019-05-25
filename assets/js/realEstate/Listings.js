import React, { Component} from 'react'

 export default class Listings extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  
  render () {
    return (
      <section id="listings">
        <section className="search-area">
          <input type="text" name="search" />
        </section>

        <section className="sortby-area">
          <div className="results">3920 results found</div>
          <div className="sort-options">
            <select name="sortby" className="sortby">
              <option value="highest-price">Highest Price</option>
              <option vlaue="lowest-price">Lowest Price</option>
            </select>
            <div className="view">
              <i className="fas fa-th-list" aria-hidden="true" />
              <i className="fas fa-th" aria-hidden="true" />
            </div>
          </div>
        </section>

        <section className="listing-results">
          <div className="listing">
            <div className="listing-img">
              <span className="address">Address</span>
              <div className="details">
                <div className="user-img"></div>
                <div className="user-details">
                  <span className="user-name">Nina Smith</span>
                  <span className="posted-date">Posted on 05/09/17</span>
                </div>
                <div className="listing-details">
                  <div className="floor-space">
                    <i className="far fa-square" aria-hidden="true" />
                    <span> 1000 ft&sup2;</span>
                  </div>
                  <div className="bedrooms">
                    <i className="fa fa-bed" aria-hidden="true" />
                    <span> 3 bedrooms</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-info">
              <span>$1000 / mo.</span>
              <span><i className="fas fa-map-marker-alt" />Ridgewood NY</span>
            </div>
          </div>
        </section>

        <section className="pagination">
          <ul className="pagination-nums">
            <li>Prev</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>Next</li>
          </ul>
        </section>
      </section>
    )
  }
}
