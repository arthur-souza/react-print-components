"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var ReactDOM = require("react-dom");
var PrintComponents = /** @class */ (function (_super) {
    tslib_1.__extends(PrintComponents, _super);
    function PrintComponents(props) {
        var _this = _super.call(this, props) || this;
        _this.rootId = 'react-components-print';
        _this.handlePrint = function () {
            document.body.insertAdjacentElement('afterbegin', _this.rootEl);
            window.onafterprint = _this.onPrintClose;
            window.print();
        };
        _this.onPrintClose = function () {
            window.onafterprint = function () { return null; };
            _this.rootEl.remove();
        };
        _this.createDivElement = function (id, className) {
            var el = document.createElement('div');
            if (id)
                el.setAttribute('id', id);
            if (className)
                el.setAttribute('class', className);
            return el;
        };
        _this.createStyle = function () { return (React.createElement("style", { dangerouslySetInnerHTML: { __html: "\n      #" + _this.rootId + " {\n        display: none;\n      }\n\n      @media print {\n        body > *:not(#" + _this.rootId + ") {\n          display: none;\n        }\n\n        #" + _this.rootId + " {\n          display: block;\n        }\n      }\n    " } })); };
        _this.rootEl = _this.createDivElement(_this.rootId, props.className);
        return _this;
    }
    PrintComponents.prototype.render = function () {
        var _a = this.props, children = _a.children, trigger = _a.trigger;
        var content = (React.createElement(React.Fragment, null,
            this.createStyle(),
            children));
        return (React.createElement(React.Fragment, null,
            React.cloneElement(trigger, tslib_1.__assign({}, trigger.props, { onClick: this.handlePrint })),
            ReactDOM.createPortal(content, this.rootEl)));
    };
    return PrintComponents;
}(React.Component));
exports.PrintComponents = PrintComponents;
exports.default = PrintComponents;
//# sourceMappingURL=index.js.map