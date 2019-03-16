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
   * * `newNotificationsAfter`: Assistive text for when there are new notifications, after the notificationCount. The default is ' new notifications'.
   * * `newNotificationsBefore`: Assistive text for when there are new notifications, before the notificationCount. The default is ''.
   * * `noNotifications`: Assistive text for when there are no new notifications.
   */
  assistiveText: _propTypes2.default.shape({
    newNotificationsAfter: _propTypes2.default.string,
    newNotificationsBefore: _propTypes2.default.string,
    noNotifications: _propTypes2.default.string
  }),

  /**
   * Dictates the number of notifications shown in the new notifications badge.
   */
  notificationCount: _propTypes2.default.number,

  /**
   * A `Popover` component. The props from this popover will be merged and override any default props. The `children` prop will be ignored.
   */
  popover: _propTypes2.default.node
};
/**
 * A GlobalHeaderNotifications component. Notifications are a way to notify a user about a global change within the application.
 */

var GlobalHeaderNotifications =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GlobalHeaderNotifications, _React$Component);

  function GlobalHeaderNotifications() {
    _classCallCheck(this, GlobalHeaderNotifications);

    return _possibleConstructorReturn(this, (GlobalHeaderNotifications.__proto__ || Object.getPrototypeOf(GlobalHeaderNotifications)).apply(this, arguments));
  }

  _createClass(GlobalHeaderNotifications, [{
    key: "render",
    value: function render() {
      var buttonAriaProps = {
        'aria-live': 'assertive'
      };
      var notificationCount = this.props.notificationCount;
      var popoverProps = (0, _lodash2.default)({
        align: 'bottom right',
        body: _react2.default.createElement("span", null),
        triggerClassName: 'slds-dropdown-trigger slds-dropdown-trigger_click'
      }, this.props.popover ? this.props.popover.props : {});
      var notificationsAssistiveText = this.props.assistiveText.noNotifications;
      delete popoverProps.children;

      if (notificationCount > 0) {
        notificationsAssistiveText = "".concat(this.props.assistiveText.newNotificationsBefore).concat(notificationCount).concat(this.props.assistiveText.newNotificationsAfter);
      } else {
        buttonAriaProps['aria-atomic'] = true;
      }

      return _react2.default.createElement(_popover2.default, popoverProps, _react2.default.createElement(_button2.default, _extends({
        assistiveText: {
          icon: notificationsAssistiveText
        },
        className: "slds-button_icon slds-global-actions__notifications slds-global-actions__item-action",
        iconCategory: "utility",
        iconClassName: "slds-global-header__icon",
        iconName: "notification",
        iconSize: "small",
        iconVariant: "container",
        title: notificationsAssistiveText,
        variant: "icon"
      }, buttonAriaProps)), notificationCount > 0 ? _react2.default.createElement("span", {
        "aria-hidden": "true",
        className: "slds-notification-badge slds-incoming-notification slds-show-notification"
      }, notificationCount) : _react2.default.createElement("span", {
        "aria-hidden": "true",
        className: "slds-notification-badge"
      }));
    }
  }]);

  return GlobalHeaderNotifications;
}(_react2.default.Component);

GlobalHeaderNotifications.displayName = _constants.GLOBAL_HEADER_NOTIFICATIONS;
GlobalHeaderNotifications.defaultProps = {
  assistiveText: {
    newNotificationsAfter: ' new notifications',
    newNotificationsBefore: '',
    noNotifications: 'No new notifications'
  },
  notificationCount: 0
};
GlobalHeaderNotifications.propTypes = propTypes;
exports.default = GlobalHeaderNotifications;