import React from 'react';
import CovidApp from './pages/CovidApp.jsx'
import SingleCountry from './pages/SingleCountry.jsx'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'


function App() {
  return (
    <div className="App" style = {{ "background-color" : "#a3b6ad"}}>
      <BrowserRouter>
        <Switch>
        {/* <Redirect from="/" to="/CovidProject"/> */}
          <Route path={["/","/CovidProject"]} exact={true} component={CovidApp} />
          <Route path="/country/:country" component={SingleCountry} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
