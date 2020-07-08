import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
// import { Redirect } from "react-router";
import Autocomplete from "react-autocomplete";
import MainCategoryTitle from "../MainCategoryContainer/MainCategoryTitle";
import "../MainCategoryContainer/maincategory.css";
import { CategoriesData, renderCategoriesName } from "../MainCategoryContainer/maincategoryData";


class MainCategoryModel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            val: '',
            // formRedirect: false
        };
    }

    // canBeSubmitted() {
    //     const { val } = this.state;
    //     return val.length > 0
    // }

    // mainsubmitData = (event) => {
    //     event.preventDefault();
    //     if (!this.canBeSubmitted()) {
    //         return;
    //     }
    //     const { val } = this.state;
    //     alert(`This is the: ${val} sub-category`);
    //     this.setState({
    //         val: '',
    //         formRedirect: true
    //     });
    //     console.log(this.state.val);
    // }


    render() {
        // const { from } = this.props.location.state || '/'
        // const { formRedirect } = this.state
        // const isEnabled = this.canBeSubmitted();
        return (
        <Fragment>
        <MainCategoryTitle />
        {/* <form onSubmit={this.mainsubmitData}> */}
        <form>
            <div className="autocomplete-wrapper">
                <Autocomplete
                  id="main-input-style"
                  value={this.state.val}
                  items={CategoriesData()}
                  getItemValue={item => item.name}
                  shouldItemRender={renderCategoriesName}
                  renderMenu={item => (
                    <div key={item.id} className="dropdown">
                        <Link to="/sub-categories-page">{item}</Link>
                    </div>    
                  )}
                  renderItem={(item, isHighlighted) => 
                    <div key={item.id} className={`item ${isHighlighted ? 'selected-item' : ''}`}>
                        <span>{item.name}</span>
                    </div>
                  }
                  onChange={(event, val) => this.setState({
                      val 
                 })}
                  onSelect={val => this.setState({ 
                      val 
                })}
                />
            </div>
            {/* <div className="form-group" id="btn-container">
                <button type="submit" 
                    className="btn btn-outline-secondary m-20 btn-lg btn-inline"
                    onClick={this.mainsubmitData}
                    disabled={!isEnabled}
                >
                   Submit
                </button>
            </div> */}
        </form>
        {/* {formRedirect && (
            <Redirect to={from || "/sub-categories-page"} /> */}
        {/* )} */}
        </Fragment>
        )
    }
}



export default MainCategoryModel;
