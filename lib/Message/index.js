"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var Message = function Message(messageData) {
    _classCallCheck(this, Message);

    this.id = messageData.id;
    this.message = messageData.message;
    this.senderName = messageData.senderName || undefined;
    this.contentType = messageData.contentType;
    this.isDelivered = messageData.isDelivered;
    this.isRead = messageData.isRead;
};

exports.default = Message;