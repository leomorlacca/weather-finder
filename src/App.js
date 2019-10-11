import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Progress } from 'reactstrap';

const HomePage = React.lazy(() => import('./containers/HomePage'));
const loading = () => <Progress />;

class App extends Component {
  render() {
    return (
      <HashRouter>
        <React.Suspense fallback={loading()}>
          <Switch>
            <Route path="/" name="Home" render={props => <HomePage {...props} />} />
            <Route path="/Home" name="Home" render={props => <HomePage {...props} />} />
          </Switch>
        </React.Suspense>
      </HashRouter>
    )
  }
}

export default App;
