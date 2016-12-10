//IMPORTING COMPONENTS
import Header from './Header'
import Footer from './Footer'

import React, { Component } from 'react';


import TabBarContainer from './features/tabs/TabBarContainer';
import ApiOne from './features/apione/ApiOne';
import ApiTwo from './features/apitwo/ApiTwo';
import ApiThree from './features/apithree/ApiThree';
import ApiFour from './features/apifour/ApiFour';


import './App.css';


class App extends Component {

  render() {
    const tabs = [
      {name : 'apione', label : 'Api One Info', component : ApiOne},
      {name : 'apitwo', label : 'Api Two Info', component :ApiTwo },
      {name : 'apithree', label : 'Api Three Info', component : ApiThree},
      {name : 'apifour', label : 'Api Four Info', component : ApiFour}
    ];

    return (
      <div>
      {/*Rendering Header Component*/}
        <Header />
        {this.props.children}
        <Footer />
      </div>


    );
  }
}

export default App;
