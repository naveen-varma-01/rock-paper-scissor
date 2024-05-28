import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'
import 'reactjs-popup/dist/index.css'

import {
  PopContainer,
  PopupButton,
  RulesImage,
  RulesImageContainer,
} from '../Game/StyledComponent'

const Rules = () => (
  <>
    <PopContainer>
      <Popup
        modal
        trigger={
          <PopupButton type="button" className="trigger-button">
            RULES
          </PopupButton>
        }
      >
        {close => (
          <>
            <RulesImageContainer>
              <RulesImage
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
                className="rules-image"
              />
              <PopupButton
                type="button"
                className="trigger-button"
                onClick={() => close()}
              >
                <RiCloseLine />
              </PopupButton>
            </RulesImageContainer>
          </>
        )}
      </Popup>
    </PopContainer>
  </>
)
export default Rules
