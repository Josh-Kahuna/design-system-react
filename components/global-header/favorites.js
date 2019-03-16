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

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _button = require("../button");

var _button2 = _interopRequireDefault(_button);

var _event = require("../../utilities/event");

var _event2 = _interopRequireDefault(_event);

var _keyCode = require("../../utilities/key-code");

var _keyCode2 = _interopRequireDefault(_keyCode);

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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var propTypes = {
  /**
   * **Assistive text for accessibility**
   * * `action`: Description of star button. Default is "Toggle Favorite."
   * * `more`: Description of dropdown menu. Default is "View Favorites."
   */
  assistiveText: _propTypes2.default.shape({
    action: _propTypes2.default.string,
    more: _propTypes2.default.string
  }),

  /**
   * Disables the favorites action (star) button and not the related Popover."
   */
  actionDisabled: _propTypes2.default.bool,

  /**
   * Controls whether the favorites action (star) button is selected or not
   */
  actionSelected: _propTypes2.default.bool,

  /**
   * This event fires when the favorites action (star) button is toggled. Passes in `event, { actionSelected }`.
   */
  onToggleActionSelected: _propTypes2.default.func,

  /**
   * A `Popover` component applied to the favorites more button. The props from this popover will be merged and override any default props. The `children` prop will be ignored.
   */
  popover: _propTypes2.default.node
};
/**
 * A GlobalHeaderFavorites component. The favorites action is used to "favorite" a commonly used page within a user's experience. When a user "favorites" a page by pressing the favorites action, the button icon changes color with a small animation to confirm your selection.
 */

var GlobalHeaderFavorites =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GlobalHeaderFavorites, _React$Component);

  function GlobalHeaderFavorites() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, GlobalHeaderFavorites);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = GlobalHeaderFavorites.__proto__ || Object.getPrototypeOf(GlobalHeaderFavorites)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "toggleActionSelected", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        if (_this.props.onToggleActionSelected) {
          _this.props.onToggleActionSelected(event, {
            actionSelected: _this.props.actionSelected || false
          });
        }
      }
    }), _temp));
  }

  _createClass(GlobalHeaderFavorites, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var actionAriaProps = {};
      var popoverProps = (0, _lodash2.default)({
        align: 'bottom',
        body: _react2.default.createElement("span", null),
        triggerClassName: 'slds-dropdown-trigger slds-dropdown-trigger_click'
      }, this.props.popover ? this.props.popover.props : {});
      delete popoverProps.children;

      if (this.props.actionSelected) {
        actionAriaProps['aria-pressed'] = true;
      }

      return _react2.default.createElement("div", {
        className: "slds-global-actions__favorites slds-dropdown-trigger slds-dropdown-trigger_click"
      }, _react2.default.createElement("div", {
        className: "slds-button-group"
      }, _react2.default.createElement(_button2.default, _extends({
        assistiveText: {
          icon: this.props.assistiveText.action
        },
        className: (0, _classnames2.default)('slds-button_icon slds-global-actions__favorites-action', {
          'slds-is-disabled': this.props.actionDisabled,
          'slds-is-selected': this.props.actionSelected
        }),
        disabled: this.props.actionDisabled,
        iconCategory: "utility",
        iconName: "favorite",
        iconSize: "small",
        iconVariant: "border",
        onClick: this.toggleActionSelected,
        onKeyDown: function onKeyDown(event) {
          if (event.keyCode === _keyCode2.default.ENTER) {
            _event2.default.trapImmediate(event);

            _this2.toggleActionSelected(event);
          }
        },
        title: this.props.assistiveText.action,
        variant: "icon"
      }, actionAriaProps)), _react2.default.createElement(_popover2.default, popoverProps, _react2.default.createElement(_button2.default, {
        assistiveText: {
          icon: this.props.assistiveText.more
        },
        className: "slds-button_icon slds-global-actions__favorites-more",
        iconCategory: "utility",
        iconName: "down",
        iconSize: "small",
        iconVariant: "border",
        style: {
          // this is needed because the popover trigger wrapper janks up the default styles
          borderLeft: '0',
          borderRadius: '0 .25rem .25rem 0'
        },
        title: this.props.assistiveText.more,
        variant: "icon"
      }))));
    }
  }]);

  return GlobalHeaderFavorites;
}(_react2.default.Component);

GlobalHeaderFavorites.displayName = _constants.GLOBAL_HEADER_FAVORITES;
GlobalHeaderFavorites.defaultProps = {
  assistiveText: {
    action: 'Toggle Favorite',
    more: 'View Favorites'
  }
};
GlobalHeaderFavorites.propTypes = propTypes;
exports.default = GlobalHeaderFavorites;