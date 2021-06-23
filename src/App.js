import Navbar from './components/Navbar';
import Page from './components/Page';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PhishingObby from './components/GoingFishing';

function App() {
  return (
    <div>      
      <Navbar/>
      
      <Router>
        <Switch>
          <Route path='/' exact component = { Page } />

          <Route path="/PhishingObby" exact component = {PhishingObby} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
