function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { PureComponent } from 'react';
import Trigger from 'rc-trigger';
import PropTypes from 'prop-types';
import Content from './content';

var Tooltip =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(Tooltip, _PureComponent);

  function Tooltip() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "getPopupElement", function () {
      var _this$props = _this.props,
          overlay = _this$props.overlay,
          prefixCls = _this$props.prefixCls;
      return [React.createElement("div", {
        className: prefixCls + "-arrow",
        key: "arrow"
      }), React.createElement(Content, {
        key: "content",
        prefixCls: prefixCls,
        overlay: overlay
      })];
    });

    _defineProperty(_assertThisInitialized(_this), "saveTrigger", function (node) {
      _this.trigger = node;
    });

    return _this;
  }

  var _proto = Tooltip.prototype;

  _proto.getPopupDOMNode = function getPopupDOMNode() {
    return this.trigger.getPopupDomNode();
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        overlayClassName = _this$props2.overlayClassName,
        _this$props2$trigger = _this$props2.trigger,
        trigger = _this$props2$trigger === void 0 ? 'hover' : _this$props2$trigger,
        _this$props2$mouseEnt = _this$props2.mouseEnterDelay,
        mouseEnterDelay = _this$props2$mouseEnt === void 0 ? 0 : _this$props2$mouseEnt,
        _this$props2$mouseLea = _this$props2.mouseLeaveDelay,
        mouseLeaveDelay = _this$props2$mouseLea === void 0 ? 0.1 : _this$props2$mouseLea,
        overlayStyle = _this$props2.overlayStyle,
        children = _this$props2.children,
        _this$props2$onVisibl = _this$props2.onVisibleChange,
        onVisibleChange = _this$props2$onVisibl === void 0 ? function () {} : _this$props2$onVisibl,
        transitionName = _this$props2.transitionName,
        _this$props2$placemen = _this$props2.placement,
        placement = _this$props2$placemen === void 0 ? 'right' : _this$props2$placemen,
        _this$props2$align = _this$props2.align,
        align = _this$props2$align === void 0 ? {} : _this$props2$align,
        _this$props2$destroyT = _this$props2.destroyTooltipOnHide,
        destroyTooltipOnHide = _this$props2$destroyT === void 0 ? false : _this$props2$destroyT,
        defaultVisible = _this$props2.defaultVisible,
        getTooltipContainer = _this$props2.getTooltipContainer,
        prefixCls = _this$props2.prefixCls,
        builtinPlacements = _this$props2.builtinPlacements,
        restProps = _objectWithoutPropertiesLoose(_this$props2, ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "children", "onVisibleChange", "transitionName", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "prefixCls", "builtinPlacements"]);

    var extraProps = _extends({}, restProps);

    if ('visible' in this.props) {
      extraProps.popupVisible = this.props.visible;
    }

    return React.createElement(Trigger, _extends({
      popupClassName: overlayClassName,
      prefixCls: prefixCls,
      popup: this.getPopupElement(),
      action: trigger,
      builtinPlacements: builtinPlacements,
      popupPlacement: placement,
      ref: this.saveTrigger,
      popupAlign: align,
      getPopupContainer: getTooltipContainer,
      onPopupVisibleChange: onVisibleChange,
      popupTransitionName: transitionName,
      defaultPopupVisible: defaultVisible,
      destroyPopupOnHide: destroyTooltipOnHide,
      mouseLeaveDelay: mouseLeaveDelay,
      popupStyle: overlayStyle,
      mouseEnterDelay: mouseEnterDelay
    }, extraProps), children);
  };

  return Tooltip;
}(PureComponent);

_defineProperty(Tooltip, "propTypes", {
  trigger: PropTypes.string,
  defaultVisible: PropTypes.bool,
  visible: PropTypes.bool,
  builtinPlacements: PropTypes.object,
  transitionName: PropTypes.string,
  onVisibleChange: PropTypes.func,
  overlay: PropTypes.node,
  overlayStyle: PropTypes.object,
  overlayClassName: PropTypes.string,
  prefixCls: PropTypes.string.isRequired,
  mouseEnterDelay: PropTypes.number,
  mouseLeaveDelay: PropTypes.number,
  getTooltipContainer: PropTypes.func,
  destroyTooltipOnHide: PropTypes.bool,
  align: PropTypes.object,
  children: PropTypes.node,
  popupVisible: PropTypes.bool,
  placement: PropTypes.string // ref: PropTypes.func

});

export { Tooltip as default };