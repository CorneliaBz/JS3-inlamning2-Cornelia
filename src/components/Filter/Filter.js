import React from "react";

export default class Filter extends React.Component { 

    render() {

        return (
             <button onClick={ () => this.props.filterCategory(this.props.productCategory)}>{this.props.productCategory}</button>
        )
    }
}