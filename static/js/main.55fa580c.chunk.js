(this["webpackJsonppair-programming"]=this["webpackJsonppair-programming"]||[]).push([[0],{30:function(e){e.exports=JSON.parse('[{"category":"hits-of-2010","songs":[{"artist":"Train","title":"Hey Soul Sister"},{"artist":"Usher","title":"OMG"},{"artist":"Eminem","title":"Love the way you lie"},{"artist":"Lady Gaga","title":"Telephone"},{"artist":"Katy Perry","title":"Teenage Dream"},{"artist":"The Script","title":"Breakeven"},{"artist":"Black Eyed Peas","title":"I Gotta Feeling"},{"artist":"Owl City","title":"Fireflies"},{"artist":"Justin Bieber","title":"Baby"},{"artist":"Owl City","title":"Fireflies"},{"artist":"Nickelback","title":"Rockstar"},{"artist":"One Republic","title":"Apologize"},{"artist":"Taylor Swift","title":"You Belong With Me"},{"artist":"Maroon 5","title":"Payphone"}]},{"category":"pop","songs":[{"artist":"Shaggy","title":"It Wasn\'t Me"},{"artist":"Backstreet Boys","title":"I Want It That Way"},{"artist":"TLC","title":"No Scrubs"},{"artist":"Spice Girls","title":"Wannabe"},{"artist":"Sean Kingston","title":"Beautiful Girls"},{"artist":"TOTO","title":"Africa"},{"artist":"Estelle","title":"American Boy"},{"artist":"The Killers","title":"Mr. Brightside"},{"artist":"Gloria Gaynor","title":"I Will Survive"},{"artist":"Van Morrison","title":"Brown Eyed Girl"},{"artist":"ABBA","title":"Dancing Queen"},{"artist":"The Beatles","title":"Hey Jude"},{"artist":"Survivor","title":"Eye of the Tiger"},{"artist":"Aerosmith","title":"Dream On"},{"artist":"Blink 182","title":"All The Small Things"},{"artist":"The Foundations","title":"Build Me Up Buttercup"},{"artist":"Journey","title":"Don\'t Stop Believin\'"}]},{"category":"rap","songs":[{"artist":"Drake","title":"Over"},{"artist":"Chamillionaire","title":"Ridin"},{"artist":"Travis Scott","title":"goosebumps"},{"artist":"Kanye West","title":"POWER"},{"artist":"Kendrick Lamar","title":"m.A.A.d city"},{"artist":"Drake","title":"Hotline Bling"},{"artist":"Biz Markie","title":"Just a Friend"},{"artist":"Big Shaq","title":"Man\'s Not Hot"},{"artist":"Fetty Wap","title":"Trap Queen"},{"artist":"Juice WRLD","title":"Lucid Dreams"},{"artist":"Soulja Boy","title":"Pretty Boy Swag"},{"artist":"Lil Baby","title":"Yes Indeed"}]},{"category":"classic-rock","songs":[{"artist":"Billy Joel","title":"Piano Man"},{"artist":"The Animals","title":"House of the Rising Sun"},{"artist":"Talking Heads","title":"Burning Down the House"},{"artist":"Phil Collins","title":"In the Air Tonight"},{"artist":"Stevie Nicks","title":"Edge of Seventeen"},{"artist":"Steve Miller Band","title":"The Joker"},{"artist":"John Lennon","title":"Imagine"},{"artist":"The Eagles","title":"Hotel California"},{"artist":"Lynyrd Skynyrd","title":"Sweet Home Alabama"},{"artist":"The Who","title":"Baba O\'Riley"},{"artist":"ACDC","title":"Back in Black"},{"artist":"The Beatles","title":"I Want to Hold Your Hand"},{"artist":"The Beatles","title":"I am the Walrus"}]},{"category":"test","songs":[{"artist":"Drake","title":"Over"},{"artist":"The Beatles","title":"Hey Jude"}]}]')},36:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){},69:function(e,t,s){},70:function(e,t,s){},71:function(e,t,s){"use strict";s.r(t);var a=s(1),i=s.n(a),n=s(28),r=s.n(n),l=(s(36),s(37),s(8)),c=s(2),o=(s(38),s(0));function h(){return Object(o.jsxs)("main",{className:"home-page",children:[Object(o.jsx)("h1",{className:"app-name",children:"Translyric!"}),Object(o.jsxs)("h2",{className:"app-slogan",children:["Test your knowledge of popular songs with a",Object(o.jsxs)("span",{id:"h2--bolded",onClick:function(){document.querySelector(".instructions")&&document.querySelector(".instructions").classList.toggle("invisible")},children:[" twist",Object(o.jsx)("sup",{children:"?"})]})]}),Object(o.jsxs)("div",{className:"instructions invisible",children:["We'll show you a random section of lyrics from a popular song that have been ",Object(o.jsx)("b",{children:"translated"})," into a random language multiple times before finally being translated back to english. ",Object(o.jsx)("i",{children:"Can you guess the song before time runs out?"}),Object(o.jsx)("div",{className:"instructions__sample"})]}),Object(o.jsxs)("div",{className:"categories",children:[Object(o.jsx)("div",{className:"category",children:Object(o.jsxs)(l.b,{to:"/game/pop",className:"game-path",children:[Object(o.jsx)("h1",{className:"music-type",children:"\u2728"}),Object(o.jsx)("h3",{className:"music-type-text",children:"Pop"}),Object(o.jsx)("button",{className:"game-path__button button",children:"Play Now"})]})}),Object(o.jsx)("div",{className:"category",children:Object(o.jsxs)(l.b,{to:"/game/hits-of-2010",className:"game-path",children:[Object(o.jsx)("h1",{className:"music-type",children:"\ud83c\udfa4"}),Object(o.jsx)("h3",{className:"music-type-text",children:"2010 Hits"}),Object(o.jsx)("button",{className:"game-path__button button",children:"Play Now"})]})}),Object(o.jsx)("div",{className:"category",children:Object(o.jsxs)(l.b,{to:"/game/rap",className:"game-path",children:[Object(o.jsx)("h1",{className:"music-type",children:"\ud83c\udfb5"}),Object(o.jsx)("h3",{className:"music-type-text",children:"Rap"}),Object(o.jsx)("button",{className:"game-path__button button",children:"Play Now"})]})}),Object(o.jsx)("div",{className:"category",children:Object(o.jsxs)(l.b,{to:"/game/classic-rock",className:"game-path",children:[Object(o.jsx)("h1",{className:"music-type",children:"\ud83c\udfb8"}),Object(o.jsx)("h3",{className:"music-type-text",children:"Classic Rock"}),Object(o.jsx)("button",{className:"game-path__button button",children:"Play Now"})]})})]})]})}var d=s(31),u=s(10),m=s(11),g=s(13),j=s(12),b=s(19),p=s.n(b);function O(e,t,s){return p.a.post("https://translate.astian.org/translate",{q:e,source:t,target:s})}function v(e){for(var t=e.length-1;t>0;t--){var s=Math.floor(Math.random()*t),a=e[t];e[t]=e[s],e[s]=a}return e}s(66);var x=function(e){Object(g.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(u.a)(this,s);for(var a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={seconds:0},e.handleFormSubmit=function(t){t.preventDefault(),clearInterval(e.time),e.props.checkResults({artist:t.target.artist.value.toLowerCase().replaceAll(" ","").replaceAll("'","").replaceAll(".",""),title:t.target.title.value.toLowerCase().replaceAll(" ","").replaceAll("'","").replaceAll(".",""),bonus:10*e.state.seconds})},e}return Object(m.a)(s,[{key:"componentDidMount",value:function(){var e=this;this.setState({seconds:30}),this.time=setInterval((function(){1===e.state.seconds?(clearInterval(e.time),e.props.checkResults({artist:"",title:"",bonus:0})):e.setState({seconds:e.state.seconds-1})}),1e3)}},{key:"render",value:function(){return Object(o.jsxs)("section",{className:"round",children:[Object(o.jsxs)("div",{className:"round__timer",children:[Object(o.jsx)("h2",{children:this.state.seconds}),Object(o.jsx)("div",{className:"round__bar-wrapper",children:Object(o.jsx)("div",{className:"round__bar",style:{width:this.state.seconds/30*100+"%"}})})]}),Object(o.jsx)("div",{className:"translated",children:this.props.translatedLyrics.map((function(e){return Object(o.jsx)("div",{children:e},Math.random())}))}),Object(o.jsxs)("form",{className:"form",onSubmit:this.handleFormSubmit,children:[Object(o.jsx)("input",{className:"form__input",name:"title",id:"title",placeholder:"Title",autoComplete:"off"}),Object(o.jsx)("input",{className:"form__input",name:"artist",id:"artist",placeholder:"Artist",autoComplete:"off"}),Object(o.jsx)("button",{className:"button",children:"SUBMIT"})]})]})}}]),s}(a.Component);s(67);function f(e){var t=e.originalLyrics,s=e.translatedLyrics,a=e.languages,i=e.nextRound,n=e.song;return Object(o.jsxs)("div",{className:"result",children:[Object(o.jsx)("div",{className:"result__head",children:Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{className:"result__title",children:n.title}),Object(o.jsx)("p",{className:"result__artist",children:n.artist})]})}),Object(o.jsx)("div",{className:"original",children:t&&t.map((function(e){return Object(o.jsx)("div",{children:e},Math.random())}))}),Object(o.jsx)("div",{className:"arrow",children:"\u2192"}),Object(o.jsx)("div",{className:"translated",children:s&&s.map((function(e){return Object(o.jsx)("div",{children:e},Math.random())}))}),Object(o.jsxs)("div",{className:"languages",children:[Object(o.jsxs)("span",{className:"language",children:[Object(o.jsx)("span",{className:"flag",children:"\ud83c\uddfa\ud83c\uddf8"}),"\u2192"]}),a&&a.map((function(e){return Object(o.jsxs)("span",{className:"language",children:[Object(o.jsx)("span",{className:"flag",children:e.flag}),"\u2192"]},Math.random())})),Object(o.jsx)("span",{className:"flag",children:"\ud83c\uddfa\ud83c\uddf8"})]}),Object(o.jsx)("button",{onClick:function(){i()},className:"button",children:"NEXT ROUND"})]})}s(68);function y(e){var t=e.lives;return Object(o.jsx)("div",{className:"lives",children:3===t?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("span",{className:"lives__heart",children:"\u2764\ufe0f"}),Object(o.jsx)("span",{className:"lives__heart",children:"\u2764\ufe0f"}),Object(o.jsx)("span",{className:"lives__heart",children:"\u2764\ufe0f"})]}):2===t?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("span",{className:"lives__heart lives__heart--gone",children:"\u2764\ufe0f"}),Object(o.jsx)("span",{className:"lives__heart",children:"\u2764\ufe0f"}),Object(o.jsx)("span",{className:"lives__heart",children:"\u2764\ufe0f"})]}):1===t?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("span",{className:"lives__heart lives__heart--gone",children:"\u2764\ufe0f"}),Object(o.jsx)("span",{className:"lives__heart lives__heart--gone",children:"\u2764\ufe0f"}),Object(o.jsx)("span",{className:"lives__heart",children:"\u2764\ufe0f"})]}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("span",{className:"lives__heart lives__heart--gone",children:"\u2764\ufe0f"}),Object(o.jsx)("span",{className:"lives__heart lives__heart--gone",children:"\u2764\ufe0f"}),Object(o.jsx)("span",{className:"lives__heart lives__heart--gone",children:"\u2764\ufe0f"})]})})}var N=s(30),_=(s(69),[{language:"de",flag:"\ud83c\udde9\ud83c\uddea"},{language:"zh",flag:"\ud83c\udde8\ud83c\uddf3"},{language:"ja",flag:"\ud83c\uddef\ud83c\uddf5"},{language:"ko",flag:"\ud83c\uddf0\ud83c\uddf7"},{language:"ru",flag:"\ud83c\uddf7\ud83c\uddfa"},{language:"hi",flag:"\ud83c\uddee\ud83c\uddf3"}]),S=function(e){Object(g.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(u.a)(this,s);for(var a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={song:null,songs:[],originalLyrics:[],translatedLyrics:[],languages:[],points:0,result:!1,message:{},lives:3},e.checkResults=function(t){var s=e.state.song.artist.toLowerCase().replaceAll(" ","").replaceAll("'","").replaceAll(".",""),a=e.state.song.title.toLowerCase().replaceAll(" ","").replaceAll("'","").replaceAll(".","");if(t.artist===s&&t.title===a)e.setState({points:e.state.points+600+t.bonus,result:!0,message:{text:"Correct!",pointChange:600,bonus:t.bonus}});else if(t.artist===s&&e.setState({points:e.state.points+150,result:!0,lives:e.state.lives-1,message:{text:"Almost!",pointChange:150,bonus:0}}),t.title===a&&e.setState({points:e.state.points+150,result:!0,lives:e.state.lives-1,message:{text:"Almost!",pointChange:150,bonus:0}}),t.artist!==s&&t.title!==a&&e.setState({result:!0,lives:e.state.lives-1,message:{text:"Try Again!",pointChange:0,bonus:0}}),0===e.state.lives){var i=Math.floor(12*Math.random()+1);return void(window.location="/gameover/".concat(e.props.match.params.category,"/").concat(e.state.points*i,"a").concat(i))}},e.nextRound=function(){if(0!==e.state.songs.length){var t=e.state.songs[Math.floor(Math.random()*e.state.songs.length)];e.setState({songs:e.state.songs.filter((function(e){return e.title!==t.title})),result:!1,translatedLyrics:[],message:{}}),e.getRoundLyrics(t)}else{var s=Math.floor(12*Math.random()+1);window.location="/gameover/".concat(e.props.match.params.category,"/").concat(e.state.points*s,"a").concat(s)}},e}return Object(m.a)(s,[{key:"getRoundLyrics",value:function(e){var t,s,a=this,i=v([].concat(_)).splice(0,2);this.setState({languages:i,song:e}),(t=e.artist.replaceAll(" ","%20"),s=e.title.replaceAll(" ","%20"),p.a.get("https://api.vagalume.com.br/search.php?art=".concat(t,"&mus=").concat(s,"&extra=relart&apikey=8ae936b91f65a1f7b5ffd12f2e1b188f"))).then((function(e){var t=e.data.mus[0].text.replaceAll("?","'").replaceAll("''","',").replaceAll("-"," ").split("\n"),s=t.splice(Math.floor(Math.random()*(.5*t.length)),8),n=s.join(" \n ");return a.setState({originalLyrics:s}),O(n,"en",i[0].language)})).then((function(e){return O(e.data.translatedText.replaceAll("\n"," \n "),i[0].language,i[1].language)})).then((function(e){return O(e.data.translatedText.replaceAll("\n"," \n "),i[1].language,"en")})).then((function(e){return a.setState({translatedLyrics:e.data.translatedText.split("\n")})})).catch((function(e){return console.log(e)}))}},{key:"componentDidMount",value:function(){var e=this,t=v(Object(d.a)(N.find((function(t){return t.category===e.props.match.params.category})).songs)),s=t[Math.floor(Math.random()*t.length)];this.setState({songs:t.filter((function(e){return e.title!==s.title}))}),this.getRoundLyrics(s)}},{key:"render",value:function(){return Object(o.jsx)("div",{className:"game",style:{filter:"hueRotate(".concat(Math.floor(720*Math.random())-360,"deg)")},children:Object(o.jsxs)("div",{className:"game__content",children:[Object(o.jsxs)("div",{className:"game__head",children:[Object(o.jsxs)("div",{className:"game__game-score",children:[Object(o.jsx)("h3",{className:"game__label",children:"Score:\xa0"}),Object(o.jsx)("span",{className:"game__score",children:this.state.points})]}),this.state.message.text&&Object(o.jsxs)("div",{className:"game__result",children:[Object(o.jsx)("span",{className:"result__message",children:this.state.message.text}),this.state.message.pointChange>0&&Object(o.jsx)("span",{className:"result__points",children:"+".concat(this.state.message.pointChange)}),this.state.message.bonus>0&&Object(o.jsx)("span",{className:"result__bonus",children:"(+".concat(this.state.message.bonus," Bonus)")})]}),Object(o.jsx)("div",{className:"game__lives",children:Object(o.jsx)(y,{lives:this.state.lives})})]}),this.state.translatedLyrics.length>0?this.state.result?Object(o.jsx)(f,{originalLyrics:this.state.originalLyrics,translatedLyrics:this.state.translatedLyrics,languages:this.state.languages,song:this.state.song,nextRound:this.nextRound,message:this.state.message}):Object(o.jsx)(x,{translatedLyrics:this.state.translatedLyrics,checkResults:this.checkResults}):Object(o.jsxs)("div",{className:"loading",children:[Object(o.jsx)("div",{className:"loading__icon",children:"\u21ba"}),Object(o.jsx)("div",{className:"loading__text",children:"Loading..."})]})]})})}}]),s}(a.Component),A=(s(70),function(e){Object(g.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(u.a)(this,s);for(var a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={highscores:[],isHighscore:!1,score:null},e}return Object(m.a)(s,[{key:"componentDidMount",value:function(){var e=this.props.match.params.category,t=this.props.match.params.id.split("a"),s=Number(t[0])/Number(t[1]),a=JSON.parse(localStorage.getItem("highscores")||"[]"),i=!a.find((function(e){return e.score>s}));a.push({category:e,score:s}),this.setState({highscores:a,isHighscore:i,score:s}),localStorage.setItem("highscores",JSON.stringify(a))}},{key:"render",value:function(){return Object(o.jsxs)("main",{className:"game-over",children:[Object(o.jsx)("h2",{className:"game-over__header",children:"Game Over!"}),Object(o.jsxs)("div",{className:"game-over__body",children:[Object(o.jsx)("h3",{className:"game-over__title",children:"Final Score:"}),this.state.score&&Object(o.jsxs)("p",{className:"game-over__score",children:[this.state.isHighscore?Object(o.jsx)("span",{className:"highscore",children:"\u2b50"}):Object(o.jsx)(o.Fragment,{}),this.state.score]}),this.state.highscores&&Object(o.jsxs)("div",{className:"leaderboard",children:[Object(o.jsx)("h3",{className:"game-over__title",children:"Your High Scores:"}),this.state.highscores.sort((function(e,t){return t.score-e.score})).map((function(e,t){return t<3?Object(o.jsxs)("div",{className:"leaderboard__row",children:[Object(o.jsx)("div",{className:"leaderboard__score",children:e.score}),Object(o.jsx)("div",{className:"leaderboard__category",children:e.category.replaceAll("-"," ")})]},Math.random()+t):null}))]})]}),Object(o.jsx)(l.b,{to:"/",className:"button button--link",children:"PLAY AGAIN"})]})}}]),s}(a.Component));var k=function(){return Object(o.jsx)(l.a,{children:Object(o.jsxs)(c.c,{children:[Object(o.jsx)(c.a,{path:"/",exact:!0,component:h}),Object(o.jsx)(c.a,{path:"/game/:category",component:S}),Object(o.jsx)(c.a,{path:"/gameover/:category/:id",component:A})]})})},B=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,72)).then((function(t){var s=t.getCLS,a=t.getFID,i=t.getFCP,n=t.getLCP,r=t.getTTFB;s(e),a(e),i(e),n(e),r(e)}))};r.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(k,{})}),document.getElementById("root")),B()}},[[71,1,2]]]);
//# sourceMappingURL=main.55fa580c.chunk.js.map