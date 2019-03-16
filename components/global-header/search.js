"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = require("../../utilities/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// # Global Header Search Component
// ## Dependencies
// ### React
// ## Constants

/**
 * The GlobalHeaderSearch component is used for application wide search. The form element is implemented as a `Combobox`.
 */
var GlobalHeaderSearch = function GlobalHeaderSearch(props) {
  return _react2.default.createElement("div", {
    className: "slds-global-header__item slds-global-header__item_search"
  }, props.combobox);
};

GlobalHeaderSearch.displayName = _constants.GLOBAL_HEADER_SEARCH;
GlobalHeaderSearch.propTypes = {
  /**
   * A required `Combobox` component. The props from this combobox will be merged and override any default props.
   */
  combobox: _propTypes2.default.node.isRequired
};
exports.default = GlobalHeaderSearch;