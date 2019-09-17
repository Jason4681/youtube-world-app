import React, { Component } from 'react';
import './App.css';
import Map from './container/Map';
import ContinentResults from './container/ContinentResults/ContinentResults';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import { connect } from 'react-redux';
import IntroInstruction from './components/IntroInstruction/IntroInstruction';
import Spinner from './components/Spinner/Spinner';

class App extends Component {

  render() {
    let activeVid = <div id='youtube-player' />;
    let activeCont = null;
    let spinner = null;
    let intro = <IntroInstruction txt="Select a Continent to Begin!" />
    if (this.props.activeVideo) {
      activeVid = <VideoPlayer url={this.props.activeVideo} />
    }
    if (this.props.activeContinent) {
      intro = null;
      activeCont = <ContinentResults continent={this.props.activeContinent} />
    }
    if (this.props.loading) {
      spinner = <Spinner />
    }
    return (
      <div>
        <Map />
        {intro}
        {spinner}
        {activeVid}
        {activeCont}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    activeContinent: state.activeContinent,
    activeVideo: state.activeVideo,
    activeData: state.activeData,
    asia: state.asia,
    europe: state.europe,
    northAmerica: state.northAmerica,
    southAmerica: state.southAmerica,
    australia: state.australia,
    africa: state.africa,
    updateString: state.updateString,
    alreadyLoaded: state.alreadyLoaded,
    loading: state.loading
  };
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
