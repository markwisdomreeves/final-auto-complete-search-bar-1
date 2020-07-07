import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import Autocomplete from "react-autocomplete";
import SubCategoryTitle from "../SubCategoryContainer/SubCategoryTitle";
import "../SubCategoryContainer/subcategory.css";
import { CategoriesData, renderCategoriesName } from "../SubCategoryContainer/subcategoryData";


class SubCategoryModel extends Component {
    state = {
        val: ''
    };

    subSubmitData = (event) => {
        event.preventDefault();
        if (!this.canBeSubmitted()) {
            return;
        }
        const { val } = this.state;
        alert(`Questo è un modello di sottocategoria: ${val}`);
        this.setState({
            val: ''
        });
        console.log(this.state.val);
    }

    canBeSubmitted() {
        const { val } = this.state;
        return val.length > 0 && val.length > 3;
    }
    

    render() {
        const isEnabled = this.canBeSubmitted();
        return (
        <Fragment>
            <form onSubmit={this.subSubmitData}>
                <div className="sub-category-autocomplete-wrapper">
                <SubCategoryTitle />
                   <Autocomplete 
                    value={this.state.val}
                    items={CategoriesData()}
                    getItemValue={item=> item.name}
                    shouldItemRender={renderCategoriesName}
                    renderMenu={item => (
                        <div className="sub-category-dropdown">
                           <Link to="/sub-categories-page">{item}</Link>
                        </div>    
                    )}
                    renderItem={(item, isHighlighted) => 
                        <div className={`sub-category-item ${isHighlighted ? 'sub-selected-item' : ''}`}>
                            <Link to="/sub-categories-page">{item.name}</Link>
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



export default SubCategoryModel;
