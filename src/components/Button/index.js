import {CustomButton, ImgElement} from '../Game/StyledComponent'

const Button = props => {
  const {details, onGetId} = props
  const {id, imageUrl} = details
  const onClickButton = () => {
    onGetId(id, imageUrl)
  }
  return (
    <>
      <CustomButton
        key={id}
        onClick={onClickButton}
        type="button"
        data-testid={`${id}Button`}
      >
        <ImgElement src={imageUrl} alt={id} />
      </CustomButton>
    </>
  )
}
export default Button
