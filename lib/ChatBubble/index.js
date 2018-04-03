"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styles_1 = require("./styles");
var defaultBubbleStyles = {
    userBubble: {},
    chatbubble: {},
    text: {}
};

var ChatBubble = function (_React$Component) {
    _inherits(ChatBubble, _React$Component);

    function ChatBubble(props) {
        _classCallCheck(this, ChatBubble);

        return _possibleConstructorReturn(this, (ChatBubble.__proto__ || Object.getPrototypeOf(ChatBubble)).call(this, props));
    }

    _createClass(ChatBubble, [{
        key: "renderBlueBubble",
        value: function renderBlueBubble() {
            var bubbleStyles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultBubbleStyles;
            var bubblesCentered = this.props.bubblesCentered;
            var userBubble = bubbleStyles.userBubble,
                chatbubble = bubbleStyles.chatbubble,
                text = bubbleStyles.text;

            return React.createElement("div", { style: Object.assign({}, styles_1.default.chatbubbleWrapper, bubblesCentered ? {} : styles_1.default.chatbubbleOrientationNormal) }, React.createElement("div", { style: Object.assign({}, styles_1.default.chatbubble, chatbubble, userBubble, this.props.message.contentType === 'image\/base64' ? styles_1.default.mediaChatbubble : {}) }, this.props.message.contentType === '' && React.createElement("p", { style: Object.assign({}, styles_1.default.p, text) }, this.props.message.message), this.props.message.contentType === 'image\/base64' && React.createElement("img", { style: Object.assign({}, styles_1.default.img), src: this.props.message.message })));
        }
    }, {
        key: "renderGrayBubble",
        value: function renderGrayBubble() {
            var bubbleStyles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultBubbleStyles;
            var bubblesCentered = this.props.bubblesCentered;
            var chatbubble = bubbleStyles.chatbubble,
                text = bubbleStyles.text;

            return React.createElement("div", { style: Object.assign({}, styles_1.default.chatbubbleWrapper, bubblesCentered ? {} : styles_1.default.recipientChatbubbleOrientationNormal) }, React.createElement("div", { style: Object.assign({}, styles_1.default.chatbubble, styles_1.default.recipientChatbubble, chatbubble, this.props.message.contentType === 'image\/base64' ? styles_1.default.mediaChatbubble : {}) }, this.props.message.contentType === '' && React.createElement("p", { style: Object.assign({}, styles_1.default.p, text) }, this.props.message.message), this.props.message.contentType === 'image\/base64' && React.createElement("img", { style: Object.assign({}, styles_1.default.img), src: this.props.message.message })));
        }
    }, {
        key: "render",
        value: function render() {
            var bubbleStyles = this.props.bubbleStyles;
            return this.props.message.id === 0 ? this.renderBlueBubble(bubbleStyles) : this.renderGrayBubble(bubbleStyles);
        }
    }]);

    return ChatBubble;
}(React.Component);

exports.default = ChatBubble;
//# sourceMappingURL=index.js.map