import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Register/Login/Login';
import Movies from '../Movies/Movies';
import NotFound from '../NotFound/NotFound';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Register/Profile/Profile';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/signup">
            <Register />
          </Route>
          <Route path="/signin">
            <Login />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/saved-movies">
            <SavedMovies />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="*">
             < NotFound/>
          </Route>
      </Switch>
    </div>
  );
}

export default App;
