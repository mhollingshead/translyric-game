import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';
import GameOver from './pages/GameOver';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/game/:category" component={Game} />
        <Route path="/gameover/:category/:id" component={GameOver} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
