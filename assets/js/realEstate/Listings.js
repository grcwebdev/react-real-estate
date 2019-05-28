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
      if(this.props.globalState.view == 'grid') {
        return (
          <div className="listing-col col-md-3" key={index}>
            <div className="listing">
                <div className="listing-img" style={{background: `url("${listing.image}") no-repeat center center`}}>
                  <span className="address">{listing.address}</span>
                  <div className="details">
                    <div className="left-col col-md-3">
                      <div className="user-img"></div>
                    </div>
                    <div className="right-col col-md-9">
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
                        <span>{listing.rooms} bedrooms</span>
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
      } else if(this.props.globalState.view =='list') {
        return (
          <div className="listing-col col-md-12 col-lg-6" key={index}>
            <div className="listing">
              <div className="listing-img" style={{background: `url("${listing.image}") no-repeat center center`}}>
                  <span className="address">{listing.address}</span>
                  <div className="details">
            <div className="left-col col-md-3">
              <div className="user-img"></div>
            </div>
            <div className="right-col col-md-9">
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
                  <span>{listing.rooms} bedrooms</span>
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
      }
    })
  }
  
  render () {
    return (
      <section id="listings">
        <section className="search-area">
          <input type="text" name="search" onChange={this.props.change} />
        </section>

        <section className="sortby-area">
          <div className="results">{this.props.globalState.filteredData.length} result(s) found.</div>
          <div className="sort-options">
            <select name="sortby" className="sortby" onChange={this.props.change}>
              <option value="price-asc">Lowest Price to Highest Price</option>
              <option value="price-dsc">High Price to Lowest price</option>
            </select>
            <div className="view">
              <i className="fas fa-th-list" aria-hidden="true"  onClick={this.props.changeView.bind(null, "list")}/>
              <i className="fas fa-th" aria-hidden="true" onClick={this.props.changeView.bind(null, "grid")} />
            </div>
          </div>
        </section>

        <section className="listing-results">
          <div className="row">
            {this.loopListings()}
          </div>
        </section>

        <section className="pagination">
          <div className="row">
          <ul className="pages">
            <li>Prev</li>
            <li className="active">1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>Next</li>
          </ul>
          </div>
        </section>
      </section>
    )
  }
}
