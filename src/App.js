import Navbar from './components/Navbar';
import Page from './pages/Page';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PhishingObby from './pages/GoingFishing';
import MainPage from './pages/MainPage';

function App() {
  return (
    <div>      
      {/* <Navbar/> */}
      
      <Router>
        <Switch>
          <Route path='/' exact component = {  MainPage} />

          <Route path="/SpoofingObby" exact component = {PhishingObby} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
