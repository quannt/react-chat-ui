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
    text: {},
    senderNameStyle: {
        fontSize: "12px",
        fontWeight: "normal",
        lineHeight: "1.1",
        overflow: "hidden",
        paddingLeft: "12px",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
    }
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

            return React.createElement("div", { style: Object.assign({}, styles_1.default.chatbubbleWrapper, bubblesCentered ? {} : styles_1.default.chatbubbleOrientationNormal) }, this.props.message.senderName !== "" && React.createElement("span", { style: defaultBubbleStyles.senderNameStyle }, this.props.message.senderName), React.createElement("div", { style: Object.assign({}, styles_1.default.chatbubble, chatbubble, userBubble, this.props.message.contentType === "image/base64" ? styles_1.default.mediaChatbubble : {}) }, this.props.message.contentType === "" && React.createElement("p", { style: Object.assign({}, styles_1.default.p, text) }, this.props.message.message), this.props.message.contentType === "image/base64" && React.createElement("img", { style: Object.assign({}, styles_1.default.img), src: this.props.message.message }), React.createElement("div", { style: Object.assign({}, styles_1.default.chatBubbleStatus) }, this.props.message.isDelivered && !this.props.message.isRead && React.createElement("span", { "data-icon": "msg-dblcheck" }, React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 50 50", width: "16px", height: "15px" }, React.createElement("g", { id: "surface1" }, React.createElement("path", { fill: "#92A58C", d: "M 42.875 8.625 C 42.84375 8.632813 42.8125 8.644531 42.78125 8.65625 C 42.519531 8.722656 42.292969 8.890625 42.15625 9.125 L 21.71875 40.8125 L 7.65625 28.125 C 7.410156 27.8125 7 27.675781 6.613281 27.777344 C 6.226563 27.878906 5.941406 28.203125 5.882813 28.597656 C 5.824219 28.992188 6.003906 29.382813 6.34375 29.59375 L 21.25 43.09375 C 21.46875 43.285156 21.761719 43.371094 22.050781 43.328125 C 22.339844 43.285156 22.59375 43.121094 22.75 42.875 L 43.84375 10.1875 C 44.074219 9.859375 44.085938 9.425781 43.875 9.085938 C 43.664063 8.746094 43.269531 8.566406 42.875 8.625 Z " })))), this.props.message.isRead && React.createElement("span", { "data-icon": "msg-dblcheck" }, React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 15", width: "16", height: "15" }, React.createElement("path", { fill: "#92A58C", d: "M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" }))))));
        }
    }, {
        key: "renderGrayBubble",
        value: function renderGrayBubble() {
            var bubbleStyles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultBubbleStyles;
            var bubblesCentered = this.props.bubblesCentered;
            var chatbubble = bubbleStyles.chatbubble,
                text = bubbleStyles.text;

            return React.createElement("div", { style: Object.assign({}, styles_1.default.chatbubbleWrapper, bubblesCentered ? {} : styles_1.default.recipientChatbubbleOrientationNormal) }, this.props.message.senderName !== "" && React.createElement("span", { style: defaultBubbleStyles.senderNameStyle }, this.props.message.senderName), React.createElement("div", { style: Object.assign({}, styles_1.default.chatbubble, styles_1.default.recipientChatbubble, chatbubble, this.props.message.contentType === "image/base64" ? styles_1.default.mediaChatbubble : {}) }, this.props.message.contentType === "" && React.createElement("p", { style: Object.assign({}, styles_1.default.p, text) }, this.props.message.message), this.props.message.contentType === "image/base64" && React.createElement("img", { style: Object.assign({}, styles_1.default.img), src: this.props.message.message }), React.createElement("div", { style: Object.assign({}, styles_1.default.chatBubbleStatus) }, this.props.message.isDelivered && !this.props.message.isRead && React.createElement("span", { "data-icon": "msg-dblcheck" }, React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 50 50", width: "16px", height: "15px" }, React.createElement("g", { id: "surface1" }, React.createElement("path", { fill: "#92A58C", d: "M 42.875 8.625 C 42.84375 8.632813 42.8125 8.644531 42.78125 8.65625 C 42.519531 8.722656 42.292969 8.890625 42.15625 9.125 L 21.71875 40.8125 L 7.65625 28.125 C 7.410156 27.8125 7 27.675781 6.613281 27.777344 C 6.226563 27.878906 5.941406 28.203125 5.882813 28.597656 C 5.824219 28.992188 6.003906 29.382813 6.34375 29.59375 L 21.25 43.09375 C 21.46875 43.285156 21.761719 43.371094 22.050781 43.328125 C 22.339844 43.285156 22.59375 43.121094 22.75 42.875 L 43.84375 10.1875 C 44.074219 9.859375 44.085938 9.425781 43.875 9.085938 C 43.664063 8.746094 43.269531 8.566406 42.875 8.625 Z " })))), this.props.message.isRead && React.createElement("span", { "data-icon": "msg-dblcheck" }, React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 15", width: "16", height: "15" }, React.createElement("path", { fill: "#92A58C", d: "M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" }))))));
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