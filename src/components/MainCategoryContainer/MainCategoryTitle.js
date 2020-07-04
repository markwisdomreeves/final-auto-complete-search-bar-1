import React, {Component} from "react";

export default class MainCategoryTitle extends Component {
    render() {
        const title = "Seleziona o Cerca una categoria";
        return (
           <h2 className="main-category-title">{title}</h2>
        )
    }
}