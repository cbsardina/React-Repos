import React, { Component } from 'react';

let famousAstroPhysicists = [
    {
        id: 1,
        firstName: "Carl",
        lastName: "Sagan",
        alive: "false",
        nationality: "United States",

    },
    {
        id: 2,
        firstName: "Neil",
        lastName: "deGrasse Tyson",
        alive: "true",
        nationality: "United States",
    },
    {
        id: 3,
        firstName: "Stephen",
        lastName: "Hawking",
        alive: "true",
        nationality: "United Kingdom, England",
    },

];


export default class FamousAstroPhysicists extends Component {
    render() {
        let famedPhysicists = famousAstroPhysicists.map((physicist) => {
            return (
                <div key={physicist.id}>
                    <h1>{physicist.lastName + ", " + physicist.firstName}</h1>
                    <h2>Still Alive: {physicist.alive}</h2>
                    <h3>Nationality: {physicist.nationality}</h3>
                </div>
                )
        });
        return (famedPhysicists);
    }
}