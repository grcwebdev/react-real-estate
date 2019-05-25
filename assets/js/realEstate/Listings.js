import React, { Component} from 'react'

 export default class Listings extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
    this.loopListings = this.loopListings.bind(this)
  }

  loopListings () {
    let {listingsData} = this.props

    if(listingsData == undefined || listingsData.length == 0) {
      return "Sorry your filter did not match any listing"
    }

    return listingsData.map((listing, index) => {
      return (
        <div className="listing-col" key={index}>
          <div className="listing">
          <div className="listing-img" style={{background: `url("${listing.image}") no-repeat center center`}}>
            <span className="address">{listing.address}</span>
          <div className="details">
            <div className="left-col">
              <div className="user-img"></div>
            </div>
            <div className="right-col">
              <div className="user-details">
                <span className="user-name">{listing.agent}</span>
                <span className="posted-date">Posted on {listing.postedDate}</span>
              </div>
              <div className="listing-details">
                <div className="floor-space">
                  <i className="far fa-square" aria-hidden="true" />
                  <span>{listing.floorSpace} ft&sup2;</span>
                </div>
                <div className="bedrooms">
                  <i className="fas fa-bed" aria-hidden="true" />
                  <span>{listing.bedrooms} bedrooms</span>
                </div>
              </div>
              <div className="view-btn">
                View Listing
              </div>
            </div>
          </div>
        </div>
          <div className="bottom-info">
            <span className="price">${listing.price} / month</span>
            <span className="location"><i className="fas fa-map-marker-alt" />{listing.city}, {listing.state}</span>
          </div>
        </div>
        </div>
      )
    })
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
              <option value="lowest-price">Lowest Price</option>
            </select>
            <div className="view">
              <i className="fas fa-th-list" aria-hidden="true" />
              <i className="fas fa-th" aria-hidden="true" />
            </div>
          </div>
        </section>

        <section className="listing-results">
          {this.loopListings()}
        </section>

        <section className="pagination">
          <ul className="pages">
            <li>Prev</li>
            <li>1</li>
            <li className="active">2</li>
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
