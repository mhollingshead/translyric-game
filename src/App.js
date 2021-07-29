import axios from 'axios';
import { Component } from 'react';
import { getLyrics, translateLyrics } from './helpers/lyrics';
import './App.css';
const langs = ['zh', 'ja', 'ko', 'ru', 'hi'];

class App extends Component {
  state = {
    lyrics: []
  }
  componentDidMount() {
    const languageOrder = shuffle(langs).splice(3, 2);
    getLyrics("Drake", "Over")
      .then(res => {
        const lyricArr = res.data.mus[0].text.replaceAll("?", "'").replaceAll("''", "',").split("\n");
        const lyricBar = lyricArr.splice(0, 8);
        const barText = lyricBar.join(" \n ");
        console.log(barText);
        return translateLyrics(barText, "en", languageOrder[0]);
      })
      .then (res => {
        console.log(res.data);
        return translateLyrics(res.data.translatedText, languageOrder[0], languageOrder[1]);
      })
      .then(res => {
        console.log(res.data);
        return translateLyrics(res.data.translatedText, languageOrder[1], "en");
      })
      .then(res => {
        console.log(res.data.translatedText);
        this.setState({ lyrics: res.data.translatedText.split("\n") })
      })
  }
  render() {
    return (
      <div className="App">
        {
          this.state.lyrics && this.state.lyrics.map((line) => (
            <div key={Math.random()}>{line}</div>
          ))
        }
      </div>
    );
  }
}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}


export default App;
