import React, { Component } from 'react';
import '../styles/App.css';
import NavBar from './NavBar'
import PlayListForm from './PlayListForm'
import PlayList from './PlayList'

class App extends Component {
  render() {
    return (
      <div className="App">
              <NavBar/>
          <div className="container">
              <div className="row">
                  <PlayListForm/>
                  <PlayList sng={this.state.songs}/>
              </div>
          </div>
      </div>
    );
  }
}

export default App;

/*  * * * * * INSTRUCTIONS
This project is about managing state, props, lifecycles, and forms. The following should be true of your application:

1. Your PlayListcomponent should pass down the state in the form of props to your PlayListItem component which will render the actual play list entries. (Hint: PlayListItem should be imported in PlayList)

2. Your App.js component should only have import statements for your NavBar, PlayList, and PlayListForm.

3. The state for your PlayListForm component should have userName, songArtist, songTitle, and songNotes in order to function properly with the fetch functions from the tinylasgna.js file that you will copy into the component. Follow the directions in that file.

4. The state for your PlayList should just have one key value pair, songs, in order to properly function with the fetch function from the tinylasagna.js file that you will copy into the PlayListComponent (follow the directions in that file).

5. The styling is up to you, but please make this a polished product!
 */