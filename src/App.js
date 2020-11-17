import './App.css';
import SignUp from './Components/SignUp/SignUp';
import FullHeight from 'react-full-height';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './Components/SignIn/SignIn';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Welcome from './Components/Welcome/Welcome';

function App() {
  const [{user}, dispatch] = useStateValue();

  // checking either user signed in or not
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])


  let route;
  if (user?.email) {
    route = (
      <Switch>
        <Route exact path='/'>
          <Welcome />
        </Route>
        <Route path='/signUp'>
          <Welcome />
        </Route>
        <Route path='/welcome'>
          <Welcome />
        </Route>
      </Switch>
    )
  } else {
    route = (
      <Switch>
        <Route exact path='/'>
          <SignIn />
        </Route>
        <Route path='/signUp'>
          <SignUp />
        </Route>
        <Route path='/welcome'>
          <SignIn />
        </Route>
      </Switch>
    )
  }

  return (
    <FullHeight className='section-styles'>
      <div className="app">
        <Router>
          {route}
        </Router>
      </div>
    </FullHeight >
  );
}

export default App;
