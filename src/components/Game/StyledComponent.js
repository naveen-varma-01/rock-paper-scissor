import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #223a5f;
  background-size: cover;
  padding: 30px;
  height: 100vh;
`

export const Card = styled.div`
  background-color: #223a5f;
  padding: 10px;
  border: 3px solid #ffffff;
  border-radius: 12px;
`

export const Head = styled.h1`
  color: #ffffff;
  font-size: 20px;
`

export const Para = styled.p`
  color: #223a5f;
  font-size: 25px;
  font-family: 'Roboto';
`

export const ScoreCard = styled.div`
  background-color: #ffffff;
  padding: 4px;
  border-radius: 10px;
`

export const ButtonsContainer = styled.div`
  margin: 20px;
`

export const CustomButton = styled.button`
  border: 0px;
  background-color: transparent;
`

export const ImgElement = styled.img`
  height: 120px;
  width: 120px;
`

export const RuleButton = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  border-radius: 8px;
`

export const RulesImageContainer = styled.div`
  diplay: flex;
  justify-content: center;
  padding: 30px;
`

export const RulesImage = styled.img`
height:50%
width:50%`

export const PopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
`

export const PopupButton = styled(RuleButton)`
  width: 100px;
`
