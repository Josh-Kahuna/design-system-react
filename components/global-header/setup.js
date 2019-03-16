"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require("lodash.assign");

var _lodash2 = _interopRequireDefault(_lodash);

var _button = require("../button");

var _button2 = _interopRequireDefault(_button);

var _menuDropdown = require("../menu-dropdown");

var _menuDropdown2 = _interopRequireDefault(_menuDropdown);

var _buttonTrigger = require("../menu-dropdown/button-trigger");

var _buttonTrigger2 = _interopRequireDefault(_buttonTrigger);

var _constants = require("../../utilities/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  /**
   * **Assistive text for accessibility**
   * * `triggerButton`: Assistive text for the GlobalHeaderSetup trigger button. The default is `Setup`.
   */
  assistiveText: _propTypes2.default.shape({
    triggerButton: _propTypes2.default.string
  }),

  /**
   * A `Dropdown` component. The props from this dropdown will be merged and override any default props. This also allows custom content to be passed as children and rendered in the dropdown.
   */
  dropdown: _propTypes2.default.node
};
/**
 * A GlobalHeaderSetup component.
 */

var GlobalHeaderSetup =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GlobalHeaderSetup, _React$Component);

  function GlobalHeaderSetup() {
    _classCallCheck(this, GlobalHeaderSetup);

    return _possibleConstructorReturn(this, (GlobalHeaderSetup.__proto__ || Object.getPrototypeOf(GlobalHeaderSetup)).apply(this, arguments));
  }

  _createClass(GlobalHeaderSetup, [{
    key: "render",
    value: function render() {
      var buttonAriaProps = {
        'aria-haspopup': true
      };
      var dropdownProps = (0, _lodash2.default)({
        align: 'right',
        nubbinPosition: 'top right'
      }, this.props.dropdown ? this.props.dropdown.props : {});
      var dropdownChildren = dropdownProps.children || null;
      delete dropdownProps.children;
      return _react2.default.createElement(_menuDropdown2.default, dropdownProps, _react2.default.createElement(_buttonTrigger2.default, null, _react2.default.createElement(_button2.default, _extends({
        assistiveText: {
          icon: this.props.assistiveText.triggerButton
        },
        className: "slds-button_icon slds-global-actions__setup slds-global-actions__item-action",
        iconCategory: "utility",
        iconClassName: "slds-global-header__icon",
        iconName: "setup",
        iconSize: "small",
        iconVariant: "container",
        title: this.props.assistiveText.triggerButton,
        variant: "icon"
      }, buttonAriaProps))), dropdownChildren);
    }
  }]);

  return GlobalHeaderSetup;
}(_react2.default.Component);

GlobalHeaderSetup.displayName = _constants.GLOBAL_HEADER_SETUP;
GlobalHeaderSetup.defaultProps = {
  assistiveText: {
    triggerButton: 'Setup'
  }
};
GlobalHeaderSetup.propTypes = propTypes;
exports.default = GlobalHeaderSetup;