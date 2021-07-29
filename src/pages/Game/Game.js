import { Component } from 'react';
import { getLyrics, translateLyrics } from '../../helpers/lyrics';
import './Game.scss';
const langs = [
    {language: 'zh', flag: "🇨🇳"}, 
    {language: 'ja', flag: "🇯🇵"}, 
    {language: 'ko', flag: "🇰🇷"}, 
    {language: 'ru', flag: "🇷🇺"}, 
    {language: 'hi', flag: "🇮🇳"}
  ];

export default class Game extends Component {
    state = {
        originalLyrics: [],
        lyrics: [],
        languages: []
    }
    componentDidMount() {
        const languageOrder = shuffle(langs).splice(0, 2);
        console.log(languageOrder);
        this.setState({ languages: languageOrder });
        getLyrics("Drake", "Over")
          .then(res => {
            const lyricArr = res.data.mus[0].text.replaceAll("?", "'").replaceAll("''", "',").split("\n");
            const lyricBar = lyricArr.splice(0, 8);
            const barText = lyricBar.join(" \n ");
            console.log(barText);
            this.setState({ originalLyrics: lyricBar })
            return translateLyrics(barText, "en", languageOrder[0].language);
          })
          .then (res => {
            console.log(res.data);
            return translateLyrics(res.data.translatedText, languageOrder[0].language, languageOrder[1].language);
          })
          .then(res => {
            console.log(res.data);
            return translateLyrics(res.data.translatedText, languageOrder[1].language, "en");
          })
          .then(res => {
            console.log(res.data.translatedText);
            this.setState({ lyrics: res.data.translatedText.split("\n") })
          })
      }
      render() {
        return (
          <div className="App">
            <div className="original">
              {
                this.state.originalLyrics && this.state.originalLyrics.map((line) => (
                  <div key={Math.random()}>{line}</div>
                ))
              }
            </div>
            <div className="translated">
              {
                this.state.lyrics && this.state.lyrics.map((line) => (
                  <div key={Math.random()}>{line}</div>
                ))
              }
            </div>
            <div className="languages">
              <span>🇺🇸→</span>
              {
                this.state.languages && this.state.languages.map((country, ind, arr) => (
                  <><span>{country.flag}→</span></>
                ))
              }
              🇺🇸
            </div>
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