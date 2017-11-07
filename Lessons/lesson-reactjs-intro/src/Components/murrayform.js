import React, { Component } from 'react';

export default class MurrayForm extends Component {
    render() {
        return (
            <div className="murrayinator">
                <h3>What is your favorite Murray Movie?</h3>
                <form className="murray-form" action="" method="">
                    <label htmlFor="murray-movie">Type your favorite movie here...</label>
                    <input type="text" id="murray-movie" />
                    <button>Submit</button>
                </form>
                <div className="answer">
                    <h4 className="murray-display"></h4>
                </div>
            </div>
        );
    }
}
