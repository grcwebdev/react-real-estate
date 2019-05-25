import React, { Component} from 'react'

 export default class Filter extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  
  render () {
    return (
      <section id="filter">
        <div className="inside">
        <h4>Filter</h4>
        <label htmlFor="city">City</label>
        <select name="city" className="filters city" onChange={this.props.change}>
          <option value="All">Any City</option>
          <option value="Ridgewood">Ridgewood</option>
          <option value="Clifton">Clifton</option>
          <option value="Denver">Denver</option>
          <option value="Los Angeles">Los Angeles</option>
          <option value="Miami">Miami</option>
          <option value="Dallas">Dallas</option>
          <option value="Austin">Austin</option>
        </select>
        <label htmlFor="homeType">Home Type</label>
        <select name="homeType" className=" filters homeType" onChange={this.props.change}>
          <option value="All">Any Home Type</option>
          <option value="Apartment">Apartment</option>
          <option value="Condo">Condo</option>
          <option value="Ranch">Ranch</option>
        </select>
        <label htmlFor="bedrooms">Bed Rooms</label>
        <select name="bedrooms" className="filters bedrooms" onChange={this.props.change}>
          <option value="0">0+ BR</option>
          <option value="1">1+ BR</option>
          <option value="2">2+ BR</option>
          <option value="3">3+ BR</option>
        </select>
        <div className="filters price">
          <span className="title">Price</span>
          <input type="text" name="min_price" value={this.props.globalState.min_price} className="min-price" onChange={this.props.change} />
          <input type="text" name="max_price" value={this.props.globalState.max_price} className="max-price" onChange={this.props.change} />
        </div>
        <div className="filters floor-space">
          <span className="title">Floor Space</span>
          <input type="text" name="min_floor_space" value={this.props.globalState.min_floor_space} className="min-floor-space" onChange={this.props.change} />
          <input type="text" name="max_floor_space" value={this.props.globalState.max_floor_space} className="max-floor-space" onChange={this.props.change} />
        </div>
        <div className="filters amenities">
          <span className="title">Amenities</span>
          <label htmlFor="amenities">
            <span>Elevators</span>
            <input name="elevator" value="elevator" type="checkbox" onChange={this.props.change} />
          </label>
          <label htmlFor="amenities">
            <span>Storage</span>
            <input name="storage" value="storage" type="checkbox" onChange={this.props.change} />
          </label>
          <label htmlFor="amenities">
            <span>Bath tub</span>
            <input name="bath_tub" value="bath_tub" type="checkbox" onChange={this.props.change} />
          </label>
          <label htmlFor="amenities">
            <span>Seperate shower</span>
            <input name="seperate_shower" value="seperate_shower" type="checkbox" onChange={this.props.change} />
          </label>
          <label htmlFor="amenities">
            <span>Fireplace</span>
            <input name="fireplace" value="fireplace" type="checkbox" onChange={this.props.change} />
          </label>
          <label htmlFor="amenities">
            <span>Swimming pool</span>
            <input name="swimming_pool" value="swimming_pool" type="checkbox" onChange={this.props.change} />
          </label>
        </div>
        </div>
      </section>
    )
  }
}
