import * as React from 'react'
import ChatBubbleProps from './interface'
import styles from './styles'

const defaultBubbleStyles = {
  userBubble: {},
  chatbubble: {},
  text: {},
}

export default class ChatBubble extends React.Component {
  props

  constructor(props: ChatBubbleProps) {
    super(props)
  }

  // Helper render method for redering a chat bubble
  public renderBlueBubble(bubbleStyles = defaultBubbleStyles) {
    const { bubblesCentered } = this.props
    const { userBubble, chatbubble, text } = bubbleStyles
    return (
      <div
        style={{
          ...styles.chatbubbleWrapper,
          ...bubblesCentered ? {} : styles.chatbubbleOrientationNormal,
        }}
      >
        <div
          style={{
            ...styles.chatbubble,
            ...chatbubble,
            ...userBubble,
            ...this.props.message.contentType === 'image\/base64'
             ? styles.mediaChatbubble : {}
          }}
        >
          {this.props.message.contentType === '' &&
              <p style={{ ...styles.p, ...text }}>{this.props.message.message}</p>
          }

          {this.props.message.contentType === 'image\/base64' &&
             <img style={{ ...styles.img }} src={this.props.message.message} />
          }
        </div>
      </div>
    )
  }

  // Helper render method for redering a chat bubble
  public renderGrayBubble(bubbleStyles = defaultBubbleStyles) {
    const { bubblesCentered } = this.props
    const { chatbubble, text } = bubbleStyles
    return (
      <div
        style={{
          ...styles.chatbubbleWrapper,
          ...bubblesCentered ? {} : styles.recipientChatbubbleOrientationNormal,
        }}
      >
        <div
          style={{
            ...styles.chatbubble,
            ...styles.recipientChatbubble,
            ...chatbubble,
            ...this.props.message.contentType === 'image\/base64'
             ? styles.mediaChatbubble : {}
          }}
        >
          {this.props.message.contentType === '' &&
              <p style={{ ...styles.p, ...text }}>{this.props.message.message}</p>
          }

          {this.props.message.contentType === 'image\/base64' &&
             <img style={{ ...styles.img }} src={this.props.message.message} />
          }
          
        </div>
      </div>
    )
  }

  public render() {
    const bubbleStyles = this.props.bubbleStyles
    // message.id 0 is reserved for blue
    return this.props.message.id === 0
      ? this.renderBlueBubble(bubbleStyles)
      : this.renderGrayBubble(bubbleStyles)
  }
}

export { ChatBubbleProps }
