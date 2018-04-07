import * as React from "react";
import ChatBubbleProps from "./interface";
import styles from "./styles";

const defaultBubbleStyles = {
  userBubble: {},
  chatbubble: {},
  text: {}
};

export default class ChatBubble extends React.Component {
  props;

  constructor(props: ChatBubbleProps) {
    super(props);
  }

  // Helper render method for redering a chat bubble
  public renderBlueBubble(bubbleStyles = defaultBubbleStyles) {
    const { bubblesCentered } = this.props;
    const { userBubble, chatbubble, text } = bubbleStyles;
    return (
      <div
        style={{
          ...styles.chatbubbleWrapper,
          ...(bubblesCentered ? {} : styles.chatbubbleOrientationNormal)
        }}
      >
        <div
          style={{
            ...styles.chatbubble,
            ...chatbubble,
            ...userBubble,
            ...(this.props.message.contentType === "image/base64"
              ? styles.mediaChatbubble
              : {})
          }}
        >
          {this.props.message.contentType === "" && (
            <p style={{ ...styles.p, ...text }}>{this.props.message.message}</p>
          )}

          {this.props.message.contentType === "image/base64" && (
            <img style={{ ...styles.img }} src={this.props.message.message} />
          )}
        </div>
      </div>
    );
  }

  // Helper render method for redering a chat bubble
  public renderGrayBubble(bubbleStyles = defaultBubbleStyles) {
    const { bubblesCentered } = this.props;
    const { chatbubble, text } = bubbleStyles;
    return (
      <div
        style={{
          ...styles.chatbubbleWrapper,
          ...(bubblesCentered
            ? {}
            : styles.recipientChatbubbleOrientationNormal)
        }}
      >
        <div
          style={{
            ...styles.chatbubble,
            ...styles.recipientChatbubble,
            ...chatbubble,
            ...(this.props.message.contentType === "image/base64"
              ? styles.mediaChatbubble
              : {})
          }}
        >
          {this.props.message.contentType === "" && (
            <p style={{ ...styles.p, ...text }}>{this.props.message.message}</p>
          )}

          {this.props.message.contentType === "image/base64" && (
            <img style={{ ...styles.img }} src={this.props.message.message} />
          )}

          <div style={{ ...styles.chatBubbleStatus }}>
            {this.props.message.isDelivered &&
              !this.props.message.isRead && (
                <span data-icon="msg-dblcheck">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width="16px"
                    height="15px"
                  >
                    <g id="surface1">
                      <path
                        fill="#92A58C"
                        d="M 42.875 8.625 C 42.84375 8.632813 42.8125 8.644531 42.78125 8.65625 C 42.519531 8.722656 42.292969 8.890625 42.15625 9.125 L 21.71875 40.8125 L 7.65625 28.125 C 7.410156 27.8125 7 27.675781 6.613281 27.777344 C 6.226563 27.878906 5.941406 28.203125 5.882813 28.597656 C 5.824219 28.992188 6.003906 29.382813 6.34375 29.59375 L 21.25 43.09375 C 21.46875 43.285156 21.761719 43.371094 22.050781 43.328125 C 22.339844 43.285156 22.59375 43.121094 22.75 42.875 L 43.84375 10.1875 C 44.074219 9.859375 44.085938 9.425781 43.875 9.085938 C 43.664063 8.746094 43.269531 8.566406 42.875 8.625 Z "
                      />
                    </g>
                  </svg>
                </span>
              )}
            {this.props.message.isRead && (
              <span data-icon="msg-dblcheck">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 15"
                  width="16"
                  height="15"
                >
                  <path
                    fill="#92A58C"
                    d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"
                  />
                </svg>
              </span>
            )}
          </div>
        </div>
      </div>
    );
  }

  public render() {
    const bubbleStyles = this.props.bubbleStyles;
    // message.id 0 is reserved for blue
    return this.props.message.id === 0
      ? this.renderBlueBubble(bubbleStyles)
      : this.renderGrayBubble(bubbleStyles);
  }
}

export { ChatBubbleProps };
