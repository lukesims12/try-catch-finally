import React, { Component } from 'react';
import '../components/Language.css';

export default class Language extends Component {    
    render() {
        const {icon} = this.props;
        return(
            <div className="lang-div">
                <i className={icon + " lang-icon"}></i>
            </div>
        );
    }
}