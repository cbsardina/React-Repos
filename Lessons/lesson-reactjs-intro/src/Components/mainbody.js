import React, { Component } from 'react';
import TopPara from './toppara';
import BottomPara from './bottompara';


export default class MainBody extends Component {
    render() {
        return (
            <div className="main-body">
                <TopPara/>
                <BottomPara/>
            </div>
        );
    }
}
