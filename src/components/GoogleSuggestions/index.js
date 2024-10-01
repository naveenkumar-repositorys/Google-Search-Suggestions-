// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onItemClick = uniqueId => {
    const {suggestionsList} = this.props
    let searchNameResult = null
    const searchFilterResult = suggestionsList.filter(eachItem => {
      if (eachItem.id === uniqueId) {
        searchNameResult = eachItem.suggestion
        return searchNameResult
      }
      return
    })
    this.setState({searchInput: searchNameResult})
  }

  onChangeInputEl = event => {
    this.setState({searchInput: event.target.value})
    console.log(event.target.value)
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResult = suggestionsList.filter(eachItem => {
      const suggestionsItemInLowerCase = eachItem.suggestion.toLowerCase()
      return suggestionsItemInLowerCase.includes(searchInput)
    })
    return (
      <div className="bg-container">
        <img
          alt="google logo"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="googleLogo"
        />
        <div className="search-input-ulRecomendedContainer">
          <div className="searchIconContainer">
            <img
              alt="search icon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="searchIcon"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="inputSearchEl"
              onChange={this.onChangeInputEl}
              value={searchInput}
            />
          </div>
          <ul className="unorderListItem-container">
            {searchResult.map(eachItem => (
              <SuggestionItem
                suggestionsList={eachItem}
                key={eachItem.id}
                onItemClick={this.onItemClick}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
