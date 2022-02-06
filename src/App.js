import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Layout from './layouts';
import Landing from './pages/landing';

function App() {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route exact path='/'>
            <Landing />
          </Route>
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
