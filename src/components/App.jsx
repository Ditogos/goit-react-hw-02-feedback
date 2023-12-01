import { Component } from "react";
import css from './App.module.css';

class Stat extends Component {
state = {
  good: 0,
  neutral: 0,
  bad: 0
}
}
export class App extends Component{
render(){
  return(
  <section>
    <h1 className={css.feetback}>Please save feedback</h1>
    <ul className={css.wrapper}>
      <button type="button" className={css.buttonGood}>Good</button>
      <button type="button" className={css.buttonNeutral}>Neutral</button>
      <button type="button" className={css.buttonBad}>Bad</button>
    </ul></section>
    
  )
}
}