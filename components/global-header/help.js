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

var _popover = require("../popover");

var _popover2 = _interopRequireDefault(_popover);

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
   * * `triggerButton`: Assistive text for the GlobalHeaderHelp trigger button. The default is `Help and Training`.
   */
  assistiveText: _propTypes2.default.shape({
    triggerButton: _propTypes2.default.string
  }),

  /**
   * A `Popover` component. The props from this popover will be merged and override any default props. The `children` prop will be ignored.
   */
  popover: _propTypes2.default.node
};
/**
 * A GlobalHeaderHelp component.
 */

var GlobalHeaderHelp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GlobalHeaderHelp, _React$Component);

  function GlobalHeaderHelp() {
    _classCallCheck(this, GlobalHeaderHelp);

    return _possibleConstructorReturn(this, (GlobalHeaderHelp.__proto__ || Object.getPrototypeOf(GlobalHeaderHelp)).apply(this, arguments));
  }

  _createClass(GlobalHeaderHelp, [{
    key: "render",
    value: function render() {
      var buttonAriaProps = {
        'aria-haspopup': true
      };
      var popoverProps = (0, _lodash2.default)({
        align: 'bottom',
        body: _react2.default.createElement("span", null),
        triggerClassName: 'slds-dropdown-trigger slds-dropdown-trigger_click'
      }, this.props.popover ? this.props.popover.props : {});
      delete popoverProps.children;
      return _react2.default.createElement(_popover2.default, popoverProps, _react2.default.createElement(_button2.default, _extends({
        assistiveText: {
          icon: this.props.assistiveText.triggerButton
        },
        className: "slds-button_icon slds-global-actions__help slds-global-actions__item-action",
        iconCategory: "utility",
        iconClassName: "slds-global-header__icon",
        iconName: "question",
        iconSize: "small",
        iconVariant: "container",
        title: this.props.assistiveText.triggerButton,
        variant: "icon"
      }, buttonAriaProps)));
    }
  }]);

  return GlobalHeaderHelp;
}(_react2.default.Component);

GlobalHeaderHelp.displayName = _constants.GLOBAL_HEADER_HELP;
GlobalHeaderHelp.defaultProps = {
  assistiveText: {
    triggerButton: 'Help and Training'
  }
};
GlobalHeaderHelp.propTypes = propTypes;
exports.default = GlobalHeaderHelp;