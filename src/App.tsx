import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './components/main/Home';
import AllDreams from './components/main/AllDreams';
import AddADream from './components/main/AddADream';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import DreamDetails from './components/main/DreamDetails';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDreams } from './redux/dreams/dreamActionCreator';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDreams())
  }, [])

  return (
    <HashRouter basename='/'>
      <div className="wrapper">
        <Nav />

        <main>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/dreams/:id'>
              <DreamDetails />
            </Route>
            <Route path='/dreams'>
              <AllDreams />
            </Route>
            <Route path='/add-dream'>
              <AddADream />
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </main>

        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
