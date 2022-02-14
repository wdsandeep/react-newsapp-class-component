import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';


export default class App extends Component {

  // please use your own api key here
  apiKey = process.env.REACT_APP_NEWS_API;

  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({progress: progress })
  }

  categories = [
    {category: "general", path: "/general"},
    {category: "business", path: "/business"},
    {category: "entertainment", path: "/entertainment"},
    {category: "health", path: "health"},
    {category: "science", path: "science"},
    {category: "sports", path: "sports"},
    {category: "technology", path: "technology"},
  ];
  render() {
    return (
      <div>
      <BrowserRouter>
      <Navbar />
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
      <Routes>
        <Route exact path="/" element={<News apiKey={this.apiKey} setProgress={this.setProgress} pageSize={20} key="index"  country="in" category="general" />} />
        {this.categories.map(cat => {
        return <Route  key={cat.category} exact path={cat.path} element={<News setProgress={this.setProgress} apiKey={this.apiKey} key={cat.category} pageSize={25} country="in" category={cat.category} />} />
        })}

      </Routes>
      </BrowserRouter>
      </div>
    )
  }
}
