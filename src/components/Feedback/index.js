// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isEmojiClicked: false}

  onClickEmoji = () => this.setState({isEmojiClicked: true})

  feedbackQuestionCard = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="feedback-question-con">
        <h1 className="question">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emojis-list">
          {emojis.map(eachEmoji => (
            <li className="emoji-con" key={eachEmoji.id}>
              <button
                className="emoji-btn"
                type="button"
                onClick={this.onClickEmoji}
              >
                <img
                  src={eachEmoji.imageUrl}
                  alt={eachEmoji.name}
                  className="image-emoji"
                />
                <br />
                <span className="name">{eachEmoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  feedbackThankyouCard = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="feedback-greeting-con">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="greeting">Thank you!</h1>
        <p className="description">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isEmojiClicked} = this.state

    return (
      <div className="feedback-container">
        <div className="feedback-card-container">
          {isEmojiClicked
            ? this.feedbackThankyouCard()
            : this.feedbackQuestionCard()}
        </div>
      </div>
    )
  }
}
export default Feedback
