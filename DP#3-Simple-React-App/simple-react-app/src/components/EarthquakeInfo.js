import React, { Component } from 'react';
import Moment from 'moment';
import data from '../data/earthquakes';

export default class EarthquakeInfo extends Component {
    render() {
        return (
            <div className="earthquake-title">
                <h1>This is a list of 8 Earthquakes occuring on the morning of July 14th across the United States.</h1>
            </div>
        )
    }

}