import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    reviewNum: 0,
  }

  previousReview = () => {
    const {reviewNum} = this.state

    if (reviewNum - 1 >= 0) {
      this.setState(prevState => ({
        reviewNum: prevState.reviewNum - 1,
      }))
    }
  }

  nextReview = () => {
    const {reviewNum} = this.state
    const {reviewsList} = this.props
    const lengthOfTheReviewList = reviewsList.length

    if (reviewNum + 1 < lengthOfTheReviewList) {
      this.setState(prevState => ({
        reviewNum: prevState.reviewNum + 1,
      }))
    }
  }

  render() {
    const {reviewNum} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[reviewNum]

    return (
      <div className="app-container">
        <div className="reviews-container">
          <h1 className="review-heading">Reviews</h1>
          <div className="review-carousel-container">
            <button
              type="button"
              className="arrow-btn"
              data-testid="leftArrow"
              onClick={this.previousReview}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>
            <div className="user-review-details-container">
              <img src={imgUrl} alt={username} className="user-img" />
              <p className="user-name">{username}</p>
              <p className="user-company-name">{companyName}</p>
              <p className="user-review-description">{description}</p>
            </div>
            <button
              type="button"
              className="arrow-btn"
              data-testid="rightArrow"
              onClick={this.nextReview}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
