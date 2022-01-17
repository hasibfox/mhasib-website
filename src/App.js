import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PhishingObby from './pages/GoingFishing';
import MainPage from './pages/MainPage';

function App() {
  return (
    <div>            
      <Router>
        <Switch>
          <Route path='/' exact component = {MainPage} />
          <Route path="/SpoofingObby" exact component = {PhishingObby} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
