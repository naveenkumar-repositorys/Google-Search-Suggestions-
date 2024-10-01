// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionsList, onItemClick} = props
  const {suggestion, id} = suggestionsList
  const onClickbtn = () => {
    onItemClick(id)
  }
  return (
    <li className="listItem-Container">
      <p className="listItem">{suggestion}</p>
      <button className="buttonEl" type="button" onClick={onClickbtn}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrowImage"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
