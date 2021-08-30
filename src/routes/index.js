// libraries
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components
import Home from '../components/Home';
// import Modal from '../components/Modal';
import NotFound from '../components/NotFound';

const App = () => (
   <Router>
      <Switch>
         <Route exact path="/" component={Home} />
         <Route component={NotFound} />
      </Switch>
   </Router>
);

export default App;