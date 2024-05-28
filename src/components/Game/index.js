import {Component} from 'react'

import {
  BgContainer,
  Para,
  Card,
  Head,
  ScoreCard,
  ButtonsContainer,
  ImgElement,
  RuleButton,
} from './StyledComponent'

import Button from '../Button'
import Rules from '../Rules'

class Game extends Component {
  state = {score: 0, myChoice: '', oppChoice: '', result: '', showResult: false}

  onGetId = (btnId, img) => {
    const {choicesList} = this.props
    const index = Math.floor(Math.random() * 3)

    if (btnId === 'PAPER' && choicesList[index].id === 'ROCK') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        myChoice: img,
        oppChoice: choicesList[index].imageUrl,
        result: 'YOU WON',
        showResult: true,
      }))
    } else if (btnId === 'SCISSORS' && choicesList[index].id === 'ROCK') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        myChoice: img,
        oppChoice: choicesList[index].imageUrl,
        result: 'YOU LOSE',
        showResult: true,
      }))
    } else if (btnId === 'ROCK' && choicesList[index].id === 'PAPER') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        myChoice: img,
        oppChoice: choicesList[index].imageUrl,
        result: 'YOU LOSE',
        showResult: true,
      }))
    } else if (btnId === 'SCISSORS' && choicesList[index].id === 'PAPER') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        myChoice: img,
        oppChoice: choicesList[index].imageUrl,
        result: 'YOU WON',
        showResult: true,
      }))
    } else if (btnId === 'ROCK' && choicesList[index].id === 'SCISSORS') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        myChoice: img,
        oppChoice: choicesList[index].imageUrl,
        result: 'YOU WON',
        showResult: true,
      }))
    } else if (btnId === 'PAPER' && choicesList[index].id === 'SCISSORS') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        myChoice: img,
        oppChoice: choicesList[index].imageUrl,
        result: 'YOU LOSE',
        showResult: true,
      }))
    } else {
      this.setState(prevState => ({
        score: prevState.score + 0,
        myChoice: img,
        oppChoice: choicesList[index].imageUrl,
        result: 'IT IS DRAW',
        showResult: true,
      }))
    }
    this.renderResult()
  }

  onClickPlayAgain = () => {
    this.setState({showResult: false})
  }

  renderResult = () => {
    const {myChoice, oppChoice, result} = this.state
    return (
      <>
        <div>
          <Para>YOU</Para>
          <ImgElement src={myChoice} alt="your choice" />
        </div>
        <div>
          <Para>OPPONENT</Para>
          <ImgElement src={oppChoice} alt="opponent choice" />
        </div>
        <div>
          <Para>{result}</Para>
          <RuleButton onClick={this.onClickPlayAgain}>PLAY AGAIN</RuleButton>
        </div>
      </>
    )
  }

  render() {
    const {score, showResult} = this.state
    const {choicesList} = this.props
    return (
      <BgContainer>
        <Card>
          <Head>
            ROCK
            <br />
            PAPER
            <br />
            SCISSORS
          </Head>
          <ScoreCard>
            <Para>Score</Para>
            <Para>{score}</Para>
          </ScoreCard>
        </Card>
        {showResult ? (
          this.renderResult()
        ) : (
          <ButtonsContainer>
            {choicesList.map(each => (
              <Button details={each} onGetId={this.onGetId} key={each.id} />
            ))}
          </ButtonsContainer>
        )}
        <Rules />
      </BgContainer>
    )
  }
}

export default Game
