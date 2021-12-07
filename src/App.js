import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import SearchBlock from './components/Search-block';
import Careers from './components/Careers';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
          <Header/>
             <Switch>           
               <Route path='/home' component={Home}/>
               <Route path='/employees' component={SearchBlock}/>
               <Route path='/careers' component={Careers}/>
               <Route path='/' component={Home}/>
              </Switch>         
      </Router>
    </div>
  );
}

export default App;
