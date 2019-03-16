"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _react3 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _avatar = require("../../avatar");

var _avatar2 = _interopRequireDefault(_avatar);

var _combobox = require("../../combobox");

var _combobox2 = _interopRequireDefault(_combobox);

var _menuDropdown = require("../../menu-dropdown");

var _menuDropdown2 = _interopRequireDefault(_menuDropdown);

var _globalHeader = require("../../global-header");

var _globalHeader2 = _interopRequireDefault(_globalHeader);

var _favorites = require("../../global-header/favorites");

var _favorites2 = _interopRequireDefault(_favorites);

var _help = require("../../global-header/help");

var _help2 = _interopRequireDefault(_help);

var _notifications = require("../../global-header/notifications");

var _notifications2 = _interopRequireDefault(_notifications);

var _profile = require("../../global-header/profile");

var _profile2 = _interopRequireDefault(_profile);

var _search = require("../../global-header/search");

var _search2 = _interopRequireDefault(_search);

var _setup = require("../../global-header/setup");

var _setup2 = _interopRequireDefault(_setup);

var _task = require("../../global-header/task");

var _task2 = _interopRequireDefault(_task);

var _iconSettings = require("../../icon-settings");

var _iconSettings2 = _interopRequireDefault(_iconSettings);

var _popover = require("../../popover");

var _popover2 = _interopRequireDefault(_popover);

var _constants = require("../../../utilities/constants");

var _default = require("../__examples__/default");

var _default2 = _interopRequireDefault(_default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable max-len */

/* eslint-disable no-script-url */

/* eslint-disable react/prop-types */
var ipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum fermentum eros, vel porta metus dignissim vitae. Fusce finibus sed magna vitae tempus. Suspendisse condimentum, arcu eu viverra vulputate, mauris odio dictum velit, in dictum lorem augue id augue. Proin nec leo convallis, aliquet mi ut, interdum nunc.'; // Notifications content is currently the contents of a generic `Popover` with markup copied from https://www.lightningdesignsystem.com/components/global-header/#Notifications. This allows content to have tab stops and focus trapping. If you need a more specific/explicit `GlobalHeaderNotification` content, please create an issue.

var HeaderNotificationsCustomContent = function HeaderNotificationsCustomContent(props) {
  return _react2.default.createElement("ul", {
    id: "header-notifications-custom-popover-content"
  }, props.items.map(function (item) {
    return _react2.default.createElement("li", {
      className: "slds-global-header__notification ".concat(item.unread ? 'slds-global-header__notification_unread' : ''),
      key: "notification-item-".concat(item.id)
    }, _react2.default.createElement("div", {
      className: "slds-media slds-has-flexi-truncate slds-p-around_x-small"
    }, _react2.default.createElement("div", {
      className: "slds-media__figure"
    }, _react2.default.createElement("span", {
      className: "slds-avatar slds-avatar_small"
    }, _react2.default.createElement("img", {
      alt: item.name,
      src: "/assets/images/".concat(item.avatar, ".jpg"),
      title: "".concat(item.name, " avatar\"")
    }))), _react2.default.createElement("div", {
      className: "slds-media__body"
    }, _react2.default.createElement("div", {
      className: "slds-grid slds-grid_align-spread"
    }, _react2.default.createElement("a", {
      href: "javascript:void(0);",
      className: "slds-text-link_reset slds-has-flexi-truncate"
    }, _react2.default.createElement("h3", {
      className: "slds-truncate",
      title: "".concat(item.name, " ").concat(item.action)
    }, _react2.default.createElement("strong", null, "".concat(item.name, " ").concat(item.action))), _react2.default.createElement("p", {
      className: "slds-truncate",
      title: item.comment
    }, item.comment), _react2.default.createElement("p", {
      className: "slds-m-top_x-small slds-text-color_weak"
    }, item.timePosted, ' ', item.unread ? _react2.default.createElement("abbr", {
      className: "slds-text-link slds-m-horizontal_xxx-small",
      title: "unread"
    }, "\u25CF") : null))))));
  }));
};

HeaderNotificationsCustomContent.displayName = 'HeaderNotificationsCustomContent'; // Profile content is currently the contents of a generic `Popover` with markup copied from https://www.lightningdesignsystem.com/components/global-header/. This allows content to have tab stops and focus trapping. If you need a more specific/explicit `GlobalHeaderProfile` content, please create an issue.

var HeaderProfileCustomContent = function HeaderProfileCustomContent(props) {
  return _react2.default.createElement("div", {
    id: "header-profile-custom-popover-content"
  }, _react2.default.createElement("div", {
    className: "slds-m-around_medium"
  }, _react2.default.createElement("div", {
    className: "slds-tile slds-tile_board slds-m-horizontal_small"
  }, _react2.default.createElement("p", {
    className: "tile__title slds-text-heading_small"
  }, "Art Vandelay"), _react2.default.createElement("div", {
    className: "slds-tile__detail"
  }, _react2.default.createElement("p", {
    className: "slds-truncate"
  }, _react2.default.createElement("a", {
    className: "slds-m-right_medium",
    href: "javascript:void(0)",
    onClick: props.onClick
  }, "Settings"), _react2.default.createElement("a", {
    href: "javascript:void(0)",
    onClick: props.onClick
  }, "Log Out"))))));
};

HeaderProfileCustomContent.displayName = 'HeaderProfileCustomContent';

var GlobalHeaderDemo =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GlobalHeaderDemo, _React$Component);

  function GlobalHeaderDemo(props) {
    var _this;

    _classCallCheck(this, GlobalHeaderDemo);

    _this = _possibleConstructorReturn(this, (GlobalHeaderDemo.__proto__ || Object.getPrototypeOf(GlobalHeaderDemo)).call(this, props));
    _this.state = {
      favoritesActionSelected: false
    };
    return _this;
  }

  _createClass(GlobalHeaderDemo, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(_globalHeader2.default, {
        onSkipToContent: (0, _addonActions.action)('Skip to Main Content'),
        onSkipToNav: (0, _addonActions.action)('Skip to Navigation') // Add back for visual review with navigation present.
        // The presence of React Modal in App Launcher in Global Navigation prevents Jest (node) testing.
        // navigation={globalNavigationBar(props)}
        ,
        assistiveText: {
          skipToContent: 'Skip to Main Content',
          skipToNavAssistiveText: 'Skip to Navigation'
        }
      }, _react2.default.createElement(_search2.default, {
        combobox: _react2.default.createElement(_combobox2.default, {
          events: {
            onSelect: (0, _addonActions.action)('Search Selected')
          },
          id: "header-search-custom-id",
          labels: {
            placeholder: 'Search Salesforce'
          },
          options: [{
            id: 'email',
            label: 'Email'
          }, {
            id: 'mobile',
            label: 'Mobile'
          }]
        })
      }), _react2.default.createElement(_favorites2.default, {
        actionSelected: this.state.favoritesActionSelected,
        onToggleActionSelected: function onToggleActionSelected(event, data) {
          _this2.setState({
            favoritesActionSelected: !data.actionSelected
          });
        },
        popover: _react2.default.createElement(_popover2.default, {
          ariaLabelledby: "favorites-heading",
          body: _react2.default.createElement("div", null, _react2.default.createElement("h2", {
            className: "slds-text-heading_small",
            id: "favorites-heading"
          }, "Favorites"), ipsum),
          id: "header-favorites-popover-id"
        })
      }), _react2.default.createElement(_task2.default, {
        dropdown: _react2.default.createElement(_menuDropdown2.default, {
          id: "header-task-dropdown-id",
          options: [{
            id: 'taskOptionOne',
            label: 'Task Option One'
          }, {
            id: 'taskOptionTwo',
            label: 'Task Option Two'
          }]
        })
      }), _react2.default.createElement(_help2.default, {
        popover: _react2.default.createElement(_popover2.default, {
          ariaLabelledby: "help-heading",
          body: _react2.default.createElement("div", null, _react2.default.createElement("h2", {
            className: "slds-text-heading_small",
            id: "help-heading"
          }, "Help and Training"), ipsum),
          id: "header-help-popover-id"
        })
      }), _react2.default.createElement(_setup2.default, {
        dropdown: _react2.default.createElement(_menuDropdown2.default, {
          id: "header-setup-dropdown-id",
          options: [{
            id: 'setupOptionOne',
            label: 'Setup Option One'
          }, {
            id: 'setupOptionTwo',
            label: 'Setup Option Two'
          }]
        })
      }), _react2.default.createElement(_notifications2.default, {
        notificationCount: 5,
        popover: _react2.default.createElement(_popover2.default, {
          ariaLabelledby: "header-notifications-custom-popover-content",
          body: _react2.default.createElement(HeaderNotificationsCustomContent, {
            items: [{
              action: 'mentioned you',
              avatar: 'avatar2',
              comment: '@jrogers Could I please have a review on my presentation deck',
              id: 1,
              name: 'Val Handerly',
              timePosted: '10 hours ago',
              unread: true
            }, {
              action: 'commented on your post',
              avatar: 'avatar3',
              comment: 'I totally agree with your sentiment',
              id: 2,
              name: 'Jon Rogers',
              timePosted: '13 hours ago',
              unread: true
            }, {
              action: 'mentioned you',
              avatar: 'avatar2',
              comment: "@jrogers Here's the conversation I mentioned to you",
              id: 3,
              name: 'Rebecca Stone',
              timePosted: '1 day ago'
            }]
          }),
          id: "header-notifications-popover-id"
        })
      }), _react2.default.createElement(_profile2.default, {
        avatar: this.props.avatar,
        buttonClassName: "custom-button-class",
        className: "custom-popover-class",
        popover: _react2.default.createElement(_popover2.default, {
          body: _react2.default.createElement(HeaderProfileCustomContent, null),
          id: "header-profile-popover-id"
        }),
        userName: "Art Vandelay"
      }));
    }
  }]);

  return GlobalHeaderDemo;
}(_react2.default.Component);

GlobalHeaderDemo.displayName = 'GlobalHeaderDemo';
(0, _react3.storiesOf)(_constants.GLOBAL_HEADER, module).addDecorator(function (getStory) {
  return _react2.default.createElement("div", {
    className: "slds-p-around_medium"
  }, _react2.default.createElement(_iconSettings2.default, {
    iconPath: "/assets/icons"
  }, getStory()));
}).add('Search + Navigation', function () {
  return _react2.default.createElement(GlobalHeaderDemo, null);
}).add('Fewer Elements', function () {
  return _react2.default.createElement(_globalHeader2.default, {
    logoSrc: "/assets/images/global-header/logo.svg"
  }, _react2.default.createElement(_setup2.default, {
    dropdown: _react2.default.createElement(_menuDropdown2.default, {
      id: "header-setup-dropdown-id",
      options: [{
        id: 'setupOptionOne',
        label: 'Setup Option One'
      }, {
        id: 'setupOptionTwo',
        label: 'Setup Option Two'
      }]
    })
  }), _react2.default.createElement(_profile2.default, {
    popover: _react2.default.createElement(_popover2.default, {
      body: _react2.default.createElement(HeaderProfileCustomContent, null),
      id: "header-profile-popover-id"
    }),
    userName: "Art Vandelay"
  }));
}).add('With custom <Avatar/>', function () {
  return _react2.default.createElement(GlobalHeaderDemo, {
    avatar: _react2.default.createElement(_avatar2.default, {
      variant: "user",
      label: "Art Vandelay"
    })
  });
}).add('Doc site Default', function () {
  return _react2.default.createElement(_default2.default, null);
});