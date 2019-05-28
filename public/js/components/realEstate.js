webpackJsonp([0],{

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Filter = function (_Component) {
  _inherits(Filter, _Component);

  function Filter() {
    _classCallCheck(this, Filter);

    var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

    _this.state = {
      name: 'Joe'
    };

    _this.cities = _this.cities.bind(_this);
    _this.homeTypes = _this.homeTypes.bind(_this);
    _this.bedrooms = _this.bedrooms.bind(_this);
    return _this;
  }

  _createClass(Filter, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.populateAction();
    }
  }, {
    key: 'cities',
    value: function cities() {
      if (this.props.globalState.populateFormsData.cities != undefined) {
        var cities = this.props.globalState.populateFormsData.cities;


        return cities.map(function (item) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'option',
            { key: item, value: item },
            item
          );
        });
      }
    }
  }, {
    key: 'homeTypes',
    value: function homeTypes() {
      if (this.props.globalState.populateFormsData.homeTypes != undefined) {
        var homeTypes = this.props.globalState.populateFormsData.homeTypes;


        return homeTypes.map(function (item) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'option',
            { key: item, value: item },
            item
          );
        });
      }
    }
  }, {
    key: 'bedrooms',
    value: function bedrooms() {
      if (this.props.globalState.populateFormsData.bedrooms != undefined) {
        var bedrooms = this.props.globalState.populateFormsData.bedrooms;


        return bedrooms.map(function (item) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'option',
            { key: item, value: item },
            item,
            '+ BR'
          );
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'section',
        { id: 'filter' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'inside' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h4',
            null,
            'Filter'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { htmlFor: 'city' },
            'City'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'select',
            { name: 'city', className: 'filters city', onChange: this.props.change },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'option',
              { value: 'All' },
              'Any City'
            ),
            this.cities()
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { htmlFor: 'homeType' },
            'Home Type'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'select',
            { name: 'homeType', className: ' filters homeType', onChange: this.props.change },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'option',
              { value: 'All' },
              'Any Home Type'
            ),
            this.homeTypes()
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { htmlFor: 'bedrooms' },
            'Bed Rooms'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'select',
            { name: 'bedrooms', className: 'filters bedrooms', onChange: this.props.change },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'option',
              { value: '0' },
              '0+ BR'
            ),
            this.bedrooms()
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'filters price' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: 'title' },
              'Price'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', name: 'min_price', value: this.props.globalState.min_price, className: 'min-price', onChange: this.props.change }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', name: 'max_price', value: this.props.globalState.max_price, className: 'max-price', onChange: this.props.change })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'filters floor-space' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: 'title' },
              'Floor Space'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', name: 'min_floor_space', value: this.props.globalState.min_floor_space, className: 'min-floor-space', onChange: this.props.change }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', name: 'max_floor_space', value: this.props.globalState.max_floor_space, className: 'max-floor-space', onChange: this.props.change })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'filters amenities' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: 'title' },
              'Amenities'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'label',
              { htmlFor: 'amenities' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                null,
                'Elevators'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { name: 'elevator', value: 'elevator', type: 'checkbox', onChange: this.props.change })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'label',
              { htmlFor: 'amenities' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                null,
                'Storage'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { name: 'storage', value: 'storage', type: 'checkbox', onChange: this.props.change })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'label',
              { htmlFor: 'amenities' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                null,
                'Bath tub'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { name: 'bath_tub', value: 'bath_tub', type: 'checkbox', onChange: this.props.change })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'label',
              { htmlFor: 'amenities' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                null,
                'Seperate shower'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { name: 'seperate_shower', value: 'seperate_shower', type: 'checkbox', onChange: this.props.change })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'label',
              { htmlFor: 'amenities' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                null,
                'Fireplace'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { name: 'fireplace', value: 'fireplace', type: 'checkbox', onChange: this.props.change })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'label',
              { htmlFor: 'amenities' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                null,
                'Swimming pool'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { name: 'swimming_pool', value: 'swimming_pool', type: 'checkbox', onChange: this.props.change })
            )
          )
        )
      );
    }
  }]);

  return Filter;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Filter);

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {
      name: 'Joe'
    };
    return _this;
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'header',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'logo' },
          'Logo'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'nav',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { href: '#' },
            'Create Ads'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { href: '#' },
            'About Us'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { href: '#' },
            'Log In'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { href: '#', className: 'register-btn' },
            'Register'
          )
        )
      );
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Listings = function (_Component) {
  _inherits(Listings, _Component);

  function Listings() {
    _classCallCheck(this, Listings);

    var _this = _possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).call(this));

    _this.state = {
      name: 'Joe'
    };
    _this.loopListings = _this.loopListings.bind(_this);
    return _this;
  }

  _createClass(Listings, [{
    key: 'loopListings',
    value: function loopListings() {
      var _this2 = this;

      var listingsData = this.props.listingsData;


      if (listingsData == undefined || listingsData.length == 0) {
        return "Sorry your filter did not match any listing";
      }

      return listingsData.map(function (listing, index) {
        if (_this2.props.globalState.view == 'grid') {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'listing-col col-md-3', key: index },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'listing' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'listing-img', style: { background: 'url("' + listing.image + '") no-repeat center center' } },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  { className: 'address' },
                  listing.address
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'details' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'left-col col-md-3' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'user-img' })
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'right-col col-md-9' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'user-details' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { className: 'user-name' },
                        listing.agent
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { className: 'posted-date' },
                        'Posted on ',
                        listing.postedDate
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'listing-details' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'floor-space' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'far fa-square', 'aria-hidden': 'true' }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'span',
                          null,
                          listing.floorSpace,
                          ' ft\xB2'
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'bedrooms' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fas fa-bed', 'aria-hidden': 'true' }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'span',
                          null,
                          listing.rooms,
                          ' bedrooms'
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'view-btn' },
                      'View Listing'
                    )
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'bottom-info' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  { className: 'price' },
                  '$',
                  listing.price,
                  ' / month'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  { className: 'location' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fas fa-map-marker-alt' }),
                  listing.city,
                  ', ',
                  listing.state
                )
              )
            )
          );
        } else if (_this2.props.globalState.view == 'list') {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'listing-col col-md-12 col-lg-6', key: index },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'listing' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'listing-img', style: { background: 'url("' + listing.image + '") no-repeat center center' } },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  { className: 'address' },
                  listing.address
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'details' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'left-col col-md-3' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'user-img' })
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'right-col col-md-9' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'user-details' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { className: 'user-name' },
                        listing.agent
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { className: 'posted-date' },
                        'Posted on ',
                        listing.postedDate
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'listing-details' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'floor-space' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'far fa-square', 'aria-hidden': 'true' }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'span',
                          null,
                          listing.floorSpace,
                          ' ft\xB2'
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'bedrooms' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fas fa-bed', 'aria-hidden': 'true' }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'span',
                          null,
                          listing.rooms,
                          ' bedrooms'
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'view-btn' },
                      'View Listing'
                    )
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'bottom-info' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  { className: 'price' },
                  '$',
                  listing.price,
                  ' / month'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  { className: 'location' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fas fa-map-marker-alt' }),
                  listing.city,
                  ', ',
                  listing.state
                )
              )
            )
          );
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'section',
        { id: 'listings' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'section',
          { className: 'search-area' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', name: 'search', onChange: this.props.change })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'section',
          { className: 'sortby-area' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'results' },
            this.props.globalState.filteredData.length,
            ' result(s) found.'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'sort-options' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'select',
              { name: 'sortby', className: 'sortby', onChange: this.props.change },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'option',
                { value: 'price-asc' },
                'Lowest Price to Highest Price'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'option',
                { value: 'price-dsc' },
                'High Price to Lowest price'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'view' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fas fa-th-list', 'aria-hidden': 'true', onClick: this.props.changeView.bind(null, "list") }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fas fa-th', 'aria-hidden': 'true', onClick: this.props.changeView.bind(null, "grid") })
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'section',
          { className: 'listing-results' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'row' },
            this.loopListings()
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'section',
          { className: 'pagination' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'row' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'ul',
              { className: 'pages' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                null,
                'Prev'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                { className: 'active' },
                '1'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                null,
                '2'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                null,
                '3'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                null,
                '4'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                null,
                '5'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                null,
                'Next'
              )
            )
          )
        )
      );
    }
  }]);

  return Listings;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Listings);

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var listingsData = [{
    address: '20-34 Grand Ave',
    city: 'Ridgewood',
    state: 'NY',
    rooms: 3,
    price: 2800,
    floorSpace: 1500,
    agent: 'Anthony Garcia',
    postedDate: '05/22/2019',
    image: 'https://media.equityapartments.com/images/c_crop,x_0,y_0,w_1920,h_1080/c_fill,w_1920,h_1080/q_80/4011-1/moda-apartments-exterior.jpg',
    amenities: ['storage', 'gym'],
    homeType: 'Apartment'
}, {
    address: '134 Sylvan Ave',
    city: 'Clifton',
    state: 'NJ',
    rooms: 2,
    price: 1200,
    floorSpace: 1250,
    agent: 'Giuliana Gonzalez',
    postedDate: '05/20/2019',
    image: 'https://media.equityapartments.com/images/c_crop,x_0,y_0,w_1920,h_1080/c_fill,w_1920,h_1080/q_80/4105-6/2201-wilson-apartments-building.jpg',
    amenities: ['seperate_shower', 'gym'],
    homeType: 'Ranch'
}, {
    address: '14 Main St',
    city: 'Denver',
    state: 'CO',
    rooms: 2,
    price: 1400,
    floorSpace: 1000,
    agent: 'Tony Soprano',
    postedDate: '04/25/2019',
    image: 'https://www.poconnor.com/wp-content/uploads/2006/03/Apartment.jpg',
    amenities: ['fireplace', 'swimming_pool'],
    homeType: 'Apartment'
}, {
    address: '20-43 Charger Blvd',
    city: 'Los Angeles',
    state: 'CA',
    rooms: 1,
    price: 1500,
    floorSpace: 750,
    agent: 'Pierce Cole',
    postedDate: '05/10/2019',
    image: 'https://pettinaro.com/sites/default/files/styles/property_gallery_2/public/220-Pres.jpg?itok=1LawtxEI&sc=8761835295800349b944d7b4eed3cfc3',
    amenities: ['fireplace', 'gym'],
    homeType: 'Apartment'
}, {
    address: '12 Ocean Dr',
    city: 'Miami',
    state: 'FL',
    rooms: 2,
    price: 1100,
    floorSpace: 1000,
    agent: 'Tiger Woods',
    postedDate: '04/10/2019',
    image: 'http://www.trimarkproperties.com/gainesville/sabal-palms/luxury-apartments/og.jpg',
    amenities: ['elevator', 'storage'],
    homeType: 'Condo'
}, {
    address: '1019 19th St',
    city: 'Dallas',
    state: 'TX',
    rooms: 3,
    price: 1200,
    floorSpace: 1750,
    agent: 'John Goti',
    postedDate: '05/23/2019',
    image: 'https://www.newlandmke.com/wp-content/uploads/sites/1882/2016/08/20160901_104123.jpg',
    amenities: ['elevator', 'bath_tub'],
    homeType: 'Condo'
}, {
    address: '55 Over Ave',
    city: 'Austin',
    state: 'TX',
    rooms: 1,
    price: 800,
    floorSpace: 1000,
    agent: 'Anthony Garcia',
    postedDate: '05/20/2019',
    image: 'https://cdngeneral.rentcafe.com/dmslivecafe/3/167732/Flash-Pool.jpg?crop=(0,0,300,197)&cropxunits=300&cropyunits=197&quality=85&scale=both&',
    amenities: ['separate_shower', 'bath_tub'],
    homeType: 'Ranch'
}];

/* harmony default export */ __webpack_exports__["a"] = (listingsData);

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header_js__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Filter_js__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Listings_js__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_listingsData_js__ = __webpack_require__(233);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      listingsData: __WEBPACK_IMPORTED_MODULE_5__data_listingsData_js__["a" /* default */],
      city: 'All',
      homeType: 'All',
      rooms: 0,
      min_price: 0,
      max_price: 10000,
      min_floor_space: 0,
      max_floor_space: 5000,
      elevator: false,
      storage: false,
      bath_tub: false,
      seperate_shower: false,
      fireplace: false,
      swimming_pool: false,
      filteredData: __WEBPACK_IMPORTED_MODULE_5__data_listingsData_js__["a" /* default */],
      populateFormsData: '',
      sortby: 'price-asc',
      view: 'grid',
      search: ''
    };

    _this.change = _this.change.bind(_this);
    _this.filteredData = _this.filteredData.bind(_this);
    _this.populateForms = _this.populateForms.bind(_this);
    _this.changeView = _this.changeView.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var listingsData = this.state.listingsData.sort(function (a, b) {
        return a.price - b.price;
      });
      this.setState({
        listingsData: listingsData
      });
    }
  }, {
    key: 'change',
    value: function change(event) {
      var _this2 = this;

      var name = event.target.name;
      var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

      this.setState(_defineProperty({}, name, value), function () {
        console.log(_this2.state);
        _this2.filteredData();
      });
    }
  }, {
    key: 'changeView',
    value: function changeView(viewName) {
      this.setState({
        view: viewName
      });
    }
  }, {
    key: 'filteredData',
    value: function filteredData() {
      var _this3 = this;

      var newData = this.state.listingsData.filter(function (item) {
        return item.price >= _this3.state.min_price && item.price <= _this3.state.max_price && item.floorSpace >= _this3.state.min_floor_space && item.floorSpace <= _this3.state.max_floor_space && item.rooms >= _this3.state.rooms;
      });

      if (this.state.city != "All") {
        newData = newData.filter(function (item) {
          return item.city == _this3.state.city;
        });
      }

      if (this.state.homeType != "All") {
        newData = newData.filter(function (item) {
          return item.homeType == _this3.state.homeType;
        });
      }

      if (this.state.sortby == 'price-asc') {
        newData = newData.sort(function (a, b) {
          return a.price - b.price;
        });
      } else if (this.state.sortby == 'price-dsc') {
        newData = newData.sort(function (a, b) {
          return b.price - a.price;
        });
      }

      if (this.state.search != '') {
        newData = newData.filter(function (item) {
          var city = item.city.toLowerCase();
          var searchText = _this3.state.search.toLowerCase();
          var n = city.match(searchText);

          if (n != null) {
            return true;
          }
        });
      }

      this.setState({
        filteredData: newData
      });
    }
  }, {
    key: 'populateForms',
    value: function populateForms() {
      var _this4 = this;

      // city
      var cities = this.state.listingsData.map(function (item) {
        return item.city;
      });

      cities = new Set(cities);
      cities = [].concat(_toConsumableArray(cities));
      cities = cities.sort();

      // homeType
      var homeTypes = this.state.listingsData.map(function (item) {
        return item.homeType;
      });

      homeTypes = new Set(homeTypes);
      homeTypes = [].concat(_toConsumableArray(homeTypes));
      homeTypes = homeTypes.sort();

      // bedrooms
      var bedrooms = this.state.listingsData.map(function (item) {
        return item.rooms;
      });

      bedrooms = new Set(bedrooms);
      bedrooms = [].concat(_toConsumableArray(bedrooms));
      bedrooms = bedrooms.sort();

      this.setState({
        populateFormsData: {
          cities: cities,
          homeTypes: homeTypes,
          bedrooms: bedrooms
        }
      }, function () {
        console.log(_this4.state);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Header_js__["a" /* default */], null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'section',
          { id: 'content-area' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Filter_js__["a" /* default */], { change: this.change, globalState: this.state, populateAction: this.populateForms }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Listings_js__["a" /* default */], { listingsData: this.state.filteredData, change: this.change, globalState: this.state, changeView: this.changeView })
        )
      );
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var app = document.getElementById('app');

__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(App, null), app);

/***/ })

},[237]);