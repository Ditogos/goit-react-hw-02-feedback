import { Component } from "react";


export class FeedbackOption extends Component {
state = {
  good: 0,
  neutral: 0,
  bad: 0
}
render(){
  <Wrapper>
    <h1 className="State"></h1>
    <ul className="ListFeedback">
      <li>Good</li>
      <li>Neutral</li>
      <li>Bad</li>
    </ul>
  </Wrapper>
}
}