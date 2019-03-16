"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _react3 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _progressIndicator = require("../../../../components/progress-indicator");

var _progressIndicator2 = _interopRequireDefault(_progressIndicator);

var _modal = require("../../../../components/modal");

var _modal2 = _interopRequireDefault(_modal);

var _button = require("../../../../components/button");

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var steps = [{
  id: 0,
  label: _react2.default.createElement("i", null, "tooltip label #1"),
  assistiveText: 'This is custom text in the assistive text key'
}, {
  id: 1,
  label: 'tooltip label #2'
}, {
  id: 2,
  label: _react2.default.createElement("strong", null, "tooltip label #3")
}, {
  id: 3,
  label: 'tooltip label #4'
}, {
  id: 4,
  label: 'tooltip label #5'
}];

var handleStepEvent = function handleStepEvent(event, data) {
  console.log(data);
};

var getModal = function getModal(props) {
  return _react2.default.createElement(_modal2.default, props);
};

var modalFooter = function modalFooter(props) {
  return [_react2.default.createElement(_button2.default, {
    key: "modalBCancel",
    label: "Cancel"
  }), _react2.default.createElement(_progressIndicator2.default, {
    key: "modal-progress-indicator",
    variant: "modal",
    steps: steps,
    selectedStep: steps[2],
    completedSteps: steps.slice(0, 2),
    errorSteps: steps.slice(2, 3),
    onStepClick: handleStepEvent
  }), _react2.default.createElement(_button2.default, {
    key: "modalBSave",
    label: "Save",
    variant: "brand"
  })];
};

var modalContent = _react2.default.createElement("div", {
  className: "slds-modal__content slds-grow slds-p-around_medium",
  id: "modal-content-id-1",
  style: {
    height: '640px'
  }
});

var Example =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Example, _React$Component);

  function Example() {
    _classCallCheck(this, Example);

    return _possibleConstructorReturn(this, (Example.__proto__ || Object.getPrototypeOf(Example)).apply(this, arguments));
  }

  _createClass(Example, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement("div", {
        style: {
          height: '640px'
        }
      }, getModal({
        isOpen: true,
        title: 'Modal Header',
        children: modalContent,
        onRequestClose: (0, _addonActions.action)('modal closed'),
        footer: modalFooter(this.props),
        size: 'large',
        footerClassNames: 'slds-grid slds-grid_align-spread'
      }));
    }
  }]);

  return Example;
}(_react2.default.Component);

Object.defineProperty(Example, "displayName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: 'ProgressIndicatorModal'
});
exports.default = Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime