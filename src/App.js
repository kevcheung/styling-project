import React, { Component } from 'react';
import NavBar from "./components/NavBar/NavBar";
import Button from "./components/Button/StartButton";
import Button2 from "./components/Button/Subscribe"
import './App.css';

class App extends Component {
  render() {
    return (
    <div className="App">
    <div className="Invision">INVISION PRESENTS</div>
    <div className="side-button">
      <div className="Tbutton">T</div>
      <div className="Fbutton">F</div>
      <div className="Ibutton">I</div>  
      <div className="Ebutton">E</div>
    </div>
      <div className="centered">
      <NavBar />
      <svg className="logo"> viewBox="0 0 51 50" xmlns="http://www.w3.org/2000/svg" class="hide-for-small"><title>:: owl</title><g fill="#FFF" fill-rule="evenodd"><path d="M4.641 46.165h19.481v-21.25c0-5.354-4.369-9.709-9.74-9.709-5.372 0-9.74 4.355-9.74 9.709v21.25zm23.157 3.664H.964V24.915c0-7.374 6.02-13.373 13.418-13.373s13.416 5.999 13.416 13.373v24.914z"></path><path d="M27.799 46.165H47.28v-21.25c0-5.354-4.37-9.709-9.741-9.709-5.371 0-9.74 4.355-9.74 9.709v21.25zm23.158 3.664H24.122V24.915c0-7.374 6.019-13.373 13.417-13.373 7.4 0 13.418 5.999 13.418 13.373v24.914z"></path><path d="M25.96 3.664c-11.756 0-21.318 9.533-21.318 21.251 0 11.718 9.562 21.25 21.319 21.25 11.755 0 21.32-9.532 21.32-21.25s-9.565-21.25-21.32-21.25m0 46.165C12.178 49.83.964 38.653.964 24.915S12.178 0 25.961 0c13.782 0 24.995 11.177 24.995 24.915S39.743 49.83 25.961 49.83"></path><path d="M17.866 26.637a3.479 3.479 0 0 1-3.484 3.473 3.479 3.479 0 0 1-3.485-3.473 3.479 3.479 0 0 1 3.485-3.473 3.479 3.479 0 0 1 3.484 3.473m23.158 0a3.479 3.479 0 0 1-3.484 3.473 3.48 3.48 0 0 1-3.485-3.473 3.48 3.48 0 0 1 3.485-3.473 3.479 3.479 0 0 1 3.484 3.473"></path></g></svg>
        <h1 className="Discover">Discover. Learn. Elevate.</h1>
        <p className="Paragraph">
        Introducing the best practices, stories, and insights from the world's top design leaders. Loaded with in-depth books, podcasts, and more. DesignBetter.Co is your essential guide to building remarkable products and teams.
        </p>
        <Button/>
        <Button2/>
        <p className="Scroll">Scroll</p>
       </div>
       </div>
    );
  }
}

export default App;
