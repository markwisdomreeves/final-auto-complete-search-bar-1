import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import SubCatagoryTitle from "../SubCategoryContainer/SubCategoryTitle";
import "./sub-autocomplete-model.css";


class SubAutocompleteModel extends Component {
    static propTypes = {
        suggestions: PropTypes.instanceOf(Array)
      };
    
      static defaultProps = {
        suggestions: []
      };
    
      constructor(props) {
        super(props);
    
        this.state = {
          // The active selection's index
          activeSuggestion: 0,
          // The suggestions that match the user's input
          filteredSuggestions: [],
          // Whether or not the suggestion list is shown
          showSuggestions: false,
          // What the user has entered
          userInput: ""
        };
      }

      // Event fired when the input value is changed
  onChange = e => {
    const { suggestions } = this.props;
    const userInput = e.currentTarget.value;

    // Filter our suggestions that don't contain the user's input
    const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase().trim()) > -1
    );

    // Update the user input and filtered suggestions, reset the active
    // suggestion and make sure the suggestions are shown
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    });
  };

  // Event fired when the user clicks on a suggestion
  onClick = e => {
    // Update the user input and reset the rest of the state
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText
    });
  };

  // Event fired when the user presses a key down
  onKeyDown = e => {
    const { activeSuggestion, filteredSuggestions } = this.state;

    // User pressed the enter key, update the input and close the
    // suggestions
    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion]
      });
    }
    // User pressed the up arrow, decrement the index
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    // User pressed the down arrow, increment the index
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  subSubmitData = (event) => {
    event.preventDefault();
    if (!this.canBeSubmitted()) {
        return;
    }
    const { userInput } = this.state;
    alert(`Questo è un modello di sottocategoria: ${userInput}`);
    this.setState({
        userInput: ''
    });
    console.log(this.state.userInput);
    }

    canBeSubmitted() {
        const { 
            userInput
        } = this.state;
        return userInput.length > 0 && userInput.length > 3;
    }

    render() {
        const isEnabled = this.canBeSubmitted();
        const {
            onChange,
            onClick,
            onKeyDown,
            state: {
              activeSuggestion,
              filteredSuggestions,
              showSuggestions,
              userInput
            }
          } = this;
      
          let suggestionsListComponent;
      
          if (showSuggestions && userInput) {
            if (filteredSuggestions.length) {
              suggestionsListComponent = (
                <ul className="suggestions">
                  {filteredSuggestions.map((suggestion, index) => {
                    let className;
      
                    // Flag the active suggestion with a class
                    if (index === activeSuggestion) {
                      className = "suggestion-active";
                    }
      
                    return (
                      <li
                        className={className}
                        key={suggestion}
                        onClick={onClick}
                      >
                        {suggestion}
                      </li>
                    );
                  })}
                </ul>
              );
            } else {
              suggestionsListComponent = (
                <div className="no-suggestions">
                  <span className="no-segestions-error-message">No suggestions found, Invalid Category Name</span>
                </div>
              );
            }
          }
        return (
            <Fragment>
                <SubCatagoryTitle />
                <form onSubmit={this.subSubmitData}>
                    <input
                        type="text"
                        onChange={onChange}
                        onKeyDown={onKeyDown}
                        value={userInput}
                        />
                        {suggestionsListComponent}
                        <div className="form-group" id="btn-container">
                            <button type="submit" 
                            className="btn btn-outline-secondary m-20 btn-lg btn-inline btn-hover"
                            onClick={this.subSubmitData}
                            disabled={!isEnabled}
                            >
                            Submit
                        </button>
                    </div>
                  </form>
          </Fragment>
        )
    }
}


export default SubAutocompleteModel;